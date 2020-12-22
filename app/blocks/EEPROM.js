

'use strict';

goog.provide('Blockly.Blocks.EEPROM');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['eeprom_write_byte'] = {		
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-mesto-hraneniya-eeprom'),
  init: function() {
    this.setColour(100);
    this.appendValueInput("ADDRESS")
		.appendField(new Blockly.FieldImage("images/eeprom.png",37,25))
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE);
    this.appendValueInput("DATA")
        .setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_DATA_BYTE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.eeprom_Url_1);
  }
};

Blockly.Blocks['eeprom_read_byte'] = {
//helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-mesto-hraneniya-eeprom'),	
  init: function() {
    this.setColour(100);
    this.appendValueInput("ADDRESS")
		.appendField(new Blockly.FieldImage("images/eeprom.png",37,25))
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_READ_BYTE);
    this.setOutput(true, Number);
	this.setInputsInline(true);
	this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.eeprom_Url_2);
  }
};

Blockly.Blocks['eeprom_write_variable'] = {		
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-mesto-hraneniya-eeprom'),
  init: function() {
    this.setColour(100);
    this.appendValueInput("ADDRESS")
		.appendField(new Blockly.FieldImage("images/eeprom.png",37,25))
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_WRITE_VARIABLE);
    this.appendValueInput("DATA")
        //.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_DATA_VARIABLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.eeprom_Url_3);
  }
};

Blockly.Blocks['eeprom_read_variable'] = {	
//helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-mesto-hraneniya-eeprom'),
  init: function() {
    this.setColour(100);
    this.appendValueInput("ADDRESS")
		.appendField(new Blockly.FieldImage("images/eeprom.png",37,25))
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_READ_VARIABLE);
	this.appendValueInput("DATA")
        //.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_DATA_VARIABLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.eeprom_Url_4);
  }
};

