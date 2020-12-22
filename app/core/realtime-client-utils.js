
'use strict';


goog.provide('rtclient');



rtclient.INSTALL_SCOPE = ' ';


rtclient.FILE_SCOPE = ' ';


rtclient.APPDATA_SCOPE = ' ';


rtclient.OPENID_SCOPE = 'openid';


rtclient.REALTIME_MIMETYPE = 'application/vnd.google-apps.drive-sdk';


rtclient.FOLDER_KEY = 'folderId';

/**
 * Parses the hash parameters to this page and returns them as an object.
 * @return {!Object} Parameter object.
 */
rtclient.getParams = function() {
  // Be careful with regards to node.js which has no window or location.
  var location = goog.global['location'] || {};
  var params = {};
  function parseParams(fragment) {
    // Split up the query string and store in an object.
    var paramStrs = fragment.slice(1).split('&');
    for (var i = 0; i < paramStrs.length; i++) {
      var paramStr = paramStrs[i].split('=');
      params[decodeURIComponent(paramStr[0])] = decodeURIComponent(paramStr[1]);
    }
  }
  var hashFragment = location.hash;
  if (hashFragment) {
    parseParams(hashFragment);
  }
  // Opening from Drive will encode the state in a query search parameter.
  var searchFragment = location.search;
  if (searchFragment) {
    parseParams(searchFragment);
  }
  return params;
};

 
rtclient.params = rtclient.getParams();

 
rtclient.getOption = function(options, key, opt_defaultValue) {
  if (options.hasOwnProperty(key)) {
    return options[key];
  }
  if (opt_defaultValue === undefined) {
    console.error(key + ' should be present in the options.');
  }
  return opt_defaultValue;
};

 
rtclient.Authorizer = function(options) {
  this.clientId = rtclient.getOption(options, 'clientId');
  // Get the user ID if it's available in the state query parameter.
  this.userId = rtclient.params['userId'];
  this.authButton = document.getElementById(rtclient.getOption(options,
      'authButtonElementId'));
  this.authDiv = document.getElementById(rtclient.getOption(options,
      'authDivElementId'));
};

 
rtclient.Authorizer.prototype.start = function(onAuthComplete) {
  var _this = this;
  gapi.load('auth:client,drive-realtime,drive-share', function() {
    _this.authorize(onAuthComplete);
  });
};

 
rtclient.Authorizer.prototype.authorize = function(onAuthComplete) {
  var clientId = this.clientId;
  var userId = this.userId;
  var _this = this;
  var handleAuthResult = function(authResult) {
    if (authResult && !authResult.error) {
      _this.authButton.disabled = true;
      _this.fetchUserId(onAuthComplete);
      _this.authDiv.style.display = 'none';
    } else {
      _this.authButton.disabled = false;
      _this.authButton.onclick = authorizeWithPopup;
      _this.authDiv.style.display = 'block';
    }
  };
  var authorizeWithPopup = function() {
    gapi.auth.authorize({
      'client_id': clientId,
      'scope': [
        rtclient.INSTALL_SCOPE,
        rtclient.FILE_SCOPE,
        rtclient.OPENID_SCOPE,
        rtclient.APPDATA_SCOPE
      ],
      'user_id': userId,
      'immediate': false
    }, handleAuthResult);
  };
  // Try with no popups first.
  gapi.auth.authorize({
    'client_id': clientId,
    'scope': [
      rtclient.INSTALL_SCOPE,
      rtclient.FILE_SCOPE,
      rtclient.OPENID_SCOPE,
      rtclient.APPDATA_SCOPE
    ],
    'user_id': userId,
    'immediate': true
  }, handleAuthResult);
};

 
rtclient.Authorizer.prototype.fetchUserId = function(callback) {
  var _this = this;
  gapi.client.load('oauth2', 'v2', function() {
    gapi.client.oauth2.userinfo.get().execute(function(resp) {
      if (resp.id) {
        _this.userId = resp.id;
      }
      if (callback) {
        callback();
      }
    });
  });
};

 
rtclient.createRealtimeFile = function(title, mimeType, folderTitle, callback) {

  function insertFile(folderId) {
    gapi.client.drive.files.insert({
      'resource': {
        'mimeType': mimeType,
        'title': title,
        'parents': [{'id': folderId}]
      }
    }).execute(callback);
  }

  function getOrCreateFolder() {

    function storeInAppdataProperty(folderId) {
      // Store folder id in a custom property of the appdata folder.  The
      // 'appdata' folder is a special Google Drive folder that is only
      // accessible by a specific app (i.e. identified by the client id).
      gapi.client.drive.properties.insert({
        'fileId': 'appdata',
        'resource': { 'key': rtclient.FOLDER_KEY, 'value': folderId }
      }).execute(function(resp) {
        insertFile(folderId);
      });
    };

    function createFolder() {
      gapi.client.drive.files.insert({
        'resource': {
          'mimeType': 'application/vnd.google-apps.folder',
          'title': folderTitle
        }
      }).execute(function(folder) {
        storeInAppdataProperty(folder.id);
      });
    }

    // Get the folder id from the appdata properties.
    gapi.client.drive.properties.get({
      'fileId': 'appdata',
      'propertyKey': rtclient.FOLDER_KEY
    }).execute(function(resp) {
       if (resp.error) {
        // There's no folder id stored yet so we create a new folder if a
        // folderTitle has been supplied.
        if (folderTitle) {
          createFolder();
        } else {
          // There's no folder specified, so we just store the file in the
          // user's root folder.
          storeInAppdataProperty('root');
        }
      } else {
         var folderId = resp.result.value;
         gapi.client.drive.files.get({
           'fileId': folderId
         }).execute(function(resp) {
           if (resp.error || resp.labels.trashed) {
             // Folder doesn't exist or was deleted, so create a new one.
             createFolder();
           } else {
             insertFile(folderId);
           }
         });
      }
    });
  }

  gapi.client.load('drive', 'v2', function() {
    getOrCreateFolder();
  });
};

 
rtclient.getFileMetadata = function(fileId, callback) {
  gapi.client.load('drive', 'v2', function() {
    gapi.client.drive.files.get({
      'fileId': fileId
    }).execute(callback);
  });
};

 
rtclient.parseState = function(stateParam) {
  try {
    var stateObj = JSON.parse(stateParam);
    return stateObj;
  } catch (e) {
    return null;
  }
};

 
rtclient.RealtimeLoader = function(options) {
  // Initialize configuration variables.
  this.onFileLoaded = rtclient.getOption(options, 'onFileLoaded');
  this.newFileMimeType = rtclient.getOption(options, 'newFileMimeType',
      rtclient.REALTIME_MIMETYPE);
  this.initializeModel = rtclient.getOption(options, 'initializeModel');
  this.registerTypes = rtclient.getOption(options, 'registerTypes',
      function() {});
  this.afterAuth = rtclient.getOption(options, 'afterAuth', function() {});
  // This tells us if need to we automatically create a file after auth.
  this.autoCreate = rtclient.getOption(options, 'autoCreate', false);
  this.defaultTitle = rtclient.getOption(options, 'defaultTitle',
      'New Realtime File');
  this.defaultFolderTitle = rtclient.getOption(options, 'defaultFolderTitle',
      '');
  this.afterCreate = rtclient.getOption(options, 'afterCreate', function() {});
  this.authorizer = new rtclient.Authorizer(options);
};

 
rtclient.RealtimeLoader.prototype.redirectTo = function(fileIds, userId) {
  var params = [];
  if (fileIds) {
    params.push('fileIds=' + fileIds.join(','));
  }
  if (userId) {
    params.push('userId=' + userId);
  }
  // Naive URL construction.
  var newUrl = params.length == 0 ?
      window.location.pathname :
      (window.location.pathname + '#' + params.join('&'));
  // Using HTML URL re-write if available.
  if (window.history && window.history.replaceState) {
    window.history.replaceState('Google Drive Realtime API Playground',
        'Google Drive Realtime API Playground', newUrl);
  } else {
    window.location.href = newUrl;
  }
  // We are still here that means the page didn't reload.
  rtclient.params = rtclient.getParams();
  for (var index in fileIds) {
    gapi.drive.realtime.load(fileIds[index], this.onFileLoaded,
        this.initializeModel, this.handleErrors);
  }
};

 
rtclient.RealtimeLoader.prototype.start = function() {
  // Bind to local context to make them suitable for callbacks.
  var _this = this;
  this.authorizer.start(function() {
    if (_this.registerTypes) {
      _this.registerTypes();
    }
    if (_this.afterAuth) {
      _this.afterAuth();
    }
    _this.load();
  });
};

 
rtclient.RealtimeLoader.prototype.handleErrors = function(e) {
  if (e.type == gapi.drive.realtime.ErrorType.TOKEN_REFRESH_REQUIRED) {
    this.authorizer.authorize();
  } else if (e.type == gapi.drive.realtime.ErrorType.CLIENT_ERROR) {
    alert('An Error happened: ' + e.message);
    window.location.href = '/';
  } else if (e.type == gapi.drive.realtime.ErrorType.NOT_FOUND) {
    alert('The file was not found. It does not exist or you do not have ' +
        'read access to the file.');
    window.location.href = '/';
  }
};

 
rtclient.RealtimeLoader.prototype.load = function() {
  var fileIds = rtclient.params['fileIds'];
  if (fileIds) {
    fileIds = fileIds.split(',');
  }
  var userId = this.authorizer.userId;
  var state = rtclient.params['state'];
  // Creating the error callback.
  var authorizer = this.authorizer;
  // We have file IDs in the query parameters, so we will use them to load a
  // file.
  if (fileIds) {
    for (var index in fileIds) {
      gapi.drive.realtime.load(fileIds[index], this.onFileLoaded,
          this.initializeModel, this.handleErrors);
    }
    return;
  }
  // We have a state parameter being redirected from the Drive UI.
  // We will parse it and redirect to the fileId contained.
  else if (state) {
    var stateObj = rtclient.parseState(state);
    // If opening a file from Drive.
    if (stateObj.action == 'open') {
      fileIds = stateObj.ids;
      userId = stateObj.userId;
      this.redirectTo(fileIds, userId);
      return;
    }
  }
  if (this.autoCreate) {
    this.createNewFileAndRedirect();
  }
};

 
rtclient.RealtimeLoader.prototype.createNewFileAndRedirect = function() {
  // No fileId or state have been passed. We create a new Realtime file and
  // redirect to it.
  var _this = this;
  rtclient.createRealtimeFile(this.defaultTitle, this.newFileMimeType,
      this.defaultFolderTitle,
      function(file) {
        if (file.id) {
          if (_this.afterCreate) {
            _this.afterCreate(file.id);
          }
          _this.redirectTo([file.id], _this.authorizer.userId);
        } else {
          // File failed to be created, log why and do not attempt to redirect.
          console.error('Error creating file.');
          console.error(file);
        }
      });
};
