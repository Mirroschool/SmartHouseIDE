
 
'use strict';

goog.provide('Blockly.Blocks.softserial');

goog.require('Blockly.Blocks');




Blockly.Blocks['soft_init'] = {
  //helpUrl: ' ',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Softserial.png", 21, 18))
    this.appendDummyInput()
	.appendField(Blockly.Msg.SSERIAL_Init_SSERIAL)
    .appendField('TX')
	.appendField(new Blockly.FieldDropdown([['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7']]), "PIN1");
    this.appendDummyInput()
    .appendField('RX')
	.appendField(new Blockly.FieldDropdown([['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7']]), "PIN2");
	 this.appendDummyInput()
    .appendField(Blockly.Msg.SSERIAL_BAUD_SSERIAL)
	.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
	this.setHelpUrl(Blockly.Msg.soft_SSERIALinit);
  }
};

Blockly.Blocks['soft_printfor'] = {
  //helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Softserial.png", 21, 18))
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
        .appendTitle(Blockly.Msg.SSerial_Print_Formatt_SSERIAL)
     	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.SSerial_Print_ForDecimal, "DEC"],[Blockly.Msg.SSerial_Print_ForHexa, "HEX"],[Blockly.Msg.SSerial_Print_ForBin, "BIN"],[Blockly.Msg.SSerial_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_SSERIALinit);
  }
};

Blockly.Blocks['soft_available'] = {
	//helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Softserial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SSERIAL_Avai_SSERIAL);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_SSERIALinit);
  }
};

Blockly.Blocks['soft_read'] = {
	//helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Softserial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SSERIAL_Read_SSERIAL);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_SSERIALinit);
  }
};

Blockly.Blocks['soft_println'] = {
 // helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Softserial.png", 21, 18))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SSERIAL_Println_SSERIAL);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_SSERIALinit);
  }
};

Blockly.Blocks['soft_print'] = {
  //helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Softserial.png", 21, 18))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SSERIAL_Print_SSERIAL);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_SSERIALinit);
  }
};

Blockly.Blocks['soft_write'] = {
 // helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Softserial.png", 21, 18))
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.Msg.SSERIAL_Write_SSERIAL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_SSERIALinit);
  }
};




