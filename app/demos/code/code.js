
'use strict';


var Code = {};
//ADEL
var rtl;


Code.LANGUAGE_NAME = {

  'en': 'English',//английский -
  'ru': 'Рус-Eng',//англ-рус  -         
  'ry': 'Русский',//русский
  'ua': 'Українська',
  'ar': 'العربية',//арабский -- -
  'be': 'বাঙালি',//бенгальский    - 
  'it': 'Italiano',//итальянский  -   
  'is': 'Español',//испанский  -      
  'hi': 'हिन्दी',//хинди    -            
  'ko': '한국인',//корейский  -       
  'ma': 'Malay',//малайский   -      
  'de': 'Deutsch',//немецкий  -             
  'ne': 'Nederlands',//нидерландский -     
  'pe': 'پارسی',//персидский --  -
  'tu': 'Türk',//турецкий   -           
  'po': 'Portugues',//португальский   -  
  'ki': 'Kiswahili',//суахили                
  'fr': 'Français',//французский         
  'ci': '中國人',//китайский            
  'ai': '日本人',//японский              
};


Code.LANGUAGE_RTL = ['ar', 'pe']; //инвектируем с права на лево


Code.workspace = null;




Code.getStringParamFromUrl = function (name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};


Code.getLang = function () {
  var lang = Code.getStringParamFromUrl('lang', '');
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    // Default to rus
    lang = 'en';
  }
  return lang;
};


Code.isRtl = function () {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};


Code.loadBlocks = function (defaultXml) {
  try {
    var loadOnce = window.sessionStorage.loadOnceBlocks;
  } catch (e) {
    // Firefox sometimes throws a SecurityError when accessing sessionStorage.
    // Restarting Firefox fixes this, so it looks like a bug.
    var loadOnce = null;
  }
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    // An href with #key trigers an AJAX call to retrieve saved blocks.
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else if (loadOnce) {
    // Language switching stores the blocks during the reload.
    delete window.sessionStorage.loadOnceBlocks;
    var xml = Blockly.Xml.textToDom(loadOnce);
    Blockly.Xml.domToWorkspace(Code.workspace, xml);
  } else if (defaultXml) {
    // Load the editor with default starting blocks.
    var xml = Blockly.Xml.textToDom(defaultXml);
    Blockly.Xml.domToWorkspace(Code.workspace, xml);
  } else if ('BlocklyStorage' in window) {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  }
};


Code.changeLanguage = function () {
  // Store the blocks for the duration of the reload.
  // This should be skipped for the index page, which has no blocks and does
  // not load Blockly.
  // MSIE 11 does not support sessionStorage on file:// URLs.
  if (typeof Blockly != 'undefined' && window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
  }

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
    languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
    window.location.host + window.location.pathname + search;
};


Code.bindClick = function (el, func) {
  if (typeof el == 'string') {
    el = document.getElementById(el);
  }
  el.addEventListener('click', func, true);
  el.addEventListener('touchend', func, true);
};


Code.importPrettify = function () {
  //<link rel="stylesheet" href="../prettify.css">
  //<script src="../prettify.js"></script>
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', '../prettify.css');
  document.head.appendChild(link);
  var script = document.createElement('script');
  script.setAttribute('src', '../prettify.js');
  document.head.appendChild(script);
};


Code.getBBox_ = function (element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};


Code.LANG = Code.getLang();


Code.TABS_ = ['blocks', 'arduino', 'xml'];

Code.selected = 'blocks';


Code.tabClick = function (clickedName) {
  // If the XML tab was open, save and render the content.
  if (document.getElementById('tab_xml').className == 'tabon') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlText = xmlTextarea.value;
    var xmlDom = null;
    try {
      xmlDom = Blockly.Xml.textToDom(xmlText);
    } catch (e) {
      var q =
        window.confirm(MSG['badXml'].replace('%1', e));
      if (!q) {
        // Leave the user on the XML tab.
        return;
      }
    }
    if (xmlDom) {
      Code.workspace.clear();
      Blockly.Xml.domToWorkspace(Code.workspace, xmlDom);
    }
  }

  if (document.getElementById('tab_blocks').className == 'tabon') {
    Code.workspace.setVisible(false);
  }
  // Deselect all tabs and hide all panes.
  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    document.getElementById('tab_' + name).className = 'taboff';
    document.getElementById('content_' + name).style.visibility = 'hidden';
  }

  Code.selected = clickedName;


  //ADEL WARNING
  var warningText;
  if (Code.selected == 'arduino') {
    // Check for bad block configurations that make it unlikely that
    // the resulting code is correct.
    var badBlock = Blockly.Arduino.getUnconnectedBlock();
    //alert(badBlock);
    if (badBlock) {
      warningText = MSG['warningBadBlock'];

    } else {
      badBlock = Blockly.Arduino.getBlockWithWarning();
      if (badBlock) {
        warningText = MSG['warningPleaseFix'];
      }
    }


    if (badBlock) {
      // Go to blocks pane.
      //Code.displayTab('tab_blocks');

      Code.selected = 'blocks';
      clickedName = 'blocks';

      // Pop up warning dialog, making an offending block blink.
      // If they close the dialog with "OK", they remain in the blocks pane.
      // If they choose the other option ("generate Lua anyway"), the fake
      // tab "tab_lua!" is selected, and this validation will get skipped.
      var style = {
        left: '25%',
        top: '5em'
      };

      document.getElementById('badBlockMsg').innerHTML = warningText;
      BlocklyApps.showDialog(document.getElementById('badBlockDiv'), null,
        false, true, style, BlocklyApps.stopDialogKeyDown);
      BlocklyApps.startDialogKeyDown();

      var blink = function () {
        badBlock.select();
        if (BlocklyApps.isDialogVisible_) {
          window.setTimeout(function () { badBlock.unselect(); }, 150);
          window.setTimeout(blink, 300);
        }
      };
      blink();

    }
  }
  //




  // Select the active tab.


  document.getElementById('tab_' + clickedName).className = 'tabon';
  // Show the selected pane.
  document.getElementById('content_' + clickedName).style.visibility =
    'visible';
  Code.renderContent();
  if (clickedName == 'blocks') {
    Code.workspace.setVisible(true);
  }
  Blockly.fireUiEvent(window, 'resize');
};


Code.renderContent = function () {
  var content = document.getElementById('content_' + Code.selected);
  // Initialize the pane.
  if (content.id == 'content_xml') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    xmlTextarea.value = xmlText;
    xmlTextarea.focus();
  } else if (content.id == 'content_javascript') {
    var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'js');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_python') {
    code = Blockly.Python.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'py');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_php') {
    code = Blockly.PHP.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'php');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_arduino') {
    code = Blockly.Arduino.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'arduino');
      content.innerHTML = code;
    }
  }
};


Code.yes = function () {
  var ko = Code.workspace.getAllBlocksADEL();
  var myb = Code.workspace.getAllBlocks();

  document.getElementById('capacity').innerHTML = Code.workspace.getAllBlocks();
  document.getElementById('test').innerHTML = ko.length - 1;

  /*   //
      var toolbox = '<xml id="toolbox" >';
        toolbox += '<category id="catInOut" colour="10">';
    toolbox += '   <block type="inout_digital_read"></block>';
    toolbox += '   <block type="inout_analog_read"></block>';
          toolbox += '</category>';
    toolbox += '</xml>';
     if (ko.length>2){
         //Code.workspace.updateToolbox(toolbox);
     }
      //*/
}

Code.init = function () {
  Code.initLanguage();
  Code.initSketchUpload();

  var RTL = Code.isRtl();
  rtl = Code.isRtl();
  var container = document.getElementById('content_area');
  var onresize = function (e) {
    var bBox = Code.getBBox_(container);
    for (var i = 0; i < Code.TABS_.length; i++) {
      var el = document.getElementById('content_' + Code.TABS_[i]);
      el.style.top = bBox.y + 'px';
      el.style.left = bBox.x + 'px';
      // Height and width need to be set, read back, then set again to
      // compensate for scrollbars.
      el.style.height = bBox.height + 'px';
      el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
      el.style.width = bBox.width + 'px';
      el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    }
    // Make the 'Blocks' tab line up with the toolbox.
    if (Code.workspace && Code.workspace.toolbox_.width) {
      document.getElementById('tab_blocks').style.minWidth =
        (Code.workspace.toolbox_.width - 38) + 'px';
      // Account for the 19 pixel margin and on each side.
    }
  };
  onresize();
  window.addEventListener('resize', onresize, false);

  var toolbox = document.getElementById('toolbox');
  Code.workspace = Blockly.inject('content_blocks',
    {
      grid:
      {
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      media: '../../media/',
      rtl: rtl,
      toolbox: toolbox,
      zoom:
      {
        controls: true,
        wheel: true
      }
    });
  //ADEL
  Code.workspace.addChangeListener(Code.yes);

  // Copier coller
  function onchange(event) {
    //var content2 = document.getElementById("fool");
    //var code;
    //code = Blockly.Arduino.workspaceToCode(Code.workspace);
    //code = prettyPrintOne(code, 'arduino');
    //content2.textContent = code;
    //alert("changement");
    //code = Blockly.Arduino.workspaceToCode(Code.workspace);
    //content.textContent = code;
    document.getElementById('fool').value = Blockly.Arduino.workspaceToCode(Code.workspace);
    //document.getElementById('foo').innerHTML = Code.workspace.Numberallblock();
  }
  Code.workspace.addChangeListener(onchange);


  // Add to reserved word list: Local variables in execution environment (runJS)
  // and the infinite loop detection function.
  Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');
  var mystartfile;
  mystartfile = '<xml xmlns="http://www.w3.org/1999/xhtml">';
  mystartfile += '<block type="arduino_setup" x="0" y="0"></block>';
  mystartfile += '</xml>';
  Code.loadBlocks(mystartfile);

  if ('BlocklyStorage' in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload(Code.workspace);
  }

  Code.tabClick(Code.selected);

  Code.bindClick('trashButton',
    function () { Code.discard(); Code.renderContent(); });
  Code.bindClick('runButton', Code.runJS);
  // Disable the link button if page isn't backed by App Engine storage.
  var linkButton = document.getElementById('linkButton');
  if ('BlocklyStorage' in window) {
    BlocklyStorage['HTTPREQUEST_ERROR'] = MSG['httpRequestError'];
    BlocklyStorage['LINK_ALERT'] = MSG['linkAlert'];
    BlocklyStorage['HASH_ERROR'] = MSG['hashError'];
    BlocklyStorage['XML_ERROR'] = MSG['xmlError'];
    Code.bindClick(linkButton,
      function () { BlocklyStorage.link(Code.workspace); });
  } else if (linkButton) {
    linkButton.className = 'disabled';
  }

  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    Code.bindClick('tab_' + name,
      function (name_) { return function () { Code.tabClick(name_); }; }(name));
  }

  // Lazy-load the syntax-highlighting.
  window.setTimeout(Code.importPrettify, 1);
};


Code.initLanguage = function () {
  // Set the HTML's language and direction.
  var rtl = Code.isRtl();
  document.dir = rtl ? 'rtl' : 'ltr';
  document.head.parentElement.setAttribute('lang', Code.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function (a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Code.changeLanguage, true);

  // Inject language strings.
  document.title += ' ' + MSG['title'];
  //document.getElementById('title').textContent = MSG['title'];
  document.getElementById('tab_blocks').textContent = MSG['blocks'];

  document.getElementById('verifyButton').title = MSG['verifyTooltip'];
  document.getElementById('uploadButton').title = MSG['uploadTooltip'];

  document.getElementById('linkButton').title = MSG['linkTooltip'];
  document.getElementById('runButton').title = MSG['runTooltip'];
  document.getElementById('trashButton').title = MSG['trashTooltip'];

  document.getElementById('savexmlButton').title = MSG['saveXMLTooltip'];
  document.getElementById('fakeload').title = MSG['loadXMLTooltip'];
  document.getElementById('copyButton').title = MSG['copycodeTooltip'];

  var categories = ['xStepper', 'leonardo', 'catInOut', 'catSerialAll', 'catSerial', 'catSerial1', 'catSoftSerial', 'catBTAll', 'catBTSerial1', 'catBTSoftSerial', 'catMotors', 'catMotorMRT', 'catServo', 'catSimpleSensorsALL', 'catSimpleSensors', 'catSimpleSensors2', 'catSimpleSensors3', 'catSimpleActuators', 'catSerialLCDm', 'catSerialLCDmb23', 'catSerialLCDmb2', 'catSerialLCD_I2C', 'minicatSerialLCD_I2C', 'catDisplay', 'catADXL345', 'catHMC5883', 'bmpcatHMC5883', 'catDigital', 'catAnalog',
    'catString', 'catDivers', 'catInterruptExt', 'catStorage', 'catMAX7219_7D', 'catMAX7219_LM', 'catEEprom', 'catStepper', 'catStepper28BYJ', 'catRTCDS3231', 'catRTCDS1302', 'catLedStrip', 'catTM1637', 'catLogic', 'catLoops', 'catTime', 'catGenericTime', 'catMath', 'catText', 'catRotaryEncoder', 'ibuttonds1990', 'catGPS', 'catAllVar', 'catVariables', 'catFunctions', 'catRemoteIR', 'catKeypad',
    'catOtherSensors', 'catRFID', 'catr433', 'catRadioTEA5767', 'catCommunication', 'catDFPlayerMP3', 'catmicroSD', 'catAPDS9960', 'catWIFISerial1', 'catWIFISoftSerial', 'catOtherActuators', 'catWIFI', 'catIOT', 'catMQTTWifi', 'catRF24L01', 'catRF', 'catTCS3200', 'catCamera', 'catds18b20', 'catST7735', 'catServoRot', 'stepcatServoRot', 'catArray', 'nminicatSerialLCD_I2C', 'catST2046', 'fingerprinting', 'tensorsensor', 'electrocardiography'];
  for (var i = 0, cat; cat = categories[i]; i++) {
    document.getElementById(cat).setAttribute('name', MSG[cat]);
  }
  var textVars = document.getElementsByClassName('textVar');
  for (var i = 0, textVar; textVar = textVars[i]; i++) {
    textVar.textContent = MSG['textVariable'];
  }
  var listVars = document.getElementsByClassName('listVar');
  for (var i = 0, listVar; listVar = listVars[i]; i++) {
    listVar.textContent = MSG['listVariable'];
  }
};


Code.runJS = function () {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
  var timeouts = 0;
  var checkTimeout = function () {
    if (timeouts++ > 1000000) {
      throw MSG['timeout'];
    }
  };
  var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(MSG['badCode'].replace('%1', e));
  }
};


Code.discard = function () {
  var count = Code.workspace.getAllBlocks().length;
  if (count < 2 ||
    window.confirm(MSG['discard'].replace('%1', count))) {
    Code.workspace.clear();
    window.location.hash = '';
  }
};

//ADEL FOR WARNING
Code.stopDialogKeyDown = function () {
  document.body.removeEventListener('keydown',
    BlocklyApps.dialogKeyDown_, true);
};

Code.showDialog = function (content, origin, animate, modal, style,
  disposeFunc) {
  if (Code.isDialogVisible_) {
    BlocklyApps.hideDialog(false);
  }
  BlocklyApps.isDialogVisible_ = true;
  BlocklyApps.dialogOrigin_ = origin;
  BlocklyApps.dialogDispose_ = disposeFunc;
  var dialog = document.getElementById('dialog');
  var shadow = document.getElementById('dialogShadow');
  var border = document.getElementById('dialogBorder');



  // Copy all the specified styles to the dialog.
  for (var name in style) {
    dialog.style[name] = style[name];
  }
  if (modal) {
    shadow.style.visibility = 'visible';
    shadow.style.opacity = 0.3;
    var header = document.createElement('div');
    header.id = 'dialogHeader';
    dialog.appendChild(header);
    BlocklyApps.dialogMouseDownWrapper_ =
      Blockly.bindEvent_(header, 'mousedown', null,
        BlocklyApps.dialogMouseDown_);
  }
  dialog.appendChild(content);
  content.className = content.className.replace('dialogHiddenContent', '');

  function endResult() {
    // Check that the dialog wasn't closed during opening.
    if (BlocklyApps.isDialogVisible_) {
      dialog.style.visibility = 'visible';
      dialog.style.zIndex = 1;
      border.style.visibility = 'hidden';
    }
  }
  if (animate && origin) {
    BlocklyApps.matchBorder_(origin, false, 0.2);
    BlocklyApps.matchBorder_(dialog, true, 0.8);
    // In 175ms show the dialog and hide the animated border.
    window.setTimeout(endResult, 175);
  } else {
    // No animation.  Just set the final state.
    endResult();
  }
};

// 
function fillComportSelect(comports) {
  var comportSelect = document.getElementById('comport_select');
  comportSelect.innerHTML = "";

  comports.forEach(function (comport) {
    var comportOption = document.createElement("option");
    comportOption.text = comport.title.substring(0, 25);
    comportOption.value = comport.id;
    comportSelect.appendChild(comportOption);
  })
}

function verifySketch(){
  var code = Blockly.Arduino.workspaceToCode(Code.workspace);
  console.log(code);
}

function uploadSketch(){
  var code = Blockly.Arduino.workspaceToCode(Code.workspace);
  console.log(code);
}

Code.initSketchUpload = function () {
  var verifyButton = document.getElementById('verifyButton');
  var uploadButton = document.getElementById('uploadButton');

  verifyButton.addEventListener("click", verifySketch);
  uploadButton.addEventListener("click", uploadSketch); 

  setInterval(function () {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => fillComportSelect(json))
  }, 5000);
}


//

// Load the Code demo's language strings.
document.write('<script src="msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../../msg/js/' + Code.LANG + '.js"></script>\n');


// Load the Code demo's language strings.
//document.write('<script src="msg/en.js"></script>\n');
// Load Blockly's language strings.
//document.write('<script src="../../msg/js/en.js"></script>\n');



window.addEventListener('load', Code.init);

