'use strict';

goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');


Blockly.Blocks['nminilcdi2c_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nokialcd.png",53,38))
        .appendField(Blockly.Msg.nminiLCD_I2C_setup);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("8,9,10,11,12"), "NAME");
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
	this.setHelpUrl(Blockly.Msg.nminilcdi2c_Url_1);
  }
};
 
Blockly.Blocks['nminilcdi2c_clear'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nokialcd.png",53,38))
        .appendField(Blockly.Msg.nminiLCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.nminilcdi2c_Url_1);
  }
};

 

Blockly.Blocks['nminilcdi2c_setcursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nokialcd.png",53,38))
        .appendField(Blockly.Msg.nminiLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.nminiLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.nminiLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.nminiLCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.nminilcdi2c_Url_1);
  }
};



Blockly.Blocks['nminilcdi2c_setcursor4'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nokialcd.png",53,38))
        .appendField(Blockly.Msg.nminiLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.nminiLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.nminiLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.nminiLCDP_Print4);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.nminilcdi2c_Url_1);
  }
};

Blockly.Blocks['nminilcdi2c_setcursor5'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nokialcd.png",53,38))
        .appendField(Blockly.Msg.nminiLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.nminiLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.nminiLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.nminiLCDP_Print5);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.nminilcdi2c_Url_1);
  }
  };
  Blockly.Blocks['nminilcdi2c_setcursor6'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nokialcd.png",53,38))
        .appendField(Blockly.Msg.nminiLCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.nminiLCDP_Column2);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.nminiLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
		.appendField(Blockly.Msg.nminiLCDP_Print6);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-128x64-oled-displej');
	this.setHelpUrl(Blockly.Msg.nminilcdi2c_Url_1);
  }
};
 