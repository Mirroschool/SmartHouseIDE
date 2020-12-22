/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.leonardo');

goog.require('Blockly.Blocks');




Blockly.Arduino['leonardo1'] = function(block) {
  var num_sensor1 =Blockly.Arduino.valueToCode(this, 'Sensor1', Blockly.Arduino.ORDER_ATOMIC); 
  var num_sensor2 =Blockly.Arduino.valueToCode(this, 'Sensor2', Blockly.Arduino.ORDER_ATOMIC);
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Mouse.move('+num_sensor1+','+num_sensor2+'); \n';
  //Mouse.move(200,200);
  return code;
};

Blockly.Arduino['leonardo2'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Mouse.click('+maus_direction+'); \n';
  
  return code;
};

Blockly.Arduino['leonardo3'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Mouse.press('+maus_direction+'); \n';
  
  return code;
};

Blockly.Arduino['leonardo4'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Mouse.release('+maus_direction+'); \n';
  
  return code;
};

Blockly.Arduino['leonardo5'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.write(\''+maus_direction+'\'); \n';

  return code;
};
Blockly.Arduino['leonardo6'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.press(\''+maus_direction+'\'); \n';

  return code;
};
Blockly.Arduino['leonardo7'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.release(\''+maus_direction+'\'); \n';

  return code;
};
Blockly.Arduino['leonardo8'] = function(block) {
 
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = '\n Keyboard.releaseAll(); \n';

  return code;
};

Blockly.Arduino['leonardo9'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.write('+maus_direction+'); \n';

  return code;
};
Blockly.Arduino['leonardo10'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.press('+maus_direction+'); \n';

  return code;
};
Blockly.Arduino['leonardo11'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.release('+maus_direction+'); \n';

  return code;
};