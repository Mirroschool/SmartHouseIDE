goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');

Blockly.Arduino['lcdmb2_setup'] = function(block) {
var text_name = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.definitions_['define_lcd'] = '#include "U8glib.h"\n';
    
    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
   
   Blockly.Arduino.definitions_['define_lcdpins'] = 'U8GLIB_ST7920_128X64_1X u8g('+text_name+');\n';
    //
 //LiquidCrystal lcd(12, 11, 10, 5, 4, 3, 2);
  //var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
  //var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
   //Blockly.Arduino.setups_['setup_lcd_normal']='lcd.begin('+value_columns+','+ value_rows+');\n'
  // Blockly.Arduino.setups_['setup_lcdi2c']='lcd.begin('+value_columns+','+value_rows+');\n'
//'+value_columns+','+value_rows+'
  var code = '';
  return code;
};
/*
Blockly.Arduino['lcdmb2_bq_setup'] = function(block) {

    Blockly.Arduino.definitions_['define_lcd'] = '#include "BitbloqLiquidCrystal.h"\n';
    Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal lcd(0);\n';
    Blockly.Arduino.setups_['setup_lcdi2c']='lcd.begin(16,2);\n'

  var code = '';
  return code;
};
*/
Blockly.Arduino['lcdmb2_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' u8g.firstPage(); \n do {\n';
  return code;
};

Blockly.Arduino['lcdmb2_home'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' } while(  u8g.nextPage() );\n';
  return code;
};

Blockly.Arduino['lcdmb2_setcursor'] = function(block) {
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
 
Blockly.Arduino['lcdmb2_setcursoralone'] = function(block) {
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

Blockly.Arduino['lcdmb2_display'] = function(block) {
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
/*
Blockly.Arduino['lcdmb2_scrollDisplay'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.scrollDisplayLeft();\n';
   else
     var code = 'lcd.scrollDisplayRight();\n';
  
  return code;
};
*/
Blockly.Arduino['lcdmb2_setBacklight'] = function(block) {
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

Blockly.Arduino['lcdmb2_showCursor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.cursor();\n';
   else
     var code = 'lcd.noCursor();\n';
  
  return code;
};

Blockly.Arduino['lcdmb2_blinkCursor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.blink();\n';
   else
     var code = 'lcd.noBlink();\n';
  
  return code;
};
 

