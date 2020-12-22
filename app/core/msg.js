
'use strict';


goog.provide('Blockly.Msg');



goog.getMsgOrig = goog.getMsg;


goog.getMsg = function(str, opt_values) {
  var key = goog.getMsg.blocklyMsgMap[str];
  if (key) {
    str = Blockly.Msg[key];
  }
  return goog.getMsgOrig(str, opt_values);
};


goog.getMsg.blocklyMsgMap = {
  'Today': 'TODAY'
};
