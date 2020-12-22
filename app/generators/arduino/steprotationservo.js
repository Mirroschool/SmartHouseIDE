/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');


Blockly.Arduino['stepservo_continuos_move'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var servomotor_dir = this.getFieldValue('SERVOMOTOR_DIR');
  var SpeedServo = Blockly.Arduino.valueToCode(this, 'SpeedServo', Blockly.Arduino.ORDER_ATOMIC); 
  
if (SpeedServo>=180)
    SpeedServo=180;

	
  Blockly.Arduino.definitions_['define_servo'] = '#include <VarSpeedServo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'VarSpeedServo myServo'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'myServo'+dropdown_pin+'.attach('+dropdown_pin+');\n';


	var code = 'myServo'+dropdown_pin+'.attach('+dropdown_pin+'); \n myServo'+dropdown_pin+'.slowmove('+SpeedServo+','+servomotor_dir+');\n';
 
  
  return code;
};

 

Blockly.Arduino['stepcatServoRot_stop'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  
  var code = 'myServo'+dropdown_pin+'.detach(); \n';
  return code;
};
 