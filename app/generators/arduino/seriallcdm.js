goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');

Blockly.Arduino['lcdm_setup'] = function(block) {
var text_name = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.definitions_['define_lcd'] = '#include <LiquidCrystal.h>\n';
    
    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
   
   Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal lcd('+text_name+');\n';
    //
 //LiquidCrystal lcd(12, 11, 10, 5, 4, 3, 2);
  //var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
  //var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
   //Blockly.Arduino.setups_['setup_lcd_normal']='lcd.begin('+value_columns+','+ value_rows+');\n'
   Blockly.Arduino.setups_['setup_lcdi2c']='lcd.begin('+value_columns+','+value_rows+');\n'
//'+value_columns+','+value_rows+'
  var code = '';
  return code;
};
/*
Blockly.Arduino['lcdm_bq_setup'] = function(block) {

    Blockly.Arduino.definitions_['define_lcd'] = '#include "BitbloqLiquidCrystal.h"\n';
    Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal lcd(0);\n';
    Blockly.Arduino.setups_['setup_lcdi2c']='lcd.begin(16,2);\n'

  var code = '';
  return code;
};

Blockly.Arduino['lcdm_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino['lcdm_home'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.home();\n';
  return code;
};
*/
Blockly.Arduino['lcdm_setcursor'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  
  if (value_column<=0)
	  value_column=1;
  else
	  value_column-=1;
  
   if (value_row<=0)
	  value_row=1;
  else
	  value_row-=1;
  
 
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.setCursor('+value_column+', '+value_row+ ');\n';
  code+='lcd.print('+value_texttoprint+');\n';
  return code;
};
/*
Blockly.Arduino['lcdm_setcursoralone'] = function(block) {
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
   
  if (value_column<=0)
	  value_column=1;
  else
	  value_column-=1;
  
   if (value_row<=0)
	  value_row=1;
  else
	  value_row-=1;
  
 
  // TODO: Assemble JavaScript into code variable.
  var code = 'lcd.setCursor('+value_column+', '+value_row+ ');\n';
  return code;
};

Blockly.Arduino['lcdm_display'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
   var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.display();\n';
   else
     var code = 'lcd.noDisplay();\n';
 
  return code;
};

Blockly.Arduino['lcdm_scrollDisplay'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.scrollDisplayLeft();\n';
   else
     var code = 'lcd.scrollDisplayRight();\n';
  
  return code;
};

Blockly.Arduino['lcdm_setBacklight'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.backlight();\n';
   else
     var code = 'lcd.noBacklight();\n';
  
  return code;
};

Blockly.Arduino['lcdm_showCursor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.cursor();\n';
   else
     var code = 'lcd.noCursor();\n';
  
  return code;
};

Blockly.Arduino['lcdm_blinkCursor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.blink();\n';
   else
     var code = 'lcd.noBlink();\n';
  
  return code;
};
*/

