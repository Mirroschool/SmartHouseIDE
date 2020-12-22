
 
'use strict';

goog.provide('Blockly.Blocks.softWIFI');

goog.require('Blockly.Blocks');




Blockly.Blocks['soft_wifi_init'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-esp8266-wi-fi'),
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendDummyInput()
	.appendField(Blockly.Msg.SSERIAL_WIFI_Init)
    .appendField(Blockly.Msg.SSERIAL_WIFI_TX)
	.appendField(new Blockly.FieldDropdown([['Pin6', '6'],['Pin7', '7'],['Pin8', '8'],['Pin9', '9'],['Pin10', '10']]), "PIN1");
    this.appendDummyInput()
    .appendField(Blockly.Msg.SSERIAL_WIFI_RX)
	.appendField(new Blockly.FieldDropdown([['Pin6', '6'],['Pin7', '7'],['Pin8', '8'],['Pin9', '9'],['Pin10', '10']]), "PIN2");
	 this.appendDummyInput()
    .appendField(Blockly.Msg.SSERIAL_WIFI_BAUD)
	.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_wifi_Url_1);
  }
};

Blockly.Blocks['soft_wifi_printfor'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-esp8266-wi-fi'),
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
        .appendTitle(Blockly.Msg.SSerial_WIFI_Print_Format)
     	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.SSerial_Print_ForDecimal, "DEC"],[Blockly.Msg.SSerial_Print_ForHexa, "HEX"],[Blockly.Msg.SSerial_Print_ForBin, "BIN"],[Blockly.Msg.SSerial_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_wifi_Url_1);
  }
};

Blockly.Blocks['soft_wifi_available'] = {
	//helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-esp8266-wi-fi'),
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SSERIAL_WIFI_Avai);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_wifi_Url_1);
  }
};

Blockly.Blocks['soft_wifi_read'] = {
	//helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-esp8266-wi-fi'),
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SSERIAL_WIFI_Read);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_wifi_Url_1);
  }
};

Blockly.Blocks['soft_wifi_println'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-esp8266-wi-fi'),
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SSERIAL_WIFI_Println);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_wifi_Url_1);
  }
};

Blockly.Blocks['soft_wifi_print'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-esp8266-wi-fi'),
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SSERIAL_WIFI_Print);
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_wifi_Url_1);
  }
};

Blockly.Blocks['soft_wifi_write'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-esp8266-wi-fi'),
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/logowifi.png", 24,18 ))
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.Msg.SSERIAL_WIFI_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.soft_wifi_Url_1);
  }
};




