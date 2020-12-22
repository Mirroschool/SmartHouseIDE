goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');

Blockly.Arduino['minilcdi2c_setup'] = function(block) {
var text_name = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.definitions_['define_lcd'] = '#include <Wire.h>\n#include "ASOLED.h"\n';
    
    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
   
  // Blockly.Arduino.definitions_['define_lcdpins'] = 'LD.init();\n LD.clearDisplay();';

   Blockly.Arduino.setups_['setup_lcdi2c']= 'LD.init();\n LD.clearDisplay();';

  var code = '';
  return code;
};
/*
Blockly.Arduino['minilcdi2c_bq_setup'] = function(block) {

    Blockly.Arduino.definitions_['define_lcd'] = '#include "BitbloqLiquidCrystal.h"\n';
    Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal lcd(0);\n';
    Blockly.Arduino.setups_['setup_lcdi2c']='lcd.begin(16,2);\n'

  var code = '';
  return code;
};
*/
Blockly.Arduino['minilcdi2c_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'LD.clearDisplay();\n';
  return code;
};

Blockly.Arduino['minilcdi2c_home'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'LD.SetInverseText();\n';
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor'] = function(block) {
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
  var code = 'LD.printString_6x8('+value_texttoprint+', '+value_column+', '+value_row+ ');\n';
  //code+='\n';
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor3'] = function(block) {
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
  var code = 'LD.printString_12x16('+value_texttoprint+', '+value_column+', '+value_row+ ');\n';
  //code+='\n';
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor4'] = function(block) {
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

  var code = 'LD.printString_6x8("", '+value_column+', '+value_row+ ');\n LD.printNumber((long)'+value_texttoprint+'); \n';
  //code+='\n';
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor5'] = function(block) {
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

  var code = 'LD.printString_12x16("", '+value_column+', '+value_row+ ');\n LD.printNumber((long)'+value_texttoprint+'); \n';
  //code+='\n';
  return code;
};


 Blockly.Arduino['minilcdi2c_setcursor4b'] = function(block) {
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

  var code = 'LD.printString_6x8("", '+value_column+', '+value_row+ ');\n LD.printNumber('+value_texttoprint+'); \n';
  //code+='\n';
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor5b'] = function(block) {
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

  var code = 'LD.printString_12x16("", '+value_column+', '+value_row+ ');\n LD.printNumber('+value_texttoprint+'); \n';
  //code+='\n';
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor6'] = function(block) {
var text_name = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.definitions_['define_lcd'] = '#include "U8glib.h"\n';
    
    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
   
   Blockly.Arduino.definitions_['define_lcdpins'] = 'U8GLIB_SSD1306_128X64 u8g('+text_name+');\n';
 
  var code = '';
  return code;
};
 
 
 Blockly.Arduino['minilcdi2c_setcursor7'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==0)
     var code = ' \n';
   if (OptionDisplay==1)
     var code = 'u8g.setRot90();\n';
if (OptionDisplay==2)
     var code = 'u8g.setRot180();\n';
if (OptionDisplay==3)
     var code = 'u8g.setRot270();\n';	 
  
  return code;
};


Blockly.Arduino['minilcdi2c_setcursor8'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' u8g.firstPage(); \n do {\n';
  return code;
};


Blockly.Arduino['minilcdi2c_setcursor9'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
   var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==0)
     var code = 'u8g.setFont(u8g_font_unifont);\n';
     if (OptionDisplay==1)
     var code = 'u8g.setFont(u8g_font_6x10);\n';
	  if (OptionDisplay==2)
     var code = 'u8g.setFont(u8g_font_6x13);\n';
	  if (OptionDisplay==3)
     var code = 'u8g.setFont(u8g_font_9x18);\n';
 
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor10'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  
/*  if (value_column<=0)
	  value_column=1;
  else
	  value_column-=1;
  
   if (value_row<=0)
	  value_row=1;
  else
	  value_row-=1;
 */ 
 
  // TODO: Assemble JavaScript into code variable. u8g.setPrintPos(20,20); u8g.print("ArduBlock");
  var code = 'u8g.setPrintPos('+value_column+', '+value_row+ ');\n';
  code+='u8g.print('+value_texttoprint+');\n';
  return code;
};
 
Blockly.Arduino['minilcdi2c_setcursor11'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
 /*  
  if (value_column<=0)
	  value_column=1;
  else
	  value_column-=1;
  
   if (value_row<=0)
	  value_row=1;
  else
	  value_row-=1;
  */
 
  // TODO: Assemble JavaScript into code variable.
  var code = 'u8g.drawPixel('+value_column+', '+value_row+ ');\n';
  return code;
};


 
 
 
Blockly.Arduino['minilcdi2c_setcursor12'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' } while(  u8g.nextPage() );\n';
  return code;
};