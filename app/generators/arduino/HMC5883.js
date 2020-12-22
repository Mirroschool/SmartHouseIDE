/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ADXL345');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_Compass_HMC5883'] = function(block) {
   
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = '#include <DFRobot_QMC5883.h>';
  Blockly.Arduino.definitions_['include_Adafruit_HMC5883_U'] = 'DFRobot_QMC5883 compass;';
  
  //Blockly.Arduino.definitions_['init_HMC5883'] = 'Adafruit_HMC5883_Unified mag = Adafruit_HMC5883_Unified(12345);\n';
 // Blockly.Arduino.definitions_['init_var1_HMC5883'] = 'sensors_event_t eventmag;\n';
    
  Blockly.Arduino.setups_['setup_HMC5883'] = ' while (!compass.begin()){ \n   Serial.println(" "); \n    delay(500); \n} \n  if(compass.isHMC() ){  \n    Serial.println(" ");  \n    compass.setRange(HMC5883L_RANGE_1_3GA);  \n    compass.setMeasurementMode(HMC5883L_CONTINOUS);  \n    compass.setDataRate(HMC5883L_DATARATE_15HZ);  \n    compass.setSamples(HMC5883L_SAMPLES_8);  \n  }else if(compass.isQMC()){  \n    Serial.println(" ");  \n    compass.setRange(QMC5883_RANGE_2GA);  \n   compass.setMeasurementMode(QMC5883_CONTINOUS);   \n   compass.setDataRate(QMC5883_DATARATE_50HZ);  \n    compass.setSamples(QMC5883_SAMPLES_8);  \n}\n';
  	 	 
  var code='';
  return code;
};

Blockly.Arduino['order_to_read_HMC5883_values'] = function(block) {
   
  var code = ' Vector mag = compass.readRaw(); \n  float heading = atan2(mag.YAxis, mag.XAxis); \n float declinationAngle = (4.0 + (26.0 / 60.0)) / (180 / PI); \n  heading += declinationAngle; \n if (heading < 0){ \n   heading += 2 * PI; \n  } \n  if (heading > 2 * PI){ \n    heading -= 2 * PI; \n  } \n  float headingDegrees = heading * 180/PI; \n  '
   
  return code;
};

Blockly.Arduino['HMC5883_values'] = function(block) {
  
  var typeMag = this.getFieldValue('TypeMag');
  var code;
 
  switch (typeMag) {
    case '0':
      code = 'mag.XAxis';
      break;
    case '1':
      code = 'mag.YAxis';
      break;
    case '2':
      code = 'mag.ZAxis';
      break;
	 case '3':
      code = 'headingDegrees';
      break;
    default:
			code = 'mag.XAxis';
			break;
  }
return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};
	