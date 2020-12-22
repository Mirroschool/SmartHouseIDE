
 
'use strict';

goog.provide('Blockly.Blocks.RotaryEncoder');

goog.require('Blockly.Blocks');




Blockly.Blocks['ds1990_Write'] = {
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/ibuttonds1990.png",44,38))
		.appendField(Blockly.Msg.ds1990_Write)
        .appendField(new Blockly.FieldDropdown([['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12']]), "RE_NUMBER")
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ds1990_Number)
	this.appendValueInput("Writecounter")
        .setCheck("Number");
	this.appendValueInput("Writecounter1")
        .setCheck("Number");
this.appendValueInput("Writecounter2")
        .setCheck("Number");
this.appendValueInput("Writecounter3")
        .setCheck("Number");
this.appendValueInput("Writecounter4")
        .setCheck("Number");
this.appendValueInput("Writecounter5")
        .setCheck("Number");
this.appendValueInput("Writecounter6")
        .setCheck("Number");
this.appendValueInput("Writecounter7")
        .setCheck("Number");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ibuttonds1990);
  }
};

Blockly.Blocks['ds1990_Read'] = {
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/ibuttonds1990.png",44,38))
		.appendField(Blockly.Msg.ds1990_Read1);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ibuttonds1990);
  }
};

Blockly.Blocks['ds1990_Read1'] = {
  init: function() {
    this.setColour(220);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/ibuttonds1990.png",44,38))
		
		.appendField(Blockly.Msg.ds1990_pin)
        .appendField(new Blockly.FieldDropdown([['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12']]), "NUMBER")
 
		.appendField(Blockly.Msg.ds1990_Number)
        .appendField(new Blockly.FieldDropdown([['1','0'],['2','1'],['3','2'],['4','3'],['5','4'],['6','5'],['7','6'],['8','7']]), "RE_NUMBER");
  //  this.appendDummyInput()
	//    .appendField(Blockly.Msg.RE_READ)
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ibuttonds1990);
  }
};

 



