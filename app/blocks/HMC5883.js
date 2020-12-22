
 
'use strict';

goog.provide('Blockly.Blocks.HMC5883');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_Compass_HMC5883'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-kompasa-hmc5883'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/hmc5883.png",42,38))
		.appendField(Blockly.Msg.HMC5883)
	this.appendDummyInput()
		.appendField(Blockly.Msg.HMC5883_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Compass_HMC5883_Url_1);
  }
};

Blockly.Blocks['order_to_read_HMC5883_values'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-kompasa-hmc5883'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/hmc5883.png",42,38))
        .appendField(Blockly.Msg.HMC5883_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Compass_HMC5883_Url_2);
  }
};

Blockly.Blocks['HMC5883_values'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-kompasa-hmc5883'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/hmc5883.png",42,38))
		.appendField(new Blockly.FieldDropdown([['magnetic vector.X','0'],['magnetic vector.Y','1'],['magnetic vector.Z','2'],['Heading ºdegree','3']]), "TypeMag")
	    .appendField(Blockly.Msg.HMC5883_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Compass_HMC5883_Url_3);
  }
};
