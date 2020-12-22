
 
'use strict';

goog.provide('Blockly.Blocks.RotaryEncoder');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_RotaryEncoderInterrupt'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-enkodera'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderInit)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
	this.appendDummyInput()
		.appendField(Blockly.Msg.RE_Interrupt)
        .appendField(Blockly.Msg.RE_PINDT)
        .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PINDT");	
	this.appendDummyInput()
        .appendField(Blockly.Msg.RE_PINCLK)
        .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PINCLK");	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RotaryEncoder_Url_1);
  }
};

Blockly.Blocks['Init_RotaryEncoder'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-enkodera'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderInit)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
	this.appendDummyInput()
		.appendField(Blockly.Msg.RE_withoutInterrupt)
        .appendField(Blockly.Msg.RE_PINDT)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PINDT");	
	this.appendDummyInput()
        .appendField(Blockly.Msg.RE_PINCLK)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PINCLK");	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RotaryEncoder_Url_1);
  }
};


Blockly.Blocks['RotaryEncoder_Write'] = {
 //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-enkodera'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderNumber)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.RE_WRITE);
	this.appendValueInput("Writecounter")
        .setCheck("Number");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RotaryEncoder_Url_1);
  }
};


Blockly.Blocks['RotaryEncoder_Read'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-enkodera'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderNumber)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.RE_READ)
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RotaryEncoder_Url_1);
  }
};

Blockly.Blocks['rotaryencoder_button_sensor'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-enkodera'),
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rotaryencoder.png",44,38))
		.appendField(Blockly.Msg.RotaryEncoderNumber)
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.RE_Button)
	    .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RE_BUTTON");
    this.appendDummyInput()
		.appendField(Blockly.Msg.RE_Pressed)
	this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RotaryEncoder_Url_1);
  }
};




