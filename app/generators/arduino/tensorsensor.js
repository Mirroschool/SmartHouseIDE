/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ADXL345');

goog.require('Blockly.Blocks');

Blockly.Arduino['tensorsensor1'] = function(block) {
   
  Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = ' #include "HX711.h" \n #define calibration_factor -7050.0  \n  #define DOUT  3 \n #define CLK  2 \n HX711 scale(DOUT, CLK); \n float pound; \n float grams; \n ';
   Blockly.Arduino.setups_['include_Adafruit_Sensor'] = '  scale.set_scale(calibration_factor);  \n ';	 
  var code='   ';
  return code;
};

Blockly.Arduino['tensorsensor2'] = function(block) {
   
 
//  Blockly.Arduino.definitions_['include_Adafruit_Sensornn'] = '  \n ';
//  Blockly.Arduino.setups_['include_Adafruit_Sensor'] = '  \n ';
  var code=' scale.tare(); ';
  return code;
};

Blockly.Arduino['tensorsensor3'] = function(block) {
   
 // Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = '  \n ';
  
 // Blockly.Arduino.setups_['include_Adafruit_Sensor'] = '   grams = scale.get_units() * 45.35 / 5; \n pound = scale.get_units();  \n';
  	 	 
  var code='  grams = scale.get_units() * 45.35 / 5; \n pound = grams / 454;  \n    ';
  return code;
};

Blockly.Arduino['tensorsensor4'] = function(block) {
  
  var typeMag = this.getFieldValue('TypeMag');
  var code;

      code = 'pound';

return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};
Blockly.Arduino['tensorsensor5'] = function(block) {
  
  var typeMag = this.getFieldValue('TypeMag');
  var code;

      code = 'grams';

return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};	