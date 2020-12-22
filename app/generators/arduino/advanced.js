goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');

Blockly.Arduino['arduino_setup'] = function(block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'MySetup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'MyLoop');
 
  Blockly.Arduino.setups_['setup'] = statements_setup;
 
  var code = statements_loop;
  return code;
};

Blockly.Arduino['arduino_codeall'] = function(block) {
    
  var text_received = this.getFieldValue('TEXT');
 
  var code = ''+text_received+'\n';
  return code;
};
// новый блок кода
Blockly.Arduino['arduino_codealli'] = function(block) {
    
  var text_receivedi = this.getFieldValue('TEXT');

 //Blockly.Arduino.definitions_['arduino_codealli'] = ''+text_receivedi+'\n'; // втоп
Blockly.Arduino.definitions_['arduino_codealli'+text_receivedi] = ''+text_receivedi+'\n'; // втоп
 //var code = ''+text_receivedi+'\n';
var codei = '\n';
return codei;
 

};
Blockly.Arduino['arduino_waitforever'] = function(block) {
      
  var code = 'while(1);\n';
  return code;
};

Blockly.Arduino['arduino_reset_bottom'] = function(block) {
      
  var code = 'void(* resetFunc) (void) = 0; \n resetFunc(); \n';
  return code;
};