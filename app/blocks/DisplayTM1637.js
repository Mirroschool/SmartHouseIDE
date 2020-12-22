
'use strict';

goog.provide('Blockly.Blocks.DisplayTM1637');

goog.require('Blockly.Blocks');

Blockly.Blocks['DisplayTM1637_init'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-4s-7segmentnyj-tm1637'),
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_init)
		//.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
    this.appendDummyInput()
		.appendField(Blockly.Msg.TM1637_PinCLK)
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_CLK")
	 this.appendDummyInput()
		.appendField(Blockly.Msg.TM1637_PinDIO)
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_DIO")
  //  this.appendValueInput("Britghness")
//		.setCheck('Number')
//		.appendField(Blockly.Msg.M1637_Brightness);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.TM1637_Url_1);
  }
};

/*
Blockly.Blocks['DisplayTM1637_activate'] = {
  helpUrl: ' ',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
	this.appendDummyInput()
		.appendField(Blockly.Msg.M1637_turnOFF_ON)
		.appendField(new Blockly.FieldDropdown([['ON','1'],['OFF','2']]), "TM1637_POWER")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};



Blockly.Blocks['DisplayTM1637_setBrightness'] = {
  helpUrl: ' ',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
    this.appendValueInput("Brightness")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Brightness);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DisplayTM1637_clear'] = {
  helpUrl: ' ',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
    this.appendDummyInput()
        .appendField(Blockly.Msg.M1637_Clear)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DisplayTM1637_set_segment'] = {
  helpUrl: ' ',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
	this.appendValueInput("Value")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Segment);
	this.appendValueInput("Digit")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Digit);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
*/
Blockly.Blocks['DisplayTM1637_set_digit'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-4s-7segmentnyj-tm1637'),
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
	//	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
	this.appendValueInput("valuenumber")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_number);
	this.appendValueInput("Digit")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Digit);
	//this.appendDummyInput()
	//	.appendField(Blockly.Msg.M1637_dpOFF_ON)
	//	.appendField(new Blockly.FieldDropdown([['OFF','false'],['ON','true']]), "TM1637_POINT")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.TM1637_Url_2);
  }
};

Blockly.Blocks['DisplayTM1637_set_completenumber'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-4s-7segmentnyj-tm1637'),
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
	//	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
	this.appendValueInput("completenumber")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_completenumber);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.TM1637_Url_3);
  }
};

Blockly.Blocks['DisplayTM1637_set_hourmin'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-4s-7segmentnyj-tm1637'),
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
	//	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
//	this.appendValueInput("hour")
//		.setCheck('Number')
//		.appendField(Blockly.Msg.M1637_Hour);
//	this.appendValueInput("min")
//		.setCheck('Number')
//		.appendField(Blockly.Msg.M1637_Min);
	this.appendDummyInput()
		.appendField(Blockly.Msg.M1637_dpOFF_ON_2)
		.appendField(new Blockly.FieldDropdown([['OFF','POINT_OFF'],['ON','POINT_ON']]), "TM1637_POINT")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.TM1637_Url_4);
  }
};
/*
Blockly.Blocks['DisplayTM1637_set_minsecond'] = {
  helpUrl: ' ',
  init: function() {
	this.setColour(140);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/TM1637.png",48,38))
        .appendField(Blockly.Msg.TM1637_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "TM1637_NUMBER")
	this.appendValueInput("min")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Min);
	this.appendValueInput("second")
		.setCheck('Number')
		.appendField(Blockly.Msg.M1637_Second);
	this.appendDummyInput()
		.appendField(Blockly.Msg.M1637_dpOFF_ON_2)
		.appendField(new Blockly.FieldDropdown([['OFF','false'],['ON','true']]), "TM1637_POINT")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
*/
