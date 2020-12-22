
 
'use strict';

goog.provide('Blockly.Blocks.keypad');
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_Keypad4x4'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-klaviatura'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/key4x4.png",51,38))
		.appendField(Blockly.Msg.KEYPAD_NAME)
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW1)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R1")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW2)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R2")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW3)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R3")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW4)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R4")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C1)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C1")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C2)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C2")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C3)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C3")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C4)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C4")	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Init_Keypad4x4_Url_1);
  }
};

Blockly.Blocks['Init_Keypad4x3'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-klaviatura'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/key4x3.png",36,38))
		.appendField(Blockly.Msg.KEYPAD_NAME2)
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW1)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R1")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW2)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R2")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW3)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R3")
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROW4)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_R4")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C1)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C1")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C2)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C2")
	this.appendDummyInput()
        .appendField(Blockly.Msg.C3)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_C3")	
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Init_Keypad4x4_Url_2);
  }
};

Blockly.Blocks['keypad_keyreaded'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-klaviatura'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/key.png",27,25))
		.appendField(Blockly.Msg.KEYPAD_KEYREADED)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Init_Keypad4x4_Url_3);
  }
};

Blockly.Blocks['keypad_key'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-klaviatura'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/key.png",27,25))
		.appendField(Blockly.Msg.KEY)
		.appendField(new Blockly.FieldDropdown([['1', "1"], ['2', "2"],['3', "3"],['4', "4"],['5', "5"],['6', "6"],['7', "7"],['8', "8"],['9', "9"],['0', "0"],['A', "A"],['B', "B"],['C', "C"],['D', "D"],['*', "*"],['#', "#"],['No key', "NO_KEY"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Init_Keypad4x4_Url_4);
  }
};

