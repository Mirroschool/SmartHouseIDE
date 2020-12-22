
 
'use strict';

goog.provide('Blockly.Blocks.remoteControlMRT');

goog.require('Blockly.Blocks');

Blockly.Blocks['Init_remotecontrolMRT'] = {
  
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/irreceiverMRT.png",26,38))
        .appendField('PIN 3 - Kod:')
        .appendField(new Blockly.FieldDropdown([['0','0'],['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10']]), "CHANNEL");	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.generalremotecontrol_Url_1);
  }
};

Blockly.Blocks['Init_remotecontrolMRT_pindedicated'] = {
  helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-ik-modul-tsop1736-pult'),
  init: function() {
    this.setColour(100);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/irreceiverMRT.png",26,38))
		.appendField(Blockly.Msg.MRT_IR2)
		.appendField(Blockly.Msg.MRT_IR3)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['Read_remotecontrolMRT_pindedicated'] = {
  helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-ik-modul-tsop1736-pult'),
  init: function() {
    this.setColour(100);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/irreceiverMRT.png",26,38))
		.appendField(Blockly.Msg.MRT_ReadIR)
		.appendField(Blockly.Msg.MRT_ReadIR2)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


Blockly.Blocks['IR_Remote_Key'] = {
 helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-ik-modul-tsop1736-pult'),
  init: function() {
    this.setColour(200);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/remotecontrol.png",65,38))
	    .appendField(Blockly.Msg.MRT_KEY)
		.appendField(new Blockly.FieldDropdown([["UP", "0x1FC3"], ["DOWN", "0x1F"],["LEFT", "0x07"],["RIGHT", "0x73"],["UP and LEFT", "0x7C3"],["UP and RIGHT", "0x7F"],["DOWN and LEFT", "0x70F"],["DOWN and RIGHT", "0x1CF"],["F1", "0x7CF"],["F2", "0x1C3F"],["F3", "0x7F3"],["F4", "0x1CCF"],["F5", "0x1F0F"],["F6", "0x703"],["OFF", "0x733"]]), "KEY")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MRT_PRESSED)
    this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['IR_Remote_Key_pindedicated'] = {
  helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-ik-modul-tsop1736-pult'),
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/remotecontrol.png",65,38))
	    .appendField(Blockly.Msg.MRT_KEY2)
		.appendField(new Blockly.FieldDropdown([["UP", "44"], ["DOWN", "62"],["LEFT", "63"],["RIGHT", "61"],["UP and LEFT", "54"],["UP and RIGHT", "57"],["DOWN and LEFT", "51"],["DOWN and RIGHT", "57"],["F1", "50"],["F2", "35"],["F3", "52"],["F4", "37"],["F5", "38"],["F6", "55"],["OFF", "53"]]), "KEY")
	this.appendDummyInput()
		.appendField(Blockly.Msg.MRT_PRESSED)
    this.setOutput(true, 'Boolean');
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['Init_generalremotecontrol'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-ik-modul-tsop1736-pult'),
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/genericRC.png",57,38))
		.appendField(Blockly.Msg.GENERAL_IR)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN");
	this.appendDummyInput()
		.appendField(Blockly.Msg.GENERAL_PRESSED)		
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.generalremotecontrol_Url_1);
  }
};



