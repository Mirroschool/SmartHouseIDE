
 
'use strict';

goog.provide('Blockly.Blocks.serial1');

goog.require('Blockly.Blocks');




Blockly.Blocks['serial1_init'] = {
  helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendDummyInput()
	.appendField(Blockly.Msg.SERIAL1_Init)
    this.appendDummyInput()
    .appendField(Blockly.Msg.SERIAL1_BAUD)
	.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_printfor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
        .appendTitle(Blockly.Msg.Serial1_Print_Format)
     	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.Serial1_Print_ForDecimal, "DEC"],[Blockly.Msg.Serial1_Print_ForHexa, "HEX"],[Blockly.Msg.Serial1_Print_ForBin, "BIN"],[Blockly.Msg.Serial1_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_available'] = {
	helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL1_Avai);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_read'] = {
	helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL1_Read);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_println'] = {
  helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SERIAL1_Println);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_print'] = {
  helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SERIAL1_Print);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_write'] = {
  helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.Msg.SERIAL1_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_flush'] = {
	helpUrl: '',
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial1_flush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


