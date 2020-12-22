
'use strict';

goog.provide('Blockly.Blocks.stepper28BYJ');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['stepper28BYJ_configuration'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-uln2003-shagovyj-dvigatel'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/stepper28BYJ.png",60,38))
		.appendField(Blockly.Msg.STEEPER_name2)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "STEEPER_NUMBER")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin1)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER1")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin2)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER2")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin3)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER3")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin4)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER4")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.stepper5_Url_1);
  }
};

Blockly.Blocks['stepper28BYJ_speed'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-uln2003-shagovyj-dvigatel'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/stepper28BYJ.png",60,38))
	.appendField(Blockly.Msg.STEEPER2_name2)
	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "STEEPER_NUMBER")
	this.appendValueInput("STEPPER_SPEED", 'Number')
        .setCheck('Number')
		.appendField(Blockly.Msg.STEEPER_speed)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.stepper5_Url_1);
  }
};

Blockly.Blocks['stepper28BYJ_steps'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-uln2003-shagovyj-dvigatel'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/stepper28BYJ.png",60,38))
	.appendField(Blockly.Msg.STEEPER2_name2)
	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "STEEPER_NUMBER")
	this.appendValueInput("STEPPER_STEP", 'Number')
        .setCheck('Number')
		.appendField(Blockly.Msg.STEEPER_Move)
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_Steps)
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['Clockwise','1'],['Counter-Clockwise','2']]), "STEEPER_WAY")	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.stepper5_Url_1);
  }
};


Blockly.Blocks['stepper_stopy'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-shagovyj-dvigatel-l298n-l293d'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/stepper28BYJ.png",60,38))
		//.appendField(Blockly.Msg.STEEPER_name)
		.appendField(Blockly.Msg.stepROTSERVO_Stop)
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin1)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER1")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin2)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER2")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin3)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER3")
	this.appendDummyInput()
		.appendField(Blockly.Msg.STEEPER_pin4)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_STEEPER4")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.stepper4_Url_1);
  }
};
