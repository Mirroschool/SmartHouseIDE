'use strict';

goog.provide('Blockly.Blocks.seriallcdi2c');

goog.require('Blockly.Blocks');


Blockly.Blocks['lcdm7m_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/digit2.png",53,38))
        .appendField(Blockly.Msg.m7_setup);
	this.appendDummyInput()	
   .appendField(new Blockly.FieldTextInput("8, 9, 10, 11, 12, 13"), "NAME");
  // this.appendValueInput("COLUMNS")
  //      .setCheck("Number")
  //      .appendField(Blockly.Msg.mLCDP_Column);
   // this.appendValueInput("ROWS")
  //      .setCheck("Number")
//.appendField(Blockly.Msg.mLCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-0162-2004-mt-16s2h');
   this.setHelpUrl(Blockly.Msg.lcd47_Url_1);
  }
};


Blockly.Blocks['lcdm7m_setcursor'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/digit2.png",53,38))
        .appendField(Blockly.Msg.m7print_setup);
   // this.appendValueInput("column")
   //     .setCheck("Number")
   //     .appendField(Blockly.Msg.mLCDP_Column2);
   // this.appendValueInput("row")
   //     .setCheck("Number")
   //     .appendField(Blockly.Msg.mLCDP_Row2);
	this.appendValueInput("texttoprint")
        .setCheck(null)
	//	.appendField(Blockly.Msg.mLCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  //  this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displej-0162-2004-mt-16s2h');
  this.setHelpUrl(Blockly.Msg.lcd47_Url_1);
  }
};
