
 
'use strict';

goog.provide('Blockly.Blocks.TCS3200');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_ColorSensor_TCS3200'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-detektora-cveta-tcs3200'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tcs3200.png",49,38))
		.appendField(Blockly.Msg.TCS3200)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2']]), "SC_NUMBER")
	this.appendDummyInput()
        .appendField(Blockly.Msg.TCS3200_S0PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "S0");
	this.appendDummyInput()
        .appendField(Blockly.Msg.TCS3200_S1PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "S1");
	this.appendDummyInput()
        .appendField(Blockly.Msg.TCS3200_S2PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "S2");
	this.appendDummyInput()
        .appendField(Blockly.Msg.TCS3200_S3PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "S3");
	this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200_OUTPIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "OUT")
	this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200_config)
        .appendField(new Blockly.FieldDropdown([['100%','4'],['20%','3'],['2%','2'],['Power Down','1']]), "ESCALE")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ColorSensor_TCS3200_Url_1);
  }
};


Blockly.Blocks['order_to_read_tcs3200_values'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-detektora-cveta-tcs3200'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tcs3200.png",49,38))
		.appendField(Blockly.Msg.TCS3200_name)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2']]), "SC_NUMBER")
	 this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ColorSensor_TCS3200_Url_1);
  }
};

Blockly.Blocks['tcs3200_values'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-detektora-cveta-tcs3200'),
  init: function() {
    this.setColour(220);
	 this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tcs3200.png",49,38))
		.appendField(Blockly.Msg.TCS3200_name)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2']]), "SC_NUMBER")
    this.appendDummyInput()
		.appendField(Blockly.Msg.TCS3200_values)
		.appendField(new Blockly.FieldDropdown([['Red','0'],['Green','1'],['Blue','2']]), "TypeColor")
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ColorSensor_TCS3200_Url_1);
  }
};




