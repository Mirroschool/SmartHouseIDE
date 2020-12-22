'use strict';

goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');


Blockly.Blocks['lcdi2c_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField('En ')
		.appendField(Blockly.Msg.LCD_I2C_setup);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x27"), "NAME");
   this.appendValueInput("COLUMNS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column);
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
	this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_setuprus'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
		.appendField('Ru ')
        .appendField(Blockly.Msg.LCD_I2C_setup);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x27"), "NAME");
   this.appendValueInput("COLUMNS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column);
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
	this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_bq_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCD_I2C_BQ_setup)
		.appendField(Blockly.Msg.LCD_I2C_BQ_pins);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
	this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_clear'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
	this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_home'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCDP_Home);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
	this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_setcursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.LCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
	this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_setcursoralone'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
   this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_display'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCDP_Display)
		.appendField(new Blockly.FieldDropdown([["Display", "1"], ["No Display", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
	this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_scrollDisplay'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCDP_scrollDisplay)
		.appendField(new Blockly.FieldDropdown([["Left", "1"], ["Right", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
   this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_setBacklight'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCDP_setBcklight)
		.appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
   this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_showCursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCDP_showCursor)
		.appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
	this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};

Blockly.Blocks['lcdi2c_blinkCursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/LCD_I2C.png",53,38))
        .appendField(Blockly.Msg.LCDP_blinkCursor)
		.appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-16x2-20h4-i2c');
	this.setHelpUrl(Blockly.Msg.lcdi2c_Url_1);
  }
};



