
 
'use strict';

goog.provide('Blockly.Blocks.HMC5883');

goog.require('Blockly.Blocks');

Blockly.Blocks['bmpInit_Compass_HMC5883'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-BMP'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/bmp280.png",42,38))
		.appendField(Blockly.Msg.bmpHMC5883)
	this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x77"), "NAME");
	this.appendDummyInput()
		.appendField(Blockly.Msg.bmpHMC5883_2);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.bmp_Url_1);
  }
};

Blockly.Blocks['bmporder_to_read_HMC5883_values'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-BMP'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/bmp280.png",42,38))
        .appendField(Blockly.Msg.bmpHMC5883_read)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.bmp_Url_2);
  }
};

Blockly.Blocks['bmpHMC5883_values'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-barometr-BMP'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/bmp280.png",42,38))
		.appendField(new Blockly.FieldDropdown([['Temperature °С','0'],['Altitude','1'],['tMM.PT.CT','2'],['tPa','3']]), "TypeMag")
	    .appendField(Blockly.Msg.bmpHMC5883_values);
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.bmp_Url_3);
  }
};
