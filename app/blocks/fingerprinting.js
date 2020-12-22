
 
'use strict';

goog.provide('Blockly.Blocks.HMC5883');

goog.require('Blockly.Blocks');

Blockly.Blocks['Initread_fingerprinting'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/otpskanmod.png",42,38))
        .appendField(Blockly.Msg.fingerprinting_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.fingerprinting_Url_1);
  }
};

Blockly.Blocks['Init_fingerprinting'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/otpskanmod.png",42,38))
		.appendField(Blockly.Msg.fingerprinting)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.fingerprinting_Url_1);
  }
};

Blockly.Blocks['read_fingerprinting'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/otpskanmod.png",42,38))
		.appendField(Blockly.Msg.fingerprinting_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.fingerprinting_Url_1);
  }
};

Blockly.Blocks['values_fingerprinting'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/otpskan.png",42,38))
		//.appendField(new Blockly.FieldDropdown([['T','0'],['F','1'],['mb','2'],['inHg','3']]), "TypeMag")
	    .appendField(Blockly.Msg.fingerprinting_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.fingerprinting_Url_1);
  }
};
