/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ADXL345');

goog.require('Blockly.Blocks');

Blockly.Arduino['bmpInit_Compass_HMC5883'] = function(block) {
   var text_name = block.getFieldValue('NAME'); 
  //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = '#include <iarduino_Pressure_BMP.h> \n iarduino_Pressure_BMP sensor('+text_name+'); \n float bmppressure; \n float bmptemperature; \n float bmpaltitude; \n float bmppressure2; \n ';
  
    
  Blockly.Arduino.setups_['setup_HMC5883'] = 'sensor.begin(); \n';
  	 	 
  var code='';
  return code;
};

Blockly.Arduino['bmporder_to_read_HMC5883_values'] = function(block) {
   
  var code = '   if(sensor.read(1)){ \n    bmppressure = sensor.pressure;  \n    bmptemperature = sensor.temperature; \n    bmpaltitude = sensor.altitude; \n  } \n      if(sensor.read(2)){ \n    bmppressure2 = sensor.pressure; \n   } \n';
   
  return code;
};

Blockly.Arduino['bmpHMC5883_values'] = function(block) {
  
  var typeMag = this.getFieldValue('TypeMag');
  var code;
 
  switch (typeMag) {
    case '0':
      code = 'bmptemperature';
      break;
    case '1':
      code = 'bmpaltitude';
      break;
    case '2':
      code = 'bmppressure';
      break;
	 case '3':
      code = 'bmppressure2';
      break;
    default:
			code = 'eventmag.magnetic.x';
			break;
  }
return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};
	