
 
'use strict';

goog.provide('Blockly.Blocks.ADXL345');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_Accel_ADXL345'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-akselerometra-adxl345'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/ADXL345.png",50,38))
		.appendField(Blockly.Msg.ADXL345)
		.appendField(Blockly.Msg.ADXL345_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ADXL345_Url_1);
  }
};

Blockly.Blocks['config_adxl345_range'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-akselerometra-adxl345'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/ADXL345.png",50,38))
        .appendField(Blockly.Msg.ADXL345_config)
		.appendField(new Blockly.FieldDropdown([['2g','ADXL345_RANGE_2_G'],['4g','ADXL345_RANGE_4_G'],['8g','ADXL345_RANGE_8_G'],['16g','ADXL345_RANGE_16_G']]), "ADXL345_RANGE");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
	this.setHelpUrl(Blockly.Msg.ADXL345_Url_2);
  }
};

Blockly.Blocks['order_to_read_adxl345_values'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-akselerometra-adxl345'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/ADXL345.png",50,38))
        .appendField(Blockly.Msg.ADXL345_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
	this.setHelpUrl(Blockly.Msg.ADXL345_Url_3);
  }
};

Blockly.Blocks['adxl345_values'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-akselerometra-adxl345'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ADXL345.png",50,38))
		.appendField(new Blockly.FieldDropdown([['Ax','0'],['Ay','1'],['Az','2']]), "TypeAccel")
	    .appendField(Blockly.Msg.ADXL345_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ADXL345_Url_4);
  }
};




