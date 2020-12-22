
'use strict';

goog.provide('Blockly.Blocks.advanced');

goog.require('Blockly.Blocks');

Blockly.Blocks['arduino_setup'] = {
  init: function() {
	  this.setColour(50);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Setup);
    this.appendStatementInput("MySetup");
    this.appendDummyInput()
        .appendField(Blockly.Msg.Loop);
    this.appendStatementInput("MyLoop");
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=osnovnye-cikly');
	this.setHelpUrl(Blockly.Msg.advanced_1);
    this.setDeletable(true);
  }
};

Blockly.Blocks['arduino_codeall'] = {
  init: function() {
	this.setColour(50);
    this.appendDummyInput()
		.appendField(Blockly.Msg.Writecode);
	this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput('         '), 'TEXT')
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=osnovnye-cikly');
    this.setHelpUrl(Blockly.Msg.advanced_2);
  }
};
// новый блок кода отображения в приложении
Blockly.Blocks['arduino_codealli'] = {
  init: function() {
	this.setColour(50);
    this.appendDummyInput()
		.appendField(Blockly.Msg.Writecodei);
	this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput('         '), 'TEXT')
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=osnovnye-cikly');
	this.setHelpUrl(Blockly.Msg.advanced_3);
    //this.setDeletable(true);
  }
};
Blockly.Blocks['arduino_waitforever'] = {
  init: function() {
	this.setColour(50);
    this.appendDummyInput()
		.appendField(Blockly.Msg.Waitforever);
	this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=osnovnye-cikly');
    this.setHelpUrl(Blockly.Msg.advanced_4);
  }
};
Blockly.Blocks['arduino_reset_bottom'] = {
  init: function() {
	this.setColour(50);
    this.appendDummyInput()
		.appendField(Blockly.Msg.arduino_reset_bottom);
	this.setPreviousStatement(true, null);
   // this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=osnovnye-cikly');
    this.setHelpUrl(Blockly.Msg.advanced_5);
  }
};