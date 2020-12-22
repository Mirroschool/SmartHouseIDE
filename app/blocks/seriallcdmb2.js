'use strict';

goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');


Blockly.Blocks['lcdmb2_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCD_I2C_setup);
	this.appendDummyInput()	
   .appendField(new Blockly.FieldTextInput("12, 11, 10"), "NAME");
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
	this.setHelpUrl(Blockly.Msg.lcd128x64pix_Url_1);
  }
};

/*
Blockly.Blocks['lcdmb2_bq_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCD_I2C_BQ_setup)
		.appendField(Blockly.Msg.b2mLCD_I2C_BQ_pins);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
*/
Blockly.Blocks['lcdmb2_clear'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.lcd128x64pix_Url_1);
  }
};

Blockly.Blocks['lcdmb2_home'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCDP_Home);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
   this.setHelpUrl(Blockly.Msg.lcd128x64pix_Url_1);
  }
};

Blockly.Blocks['lcdmb2_setcursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCDP_SetCursor);
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
	this.setHelpUrl(Blockly.Msg.lcd128x64pix_Url_1);
  }
};

Blockly.Blocks['lcdmb2_setcursoralone'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCDP_SetCursor2);
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
	this.setHelpUrl(Blockly.Msg.lcd128x64pix_Url_1);
  }
};

Blockly.Blocks['lcdmb2_display'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCDP_Display)
		.appendField(new Blockly.FieldDropdown([["unifont", "0"], ["6x10", "1"], ["6x13", "2"], ["9x18", "3"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.lcd128x64pix_Url_1);
  }
};
/*
Blockly.Blocks['lcdmb2_scrollDisplay'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCDP_scrollDisplay)
		.appendField(new Blockly.FieldDropdown([["Left", "1"], ["Right", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
*/
Blockly.Blocks['lcdmb2_setBacklight'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCDP_setBcklight)
		.appendField(new Blockly.FieldDropdown([["0", "0"], ["90", "1"], ["180", "2"], ["270", "3"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.lcd128x64pix_Url_1);
  }
};

Blockly.Blocks['lcdmb2_showCursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCDP_showCursor)
		.appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
	this.setHelpUrl(Blockly.Msg.lcd128x64pix_Url_1);
  }
};

Blockly.Blocks['lcdmb2_blinkCursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/lcd128664b3.png",53,38))
        .appendField(Blockly.Msg.b2mLCDP_blinkCursor)
		.appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-12864b3-128h64-spi');
   this.setHelpUrl(Blockly.Msg.lcd128x64pix_Url_1);
  }
};

