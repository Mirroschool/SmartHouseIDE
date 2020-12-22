 
'use strict';

goog.provide('Blockly.Realtime');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('rtclient');

 
Blockly.Realtime.enabled_ = false;

 
Blockly.Realtime.document_ = null;

 
Blockly.Realtime.model_ = null;

 
Blockly.Realtime.sessionId_ = null;

 
Blockly.Realtime.initUi_ = null;

 
Blockly.Realtime.blocksMap_ = null;

 
Blockly.Realtime.withinSync = false;

 
Blockly.Realtime.realtimeLoader_ = null;

 
Blockly.Realtime.chatBoxElementId_ = null;

 
Blockly.Realtime.chatBoxInitialText_ = null;

 
Blockly.Realtime.withinUndo_ = false;

 
Blockly.Realtime.isEnabled = function() {
  return Blockly.Realtime.enabled_;
};

 
Blockly.Realtime.undoElementId_ = null;

 
Blockly.Realtime.redoElementId_ = null;

 
Blockly.Realtime.PROGRESS_URL_ = 'progress.gif';

 
Blockly.Realtime.ANONYMOUS_URL_ = 'anon.jpeg';

 
Blockly.Realtime.initializeModel_ = function(model) {
  Blockly.Realtime.model_ = model;
  var blocksMap = model.createMap();
  model.getRoot().set('blocks', blocksMap);
  var topBlocks = model.createList();
  model.getRoot().set('topBlocks', topBlocks);
  if (Blockly.Realtime.chatBoxElementId_) {
    model.getRoot().set(Blockly.Realtime.chatBoxElementId_,
        model.createString(Blockly.Realtime.chatBoxInitialText_));
  }
};

 
Blockly.Realtime.removeBlock = function(block) {
  Blockly.Realtime.blocksMap_['delete'](block.id.toString());
};

 
Blockly.Realtime.addTopBlock = function(block) {
  if (Blockly.Realtime.topBlocks_.indexOf(block) == -1) {
    Blockly.Realtime.topBlocks_.push(block);
  }
};

 
Blockly.Realtime.removeTopBlock = function(block) {
  Blockly.Realtime.topBlocks_.removeValue(block);
};

 
Blockly.Realtime.obtainBlock = function(workspace, prototypeName) {
  var newBlock =
      Blockly.Realtime.model_.create(Blockly.Block, workspace, prototypeName);
  return newBlock;
};

 
Blockly.Realtime.getBlockById = function(id) {
  return Blockly.Realtime.blocksMap_.get(id);
};

 
Blockly.Realtime.logEvent_ = function(evt) {
  console.log('Object event:');
  console.log('  id: ' + evt.target.id);
  console.log('  type: ' + evt.type);
  var events = evt.events;
  if (events) {
    var eventCount = events.length;
    for (var i = 0; i < eventCount; i++) {
      var event = events[i];
      console.log('  child event:');
      console.log('    id: ' + event.target.id);
      console.log('    type: ' + event.type);
    }
  }
};

 
Blockly.Realtime.onObjectChange_ = function(evt) {
  var events = evt.events;
  var eventCount = evt.events.length;
  for (var i = 0; i < eventCount; i++) {
    var event = events[i];
    if (!event.isLocal || Blockly.Realtime.withinUndo_) {
      var block = event.target;
      if (event.type == 'value_changed') {
        if (event.property == 'xmlDom') {
          Blockly.Realtime.doWithinSync_(function() {
            Blockly.Realtime.placeBlockOnWorkspace_(block, false);
            Blockly.Realtime.moveBlock_(block);
          });
        } else if (event.property == 'relativeX' ||
            event.property == 'relativeY') {
          Blockly.Realtime.doWithinSync_(function() {
            if (!block.svg_) {
              // If this is a move of a newly disconnected (i.e. newly top
              // level) block it will not have any svg (because it has been
              // disposed of by its parent), so we need to handle that here.
              Blockly.Realtime.placeBlockOnWorkspace_(block, false);
            }
            Blockly.Realtime.moveBlock_(block);
          });
        }
      }
    }
  }
};

 
Blockly.Realtime.onBlocksMapChange_ = function(evt) {
  if (!evt.isLocal || Blockly.Realtime.withinUndo_) {
    var block = evt.newValue;
    if (block) {
      Blockly.Realtime.placeBlockOnWorkspace_(block, !(evt.oldValue));
    } else {
      block = evt.oldValue;
      Blockly.Realtime.deleteBlock(block);
    }
  }
};

 
Blockly.Realtime.doWithinSync_ = function(thunk) {
  if (Blockly.Realtime.withinSync) {
    thunk();
  } else {
    try {
      Blockly.Realtime.withinSync = true;
      thunk();
    } finally {
      Blockly.Realtime.withinSync = false;
    }
  }
};

 
Blockly.Realtime.placeBlockOnWorkspace_ = function(block, addToTop) {
  Blockly.Realtime.doWithinSync_(function() {
//    if (!Blockly.Realtime.blocksMap_.has(block.id)) {
//      Blockly.Realtime.blocksMap_.set(block.id, block);
//    }
    var blockDom = Blockly.Xml.textToDom(block.xmlDom).firstChild;
    var newBlock =
        Blockly.Xml.domToBlock(Blockly.mainWorkspace, blockDom, true);
    // TODO: The following is for debugging.  It should never actually happen.
    if (!newBlock) {
      return;
    }
    // Since Blockly.Xml.blockDomToBlock() purposely won't add blocks to
    // workspace.topBlocks_ we sometimes need to do it explicitly here.
    if (addToTop) {
      newBlock.workspace.addTopBlock(newBlock);
    }
    if (addToTop ||
        goog.array.contains(Blockly.Realtime.topBlocks_, newBlock)) {
      Blockly.Realtime.moveBlock_(newBlock);
    }
  });
};

 
Blockly.Realtime.moveBlock_ = function(block) {
  if (!isNaN(block.relativeX) && !isNaN(block.relativeY)) {
    var width = Blockly.svgSize().width;
    var curPos = block.getRelativeToSurfaceXY();
    var dx = block.relativeX - curPos.x;
    var dy = block.relativeY - curPos.y;
    block.moveBy(Blockly.RTL ? width - dx : dx, dy);
  }
};

 
Blockly.Realtime.deleteBlock = function(block) {
  Blockly.Realtime.doWithinSync_(function() {
    block.dispose(true, true, true);
  });
};

 
Blockly.Realtime.loadBlocks_ = function() {
  var topBlocks = Blockly.Realtime.topBlocks_;
  for (var j = 0; j < topBlocks.length; j++) {
    var topBlock = topBlocks.get(j);
    Blockly.Realtime.placeBlockOnWorkspace_(topBlock, true);
  }
};

 
Blockly.Realtime.blockChanged = function(block) {
  if (block.workspace == Blockly.mainWorkspace &&
      Blockly.Realtime.isEnabled() &&
      !Blockly.Realtime.withinSync) {
    var rootBlock = block.getRootBlock();
    var xy = rootBlock.getRelativeToSurfaceXY();
    var changed = false;
    var xml = Blockly.Xml.blockToDom_(rootBlock);
    xml.setAttribute('id', rootBlock.id);
    var topXml = goog.dom.createDom('xml');
    topXml.appendChild(xml);
    var newXml = Blockly.Xml.domToText(topXml);
    if (newXml != rootBlock.xmlDom) {
      changed = true;
      rootBlock.xmlDom = newXml;
    }
    if (rootBlock.relativeX != xy.x || rootBlock.relativeY != xy.y) {
      rootBlock.relativeX = xy.x;
      rootBlock.relativeY = xy.y;
      changed = true;
    }
    if (changed) {
      var blockId = rootBlock.id.toString();
      Blockly.Realtime.blocksMap_.set(blockId, rootBlock);
    }
  }
};

 
Blockly.Realtime.onFileLoaded_ = function(doc) {
  Blockly.Realtime.document_ = doc;
  Blockly.Realtime.sessionId_ = Blockly.Realtime.getSessionId_(doc);
  Blockly.Realtime.model_ = doc.getModel();
  Blockly.Realtime.blocksMap_ =
      Blockly.Realtime.model_.getRoot().get('blocks');
  Blockly.Realtime.topBlocks_ =
      Blockly.Realtime.model_.getRoot().get('topBlocks');

  Blockly.Realtime.model_.getRoot().addEventListener(
      gapi.drive.realtime.EventType.OBJECT_CHANGED,
      Blockly.Realtime.onObjectChange_);
  Blockly.Realtime.blocksMap_.addEventListener(
      gapi.drive.realtime.EventType.VALUE_CHANGED,
      Blockly.Realtime.onBlocksMapChange_);

  Blockly.Realtime.initUi_();

  //Adding Listeners for Collaborator events.
  doc.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_JOINED,
      Blockly.Realtime.onCollaboratorJoined_);
  doc.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_LEFT,
      Blockly.Realtime.onCollaboratorLeft_);
  Blockly.Realtime.updateCollabUi_();

  Blockly.Realtime.loadBlocks_();

  // Add logic for undo button.
  // TODO: Uncomment this when undo/redo are fixed.
//
//  var undoButton = document.getElementById(Blockly.Realtime.undoElementId_);
//  var redoButton = document.getElementById(Blockly.Realtime.redoElementId_);
//
//  if (undoButton) {
//    undoButton.onclick = function (e) {
//      try {
//        Blockly.Realtime.withinUndo_ = true;
//        Blockly.Realtime.model_.undo();
//      } finally {
//        Blockly.Realtime.withinUndo_ = false;
//      }
//    };
//  }
//  if (redoButton) {
//    redoButton.onclick = function (e) {
//      try {
//        Blockly.Realtime.withinUndo_ = true;
//        Blockly.Realtime.model_.redo();
//      } finally {
//        Blockly.Realtime.withinUndo_ = false;
//      }
//    };
//  }
//
//  // Add event handler for UndoRedoStateChanged events.
//  var onUndoRedoStateChanged = function(e) {
//    undoButton.disabled = !e.canUndo;
//    redoButton.disabled = !e.canRedo;
//  };
//  Blockly.Realtime.model_.addEventListener(
//      gapi.drive.realtime.EventType.UNDO_REDO_STATE_CHANGED,
//      onUndoRedoStateChanged);

};


Blockly.Realtime.getSessionId_ = function(doc) {
  var collaborators = doc.getCollaborators();
  for (var i = 0; i < collaborators.length; i++) {
    var collaborator = collaborators[i];
    if (collaborator.isMe) {
      return collaborator.sessionId;
    }
  }
  return undefined;
};


Blockly.Realtime.registerTypes_ = function() {
  var custom = gapi.drive.realtime.custom;

  custom.registerType(Blockly.Block, 'Block');
  Blockly.Block.prototype.id = custom.collaborativeField('id');
  Blockly.Block.prototype.xmlDom = custom.collaborativeField('xmlDom');
  Blockly.Block.prototype.relativeX = custom.collaborativeField('relativeX');
  Blockly.Block.prototype.relativeY = custom.collaborativeField('relativeY');

  custom.setInitializer(Blockly.Block, Blockly.Block.prototype.initialize);
};


Blockly.Realtime.REAUTH_INTERVAL_IN_MILLISECONDS_ = 30 * 60 * 1000;


Blockly.Realtime.afterAuth_ = function() {
  // This is a workaround for the fact that the code in realtime-client-utils.js
  // doesn't deal with auth timeouts correctly.  So we explicitly reauthorize at
  // regular intervals.
  setTimeout(
      function() {
        Blockly.Realtime.realtimeLoader_.authorizer.authorize(
            Blockly.Realtime.afterAuth_);
      },
      Blockly.Realtime.REAUTH_INTERVAL_IN_MILLISECONDS_);
};


Blockly.Realtime.afterCreate_ = function(fileId) {
  var resource = {
    'type': 'anyone',
    'role': 'writer',
    'value': 'default',
    'withLink': true
  };
  var request = gapi.client.drive.permissions.insert({
    'fileId': fileId,
    'resource': resource
  });
  request.execute(function(resp) {
    // If we have an error try to just set the permission for all users
    // of the domain.
    if (resp.error) {
      Blockly.Realtime.getUserDomain(fileId, function(domain) {
        var resource = {
          'type': 'domain',
          'role': 'writer',
          'value': domain,
          'withLink': true
        };
        request = gapi.client.drive.permissions.insert({
          'fileId': fileId,
          'resource': resource
        });
        request.execute(function(resp) { });
      });
    }
  });
};


Blockly.Realtime.getUserDomain = function(fileId, callback) {

  var request = gapi.client.drive.permissions.list({
    'fileId': fileId
  });
  request.execute(function(resp) {
    for (var i = 0; i < resp.items.length; i++) {
      var item = resp.items[i];
      if (item.role == 'owner') {
        callback(item.domain);
        return;
      }
    }
  });
};


Blockly.Realtime.rtclientOptions_ = {

  'clientId': null,

 
  'authButtonElementId': 'authorizeButton',

  
  'authDivElementId': 'authButtonDiv',

 
  'initializeModel': Blockly.Realtime.initializeModel_,

 
  'autoCreate': true,

  
  'defaultTitle': 'Realtime Blockly File',

  
  'defaultFolderTitle': 'Realtime Blockly Folder',

  
  'newFileMimeType': null, // Using default.

  
  'onFileLoaded': Blockly.Realtime.onFileLoaded_,

  
  'registerTypes': Blockly.Realtime.registerTypes_,

 
  'afterAuth': Blockly.Realtime.afterAuth_,

  
  'afterCreate': Blockly.Realtime.afterCreate_
};


Blockly.Realtime.parseOptions_ = function(options) {
  var chatBoxOptions = rtclient.getOption(options, 'chatbox');
  if (chatBoxOptions) {
    Blockly.Realtime.chatBoxElementId_ =
        rtclient.getOption(chatBoxOptions, 'elementId');
    Blockly.Realtime.chatBoxInitialText_ =
        rtclient.getOption(chatBoxOptions, 'initText', Blockly.Msg.CHAT);
  }
  Blockly.Realtime.rtclientOptions_.clientId =
      rtclient.getOption(options, 'clientId');
  Blockly.Realtime.collabElementId =
      rtclient.getOption(options, 'collabElementId');
  // TODO: Uncomment this when undo/redo are fixed.
//  Blockly.Realtime.undoElementId_ =
//      rtclient.getOption(options, 'undoElementId', 'undoButton');
//  Blockly.Realtime.redoElementId_ =
//      rtclient.getOption(options, 'redoElementId', 'redoButton');
};


Blockly.Realtime.startRealtime = function(uiInitialize, uiContainer, options) {
  Blockly.Realtime.parseOptions_(options);
  Blockly.Realtime.enabled_ = true;
  // Note that we need to setup the UI for realtime authorization before
  // loading the realtime code (which, in turn, will handle initializing the
  // rest of the Blockly UI).
  var authDiv = Blockly.Realtime.addAuthUi_(uiContainer);
  Blockly.Realtime.initUi_ = function() {
    uiInitialize();
    if (Blockly.Realtime.chatBoxElementId_) {
      var chatText = Blockly.Realtime.model_.getRoot().get(
          Blockly.Realtime.chatBoxElementId_);
      var chatBox = document.getElementById(Blockly.Realtime.chatBoxElementId_);
      gapi.drive.realtime.databinding.bindString(chatText, chatBox);
      chatBox.disabled = false;
    }
  };
  Blockly.Realtime.realtimeLoader_ =
      new rtclient.RealtimeLoader(Blockly.Realtime.rtclientOptions_);
  Blockly.Realtime.realtimeLoader_.start();
};


Blockly.Realtime.addAuthUi_ = function(uiContainer) {
  // Add progress indicator to the UI container.
  uiContainer.style.background = 'url(' + Blockly.pathToMedia +
      Blockly.Realtime.PROGRESS_URL_ + ') no-repeat center center';
  // Setup authorization button
  var blocklyDivBounds = goog.style.getBounds(uiContainer);
  var authButtonDiv = goog.dom.createDom('div');
  authButtonDiv.id = Blockly.Realtime.rtclientOptions_['authDivElementId'];
  var authText = goog.dom.createDom('p', null, Blockly.Msg.AUTH);
  authButtonDiv.appendChild(authText);
  var authButton = goog.dom.createDom('button', null, 'Authorize');
  authButton.id = Blockly.Realtime.rtclientOptions_.authButtonElementId;
  authButtonDiv.appendChild(authButton);
  uiContainer.appendChild(authButtonDiv);

  // TODO: I would have liked to set the style for the authButtonDiv in css.js
  // but that CSS doesn't get injected until after this code gets run.
  authButtonDiv.style.display = 'none';
  authButtonDiv.style.position = 'relative';
  authButtonDiv.style.textAlign = 'center';
  authButtonDiv.style.border = '1px solid';
  authButtonDiv.style.backgroundColor = '#f6f9ff';
  authButtonDiv.style.borderRadius = '15px';
  authButtonDiv.style.boxShadow = '10px 10px 5px #888';
  authButtonDiv.style.width = (blocklyDivBounds.width / 3) + 'px';
  var authButtonDivBounds = goog.style.getBounds(authButtonDiv);
  authButtonDiv.style.left =
      (blocklyDivBounds.width - authButtonDivBounds.width) / 3 + 'px';
  authButtonDiv.style.top =
      (blocklyDivBounds.height - authButtonDivBounds.height) / 4 + 'px';
  return authButtonDiv;
};


Blockly.Realtime.updateCollabUi_ = function() {
  if (!Blockly.Realtime.collabElementId) {
    return;
  }
  var collabElement = goog.dom.getElement(Blockly.Realtime.collabElementId);
  goog.dom.removeChildren(collabElement);
  var collaboratorsList = Blockly.Realtime.document_.getCollaborators();
  for (var i = 0; i < collaboratorsList.length; i++) {
    var collaborator = collaboratorsList[i];
    var imgSrc = collaborator.photoUrl ||
        Blockly.pathToMedia + Blockly.Realtime.ANONYMOUS_URL_;
    var img = goog.dom.createDom('img',
        {
          'src': imgSrc,
          'alt': collaborator.displayName,
          'title': collaborator.displayName +
              (collaborator.isMe ? ' (' + Blockly.Msg.ME + ')' : '')});
    img.style.backgroundColor = collaborator.color;
    goog.dom.appendChild(collabElement, img);
  }
};


Blockly.Realtime.onCollaboratorJoined_ = function(event) {
  Blockly.Realtime.updateCollabUi_();
};


Blockly.Realtime.onCollaboratorLeft_ = function(event) {
  Blockly.Realtime.updateCollabUi_();
};


Blockly.Realtime.doCommand = function(cmdThunk) {
  // TODO(): We'd like to use the realtime API compound operations as in the
  // commented out code below.  However, it appears that the realtime API is
  // re-ordering events when they're within compound operations in a way which
  // breaks us.  We might need to implement our own compound operations as a
  // workaround.  Doing so might give us some other advantages since we could
  // then allow compound operations that span synchronous blocks of code (e.g.,
  // span multiple Blockly events).  It would also allow us to deal with the
  // fact that the current realtime API puts some operations into the undo stack
  // that we would prefer weren't there; namely local changes that occur as a
  // result of remote realtime events.
//  try {
//    Blockly.Realtime.model_.beginCompoundOperation();
//    cmdThunk();
//  } finally {
//    Blockly.Realtime.model_.endCompoundOperation();
//  }
  cmdThunk();
};


Blockly.Realtime.genUid = function(extra) {
  /* The idea here is that we use the extra string to ensure uniqueness within
     this session and the current sessionId to ensure uniqueness across
     all the current sessions.  There's still the (remote) chance that the
     current sessionId is the same as some old (non-current) one, so we still
     need to check that our uid hasn't been previously used.

     Note that you could potentially use a random number to generate the id but
     there remains the small chance of regenerating the same number that's been
     used before and I'm paranoid.  It's not enough to just check that the
     random uid hasn't been previously used because other concurrent sessions
     might generate the same uid at the same time.  Like I said, I'm paranoid.
   */
  var potentialUid = Blockly.Realtime.sessionId_ + '-' + extra;
  if (!Blockly.Realtime.blocksMap_.has(potentialUid)) {
    return potentialUid;
  } else {
    return (Blockly.Realtime.genUid('-' + extra));
  }
};
