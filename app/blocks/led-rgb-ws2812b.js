
'use strict';

goog.provide('Blockly.Blocks.led-rgb-ws2812b');

goog.require('Blockly.Blocks');

Blockly.Blocks['LedStrip_WS2812B_init'] = {
  //helpUrl:" ",
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13'],['14','14'],['15','15'],['16','16'],['17','17'],['18','18'],['19','19'],['20','20']]), "LEDSTRIP_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS2812B_init)
		.appendField(Blockly.Msg.ledstrip_WS2812B_init_Pin)
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("Number_of_Leds")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_Number_of_Leds);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	 this.setHelpUrl(Blockly.Msg.ledStrip_Url_1);
  }
};

Blockly.Blocks['LedStrip_WS2812B_setBrightness'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-adresnoj-svetodiodnoj-lenty'),
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13'],['14','14'],['15','15'],['16','16'],['17','17'],['18','18'],['19','19'],['20','20']]), "LEDSTRIP_NUMBER")
    this.appendValueInput("Brightness")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_Brightness);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ledStrip_Url_2);
  }
};

Blockly.Blocks['LedStrip_WS2812B_show'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-adresnoj-svetodiodnoj-lenty'),
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13'],['14','14'],['15','15'],['16','16'],['17','17'],['18','18'],['19','19'],['20','20']]), "LEDSTRIP_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS2812B_Show)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	 this.setHelpUrl(Blockly.Msg.ledStrip_Url_3);
  }
};

Blockly.Blocks['LedStrip_WS2812B_clear'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-adresnoj-svetodiodnoj-lenty'),
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13'],['14','14'],['15','15'],['16','16'],['17','17'],['18','18'],['19','19'],['20','20']]), "LEDSTRIP_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS2812B_Clear)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ledStrip_Url_4);
  }
};

Blockly.Blocks['LedStrip_WS2812B_setPixelColor'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-adresnoj-svetodiodnoj-lenty'),
  
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13'],['14','14'],['15','15'],['16','16'],['17','17'],['18','18'],['19','19'],['20','20']]), "LEDSTRIP_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS2812B_setPixelColor)
		.appendField(new Blockly.FieldColour('#ff0000'), 'RGBCOLOR');	
    this.appendValueInput("Pixel_number")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_Led_Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ledStrip_Url_5);
  }
};

Blockly.Blocks['LedStrip_WS2812B_setPixelColor2'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-adresnoj-svetodiodnoj-lenty'),
  
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ledstrip.png",46,38))
        .appendField(Blockly.Msg.ledstrip_WS2812B_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13'],['14','14'],['15','15'],['16','16'],['17','17'],['18','18'],['19','19'],['20','20']]), "LEDSTRIP_NUMBER")
    this.appendValueInput("Pixel_R")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_R);
	this.appendValueInput("Pixel_G")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_G);
	this.appendValueInput("Pixel_B")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_B);
    this.appendValueInput("Pixel_number")
		.setCheck('Number')
		.appendField(Blockly.Msg.ledstrip_WS2812B_Led_Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ledStrip_Url_6);
  }
};

