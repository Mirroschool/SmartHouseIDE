/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');


Blockly.Arduino['servo_move'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_degree = this.getFieldValue('DEGREE');
 // var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  //delay_time = delay_time.replace('(','').replace(')','');
  
  if (value_degree>=180)
    value_degree=180;

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';

  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino['servo_movea'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
 // var value_degree = this.getFieldValue('DEGREE');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  //delay_time = delay_time.replace('(','').replace(')','');
  
 if (value_degree>=180)
    value_degree=180;

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';

  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino['servo_moveb'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
 // var value_degree = this.getFieldValue('DEGREE');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
 // var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  //delay_time = delay_time.replace('(','').replace(')','');
  
 if (value_degree>=180)
    value_degree=180;

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';

  var code = 'servo_'+dropdown_pin+'.write('+value_degree+'); \n';
  return code;
};

Blockly.Arduino['servo_read_degrees'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';


  var code = 'servo_'+dropdown_pin+'.read()';
  
       return [code, Blockly.Arduino.ORDER_ATOMIC];
  //return code;
};

Blockly.Arduino['servo_attached'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';


  var code = 'servo_'+dropdown_pin+'.attached()';
  
       return [code, Blockly.Arduino.ORDER_ATOMIC];
  //return code;
};

Blockly.Arduino['servo_detach'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.detach();\n';
  return code;
};


Blockly.Arduino['servo_movebnn'] = function(block) {
var text_name = block.getFieldValue('NAME'); 
  var dropdown_pin = this.getFieldValue('PIN');
 
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  
  
 if (value_degree>=180)
    value_degree=180;

  Blockly.Arduino.definitions_['define_servo'] = '#include <iarduino_MultiServo.h>  \n iarduino_MultiServo MSS'+text_name+';';
  Blockly.Arduino.setups_['var_servo'+text_name] = '  MSS'+text_name+'.servoSet(0, SERVO_SG90); \n MSS'+text_name+'.servoSet(1, SERVO_SG90); \n  MSS'+text_name+'.servoSet(2, SERVO_SG90); \n MSS'+text_name+'.servoSet(3, SERVO_SG90); \n MSS'+text_name+'.servoSet(4, SERVO_SG90); \n MSS'+text_name+'.servoSet(5, SERVO_SG90); \n MSS'+text_name+'.servoSet(6, SERVO_SG90); \n MSS'+text_name+'.servoSet(7, SERVO_SG90); \n MSS'+text_name+'.servoSet(8, SERVO_SG90); \n MSS'+text_name+'.servoSet(9, SERVO_SG90); \n MSS'+text_name+'.servoSet(10, SERVO_SG90); \n MSS'+text_name+'.servoSet(11, SERVO_SG90); \n MSS'+text_name+'.servoSet(12, SERVO_SG90); \n MSS'+text_name+'.servoSet(13, SERVO_SG90); \n MSS'+text_name+'.servoSet(14, SERVO_SG90); \n MSS'+text_name+'.servoSet(15, SERVO_SG90); \n MSS'+text_name+'.servoSet(16, SERVO_SG90); \n MSS'+text_name+'.begin('+text_name+'); \n'  ;

  var code = 'MSS'+text_name+'.servoWrite('+dropdown_pin+',byte('+value_degree+')); \n';
  
  return code;
};
