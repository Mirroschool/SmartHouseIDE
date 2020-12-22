/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.stepper');

goog.require('Blockly.Blocks');

Blockly.Arduino['xstepper_configuration'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var steeper_number = this.getFieldValue('STEEPER_NUMBER');
  var steeper_pin1 = this.getFieldValue('PIN_STEEPER1');
  var steeper_pin2 = this.getFieldValue('PIN_STEEPER2');
  var steeper_pin3 = this.getFieldValue('PIN_STEEPER3');
  var steeper_pin4 = this.getFieldValue('PIN_STEEPER4');
  var stepper_steprev = Blockly.Arduino.valueToCode(this, 'STEP_RPM', Blockly.Arduino.ORDER_ATOMIC);
  var stepper_step = Blockly.Arduino.valueToCode(this, 'STEP', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_stepper'] = '#include "NemaStepper.h" \n';
  Blockly.Arduino.definitions_['define_stepper_'+steeper_number] = 'NemaStepper Stepper'+steeper_number+'('+steeper_pin1+','+steeper_pin2+','+steeper_pin3+','+steeper_pin4+', '+stepper_steprev+', '+stepper_step+', false); \n';

  var code = '';
  
  return code;
};


Blockly.Arduino['xstepper_speed'] = function(block) {
  
  
  var steeper_number = this.getFieldValue('STEEPER_NUMBER');
  var stepper_speed = Blockly.Arduino.valueToCode(this, 'STEPPER_SPEED', Blockly.Arduino.ORDER_ATOMIC);
   
  var code = 'Stepper'+steeper_number+'.Step(); \n Stepper'+steeper_number+'.SetStepCount('+stepper_speed+'); \n'

  return code;
};

