
'use strict';

goog.provide('Blockly.Blocks.serial1WIFI');

goog.require('Blockly.Blocks');




Blockly.Blocks['serial1_wifi_init'] = {
  helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERIAL1_WIFI_Init)
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERIAL1_WIFI_BAUD)
		.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_printfor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
        .appendTitle(Blockly.Msg.Serial1_WIFI_Print_Format)
     	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.Serial1_Print_ForDecimal, "DEC"],[Blockly.Msg.Serial1_Print_ForHexa, "HEX"],[Blockly.Msg.Serial1_Print_ForBin, "BIN"],[Blockly.Msg.Serial1_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_available'] = {
	helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL1_WIFI_Avai);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_read'] = {
	helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SERIAL1_WIFI_Read);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_println'] = {
  helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SERIAL1_WIFI_Println);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_print'] = {
  helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SERIAL1_WIFI_Print);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_write'] = {
  helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.Msg.SERIAL1_WIFI_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['serial1_wifi_flush'] = {
	helpUrl: '',
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial1_WIFI_flush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};


