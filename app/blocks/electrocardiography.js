
 
'use strict';

goog.provide('Blockly.Blocks.HMC5883');

goog.require('Blockly.Blocks');

Blockly.Blocks['electrocardiography1'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/kardio.png",42,38))
        .appendField(Blockly.Msg.electrocardiography_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.electrocardiography_Url_1);
  }
};

Blockly.Blocks['electrocardiography2'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/electrocardiography.png",42,38))
		//.appendField(new Blockly.FieldDropdown([['T','0'],['F','1'],['mb','2'],['inHg','3']]), "TypeMag")
	    .appendField(Blockly.Msg.electrocardiography_values2);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.electrocardiography_Url_1);
  }
};

Blockly.Blocks['electrocardiography3'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/electrocardiography.png",42,38))
		//.appendField(new Blockly.FieldDropdown([['T','0'],['F','1'],['mb','2'],['inHg','3']]), "TypeMag")
	    .appendField(Blockly.Msg.electrocardiography_values1);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.electrocardiography_Url_1);
  }
};

Blockly.Blocks['electrocardiography4'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-bmp180'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/electrocardiography.png",42,38))
		//.appendField(new Blockly.FieldDropdown([['T','0'],['F','1'],['mb','2'],['inHg','3']]), "TypeMag")
	    .appendField(Blockly.Msg.electrocardiography_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.electrocardiography_Url_1);
  }
};
 
