
'use strict';

goog.provide('Blockly.Blocks.stepper');

goog.require('Blockly.Blocks');




Blockly.Blocks['xstepper_configuration'] = {
 
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/xstepper.png",38,38))
		.appendField(Blockly.Msg.STEEPER_name)
		.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6']]), "STEEPER_NUMBER")
	this.appendValueInput("STEP_RPM", 'Number')
        .setCheck('Number')
		.appendField(Blockly.Msg.stepper56_Url_2)
	this.appendValueInput("STEP", 'Number')
        .setCheck('Number')
		.appendField(Blockly.Msg.stepper56_Url_3)
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
	this.setHelpUrl(Blockly.Msg.stepper56_Url_1);
  }
};

Blockly.Blocks['xstepper_speed'] = {
  
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/xstepper.png",38,38))
	.appendField(Blockly.Msg.STEEPER2_name)
	.appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6']]), "STEEPER_NUMBER")
	this.appendValueInput("STEPPER_SPEED", 'Number')
        .setCheck('Number')
		.appendField(Blockly.Msg.stepper56_Url_4)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.stepper56_Url_1);
  }
};

