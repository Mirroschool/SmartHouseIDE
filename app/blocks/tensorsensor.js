
 
'use strict';

goog.provide('Blockly.Blocks.HMC5883');

goog.require('Blockly.Blocks');

Blockly.Blocks['tensorsensor1'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/tensorsensor.png",42,38))
        .appendField(Blockly.Msg.tensorsensor_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.tensorsensor_Url_1);
  }
};

Blockly.Blocks['tensorsensor2'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tensorsensor.png",42,38))
		.appendField(Blockly.Msg.tensorsensor)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.tensorsensor_Url_1);
  }
};

Blockly.Blocks['tensorsensor3'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/tensorsensor.png",42,38))
		.appendField(Blockly.Msg.tensorsensor_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.tensorsensor_Url_1);
  }
};

Blockly.Blocks['tensorsensor4'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tensorsensor.png",42,38))
		//.appendField(new Blockly.FieldDropdown([['T','0'],['F','1'],['mb','2'],['inHg','3']]), "TypeMag")
	    .appendField(Blockly.Msg.tensorsensor_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.tensorsensor_Url_1);
  }
};
Blockly.Blocks['tensorsensor5'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tensorsensor.png",42,38))
		//.appendField(new Blockly.FieldDropdown([['T','0'],['F','1'],['mb','2'],['inHg','3']]), "TypeMag")
	    .appendField(Blockly.Msg.tensorsensor_values2);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.tensorsensor_Url_1);
  }
};
