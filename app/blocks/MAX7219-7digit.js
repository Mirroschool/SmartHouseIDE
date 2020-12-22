
'use strict';

goog.provide('Blockly.Blocks.MAX7219_7digit');
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_MAX7219_7digit'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-cwg-8-cifrovoj-max7219'),
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MAX7219_7d.png",160,38))
		.appendField(Blockly.Msg.MAX7219_7D_NAME)
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_7D_DAT)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_DAT")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_7D_CLK)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CLK")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_7D_CS)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CS")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_7D_Number)
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'],['3', '3'],['4', '4']]), "NumberDisplays")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.MAX7219_Url_1);
  }
};

Blockly.Blocks['MAX7219_7digit_shutdown'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-cwg-8-cifrovoj-max7219'),
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/digit2.png",12,20))
		.appendField(Blockly.Msg.MAX7219_7D_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_7D_SHUTDOWN)
		.appendField(new Blockly.FieldDropdown([['ON', 'false'], ['OFF', 'true']]), "power")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.MAX7219_Url_2);
  }
};

Blockly.Blocks['MAX7219_7digit_brightness'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-cwg-8-cifrovoj-max7219'),
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/digit2.png",12,20))
		.appendField(Blockly.Msg.MAX7219_7D_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("BRIGHTNESS")
		.setCheck("Number")
        .appendField(Blockly.Msg.MAX7219_7D_Brightness)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.MAX7219_Url_3);
  }
};

Blockly.Blocks['MAX7219_7digit_clear'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-cwg-8-cifrovoj-max7219'),
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/digit2.png",12,20))
		.appendField(Blockly.Msg.MAX7219_7D_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
		.appendField(Blockly.Msg.MAX7219_7D_CLEAR)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.MAX7219_Url_4);
  }
};

Blockly.Blocks['MAX7219_7digit_digit'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-cwg-8-cifrovoj-max7219'),
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/digit2.png",12,20))
		.appendField(Blockly.Msg.MAX7219_7D_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("Digit")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_7D_DIGIT)	
	this.appendValueInput("VALUE")
		.setCheck("Number")
        .appendField(Blockly.Msg.MAX7219_7D_VALUE)	
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_7D_DP)
		.appendField(new Blockly.FieldDropdown([['OFF', 'false'],['ON', 'true']]), "dp")	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.MAX7219_Url_5);
  }
};

Blockly.Blocks['MAX7219_7digit_char'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-cwg-8-cifrovoj-max7219'),
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/digit2.png",12,20))
		.appendField(Blockly.Msg.MAX7219_7D_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("Digit")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_7D_DIGIT)		
	this.appendDummyInput()
		.appendField(Blockly.Msg.MAX7219_7D_CHAR)	
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'],['3', '3'],['4', '4'],['5', '5'], ['6', '6'],['7', '7'],['8', '8'],['9', '9'], ['0', '0'],['A', 'A'],['b', 'b'],['c', 'c'], ['d', 'd'],['E', 'E'],['F', 'F'],['H', 'H'],['L', 'L'], ['P', 'P'],['_', '_'],['-', '-'],['Blank or Space', ' ']]), "Chartopaint")	
	this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_7D_DP)
		.appendField(new Blockly.FieldDropdown([['OFF', 'false'],['ON', 'true']]), "dp")	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.MAX7219_Url_6);
  }
};

Blockly.Blocks['MAX7219_7digit_custom'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-cwg-8-cifrovoj-max7219'),
  init: function() {
    this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/digit2.png",12,20))
		.appendField(Blockly.Msg.MAX7219_7D_NAME2)
		.appendField(new Blockly.FieldDropdown([['1', '0'], ['2', '1'],['3', '2'],['4', '3']]), "NumberDisplays")
	this.appendValueInput("Digit")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_7D_DIGIT)		
	this.appendValueInput("VALUE")
		.setCheck("Number")
		.appendField(Blockly.Msg.MAX7219_7D_CUSTOM)	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.MAX7219_Url_7);
  }
};


		

