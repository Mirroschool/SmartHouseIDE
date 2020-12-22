/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ADXL345');

goog.require('Blockly.Blocks');

Blockly.Arduino['electrocardiography1'] = function(block) {
   
  Blockly.Arduino.setups_['include_Adafruit_Sensor'] = ' pinMode(10, INPUT); \n pinMode(11, INPUT); \n pinMode(A0, OUTPUT); \n ';
  // Blockly.Arduino.setups_['include_Adafruit_Sensor'] = '  scale.set_scale(calibration_factor);  \n ';	 
  var code='   ';
  return code;
};

Blockly.Arduino['electrocardiography2'] = function(block) {
   
  var typeMag = this.getFieldValue('TypeMag');
  var code;

      code = 'digitalRead(10)';

return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};

Blockly.Arduino['electrocardiography3'] = function(block) {
   
  var typeMag = this.getFieldValue('TypeMag');
  var code;

      code = 'digitalRead(11)';

return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};

Blockly.Arduino['electrocardiography4'] = function(block) {
  
  var typeMag = this.getFieldValue('TypeMag');
  var code;

      code = 'analogRead(A0)';

return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};
Blockly.Arduino['electrocardiography5'] = function(block) {
  
  var typeMag = this.getFieldValue('TypeMag');
  var code;

      code = 'grams';

return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};	