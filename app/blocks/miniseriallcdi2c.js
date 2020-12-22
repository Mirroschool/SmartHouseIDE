'use strict';

goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');


Blockly.Blocks['minilcdi2c_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCD_I2C_setup);
    this.appendDummyInput()
   //     .appendField(new Blockly.FieldTextInput("0x271"), "NAME");
   //this.appendValueInput("COLUMNS")
   //     .setCheck("Number")
   //     .appendField(Blockly.Msg.LCDP_Column);
   // this.appendValueInput("ROWS")
    //    .setCheck("Number")
    //    .appendField(Blockly.Msg.LCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_1);
  }
};
/*
Blockly.Blocks['minilcdi2c_bq_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCD_I2C_BQ_setup)
		.appendField(Blockly.Msg.miniLCD_I2C_BQ_pins);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
  }
};
*/
Blockly.Blocks['minilcdi2c_clear'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_2);
  }
};

Blockly.Blocks['minilcdi2c_home'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCDP_Home);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
   this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_3);
  }
};

Blockly.Blocks['minilcdi2c_setcursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.miniLCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_4);
  }
};

Blockly.Blocks['minilcdi2c_setcursor3'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.miniLCDP_Print3);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
   this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_5);
  }
};

Blockly.Blocks['minilcdi2c_setcursor4'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.miniLCDP_Print4);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_6);
  }
};

Blockly.Blocks['minilcdi2c_setcursor5'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.miniLCDP_Print5);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_7);
  }
};


Blockly.Blocks['minilcdi2c_setcursor4b'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.miniLCDP_Print4);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_6);
  }
};
Blockly.Blocks['minilcdi2c_setcursor5b'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcd.png",53,38))
        .appendField(Blockly.Msg.miniLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.miniLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.miniLCDP_Print5);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_7);
  }
};
























Blockly.Blocks['minilcdi2c_setcursor6'] = {
   init: function() {
    this.setColour(120);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcdspi.png",53,38))
        .appendField(Blockly.Msg.minilsdspi2)
		.appendField(Blockly.Msg.minilsdspi)
		.appendField(Blockly.Msg.minilsdspi1);
	this.appendDummyInput()	
   .appendField(new Blockly.FieldTextInput("12, 11, 8, 9, 10"), "NAME");
 //  this.appendValueInput("COLUMNS")
 //       .setCheck("Number")
 //       .appendField(Blockly.Msg.b2mLCDP_Column);
 //   this.appendValueInput("ROWS")
 //       .setCheck("Number")
 //       .appendField(Blockly.Msg.b2mLCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_7);
  }
};

Blockly.Blocks['minilcdi2c_setcursor7'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcdspi.png",53,38))
		.appendField(Blockly.Msg.minilsdspi)
        .appendField(Blockly.Msg.minilsdspi3)
		.appendField(new Blockly.FieldDropdown([["0", "0"], ["90", "1"], ["180", "2"], ["270", "3"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_7);
  }
};
 
Blockly.Blocks['minilcdi2c_setcursor8'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcdspi.png",53,38))
		.appendField(Blockly.Msg.minilsdspi)
        .appendField(Blockly.Msg.minilsdspi4);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_7);
  }
};

Blockly.Blocks['minilcdi2c_setcursor9'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcdspi.png",53,38))
		.appendField(Blockly.Msg.minilsdspi)
        .appendField(Blockly.Msg.minilsdspi5)
		.appendField(new Blockly.FieldDropdown([["unifont", "0"], ["6x10", "1"], ["6x13", "2"], ["9x18", "3"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_7);
  }
};

Blockly.Blocks['minilcdi2c_setcursor10'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcdspi.png",53,38))
		.appendField(Blockly.Msg.minilsdspi)
        .appendField(Blockly.Msg.minilsdspi6);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.b2mLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.b2mLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.b2mLCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_7);
  }
};

Blockly.Blocks['minilcdi2c_setcursor11'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcdspi.png",53,38))
		.appendField(Blockly.Msg.minilsdspi)
        .appendField(Blockly.Msg.minilsdspi7);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.b2mLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.b2mLCDP_Row2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_7);
  }
};


 
 


Blockly.Blocks['minilcdi2c_setcursor12'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/minilcdspi.png",53,38))
		.appendField(Blockly.Msg.minilsdspi)
        .appendField(Blockly.Msg.minilsdspi8);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
   this.setHelpUrl(Blockly.Msg.minilcdi2c_Url_7);
  }
};
