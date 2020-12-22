

'use strict';

goog.provide('Blockly.Blocks.NRF24L01');

goog.require('Blockly.Blocks');


 

Blockly.Blocks['catr433_sendvar'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/repit.png",25,25))
		.appendField('R433 Mhz Pin')
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendField(Blockly.Msg.RF24L01_sendvar);
	this.appendValueInput("variable")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.catr433);
  }
};

Blockly.Blocks['catr433_recvvar'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/resit.png",25,25))
		.appendField('R433 Mhz Pin')
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendField(Blockly.Msg.RF24L01_recvvar);
	this.appendValueInput("variable")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.catr433);
  }
};
 