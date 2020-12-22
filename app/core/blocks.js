 
'use strict';

goog.provide('Blockly.Blocks');


 
Blockly.Blocks.uidCounter_ = 0;

 
Blockly.Blocks.genUid = function() {
  var uid = (++Blockly.Blocks.uidCounter_).toString();
  if (Blockly.Realtime.isEnabled()) {
    return Blockly.Realtime.genUid(uid);
  } else {
    return uid;
  }
};
