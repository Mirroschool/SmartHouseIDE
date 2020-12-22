
 
'use strict';

goog.provide('Blockly.Blocks.Temp-ds18b20');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_Temp_ds18b20'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-termosensora-18b20'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
		.appendField(Blockly.Msg.TempDS18B20)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN");	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Temp_ds18b20_Url_1);
  }
};

Blockly.Blocks['order_read_temeperature_ds18b20'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-termosensora-18b20'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
        .appendField(Blockly.Msg.OrderReadTempDS18B20);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Temp_ds18b20_Url_1);
  }
};


Blockly.Blocks['read_temeperature_ds18b20'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-termosensora-18b20'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ds18b20.png",52,38))
	    .appendField(Blockly.Msg.ReadTempDS18B20)
	this.appendValueInput("Sensor")
        .setCheck("Number");
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Temp_ds18b20_Url_1);
  }
};



