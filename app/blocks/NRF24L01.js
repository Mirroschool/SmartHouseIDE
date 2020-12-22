

'use strict';

goog.provide('Blockly.Blocks.NRF24L01');

goog.require('Blockly.Blocks');


Blockly.Blocks['nrf24l01_init'] = {
   init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nrf24l01.png",41,38))
        .appendField(Blockly.Msg.RF24L01_init)
		.appendField(Blockly.Msg.RF24L01_init2);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.RF24L01_PIN_CE)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CE")
	this.appendDummyInput()	
        .appendField(Blockly.Msg.RF24L01_PIN_CS)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CS")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.nrf24l01_Url_1);
  }
};

Blockly.Blocks['nrf24l01_s'] = {
   init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/nrf24l01.png",41,38))
		.appendField("K(0-126)")
		.appendField(new Blockly.FieldTextInput('100'), 'nrfTEXT1')
 		.appendField("S")
		.appendField(new Blockly.FieldDropdown([['250KBPS','250KBPS'],['1MBPS','1MBPS'],['2MBPS','2MBPS']]), "nrf_OPERATION1")
		.appendField("Bm")
		.appendField(new Blockly.FieldDropdown([['MIN -18dBm','MIN'],['LOW -12dBm','LOW'],['HIGH -6dBm','HIGH'],['MAX 0dBm','MAX']]), "nrf_OPERATION2")
		.appendField("A")
		.appendField(new Blockly.FieldTextInput('0x0123456789LL'), 'nrfTEXT2');
	//250KBPS, 1MBPS, 2MBPS
	//	MIN=-18dBm, LOW=-12dBm, HIGH=-6dBm, MAX=0dBm
	//	.appendField(Blockly.Msg.RF24L01_init2);
	//this.appendDummyInput()	
    //    .appendField(Blockly.Msg.RF24L01_PIN_CE)
    //    .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CE")
	//this.appendDummyInput()	
    //    .appendField(Blockly.Msg.RF24L01_PIN_CS)
    //    .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CS")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.nrf24l01_Url_1);
  }
};

Blockly.Blocks['nrf24l01_writepipe'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_writepipe);
    this.appendValueInput("writepipe")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.nrf24l01_Url_2);
  }
};

Blockly.Blocks['nrf24l01_readpipe'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_readpipe);
    this.appendValueInput("readpipe")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.nrf24l01_Url_3);
  }
};

Blockly.Blocks['nrf24l01_startlistening'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_startlistening);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.nrf24l01_Url_4);
  }
};

Blockly.Blocks['nrf24l01_stoplistening'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_stoplistening);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.nrf24l01_Url_5);
  }
};

Blockly.Blocks['nrf24l01_sendvar'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_sendvar);
	this.appendValueInput("variable")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.nrf24l01_Url_6);
  }
};

Blockly.Blocks['nrf24l01_recvvar'] = {
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
        .appendField(Blockly.Msg.RF24L01_recvvar);
	this.appendValueInput("variable")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
	this.setHelpUrl(Blockly.Msg.nrf24l01_Url_7);
  }
};

Blockly.Blocks['nrf24l01_recv_available'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01'),
  init: function() {
    this.setColour(215);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
		.appendField(Blockly.Msg.RF24L01_name)
	    .appendField(Blockly.Msg.RF24L01_datavailable)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.nrf24l01_Url_8);
  }
};

