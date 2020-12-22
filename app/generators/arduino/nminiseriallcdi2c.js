goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');

Blockly.Arduino['nminilcdi2c_setup'] = function(block) {
var text_name = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.definitions_['define_lcd'] = '#include <LCD5110_Basic.h> \n  LCD5110 LCD('+text_name+'); \n extern uint8_t SmallFont[]; \n extern uint8_t MediumNumbers[]; \n extern uint8_t BigNumbers[]; \n';
    
    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
    
  // Blockly.Arduino.definitions_['define_lcdpins'] = 'LD.init();\n LD.clearDisplay();';

   Blockly.Arduino.setups_['setup_lcdi2c']= 'LCD.InitLCD(); \n ';

  var code = '';
  return code;
};
 
Blockly.Arduino['nminilcdi2c_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'LCD.clrScr(); \n';
  return code;
};

 

Blockly.Arduino['nminilcdi2c_setcursor'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  
  if (value_column<=0)
	  value_column=0;
  else
	  value_column-=0;
  
   if (value_row<=0)
	  value_row=0;
  else
	  value_row-=0;
  
 
  // TODO: Assemble JavaScript into code variable. LD.printString_6x8("'+value_texttoprint+'", '+value_column+', '+value_row+ ');\n'
  var code = 'LCD.setFont(SmallFont); \n LCD.print('+value_texttoprint+', '+value_column+', '+value_row+');\n';
  //code+='\n';
  return code;
};



Blockly.Arduino['nminilcdi2c_setcursor4'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC); 
  var nol = "'0'";
 
  var code = 'LCD.setFont(SmallFont); \n LCD.printNumI('+value_texttoprint+', '+value_column+', '+value_row+', 2, '+nol+'); \n';

  //code+='\n';
  return code;
};

Blockly.Arduino['nminilcdi2c_setcursor5'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC); 
  var nol = "'0'";
 
  var code = 'LCD.setFont(MediumNumbers); \n LCD.printNumI('+value_texttoprint+', '+value_column+', '+value_row+', 2, '+nol+'); \n';

  //code+='\n';
  return code;
};

Blockly.Arduino['nminilcdi2c_setcursor6'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC); 
  var nol = "'0'";
 
  var code = 'LCD.setFont(BigNumbers); \n LCD.printNumI('+value_texttoprint+', '+value_column+', '+value_row+', 2, '+nol+'); \n';

  //code+='\n';
  return code;
};