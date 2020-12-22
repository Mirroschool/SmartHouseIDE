
'use strict';

goog.provide('Blockly.Blocks.RadioTEA5767');

goog.require('Blockly.Blocks');

Blockly.Blocks['RadioTEA5767_init'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-fm-radio-76-108-mgc'),
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio.png",53,38))
        .appendField(Blockly.Msg.TEA5767_init)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RadioTEA5767_Url_1);
  }
};

Blockly.Blocks['RadioTEA5767_activate'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-fm-radio-76-108-mgc'),
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
		.appendField(Blockly.Msg.TEA5767_turnOFF_ON)
		.appendField(new Blockly.FieldDropdown([['ON','1'],['OFF','2']]), "TEA5767_POWER")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RadioTEA5767_Url_2);
  }
};

Blockly.Blocks['RadioTEA5767_mute'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-fm-radio-76-108-mgc'),
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
		.appendField(Blockly.Msg.TEA5767_muteOFF_ON)
		.appendField(new Blockly.FieldDropdown([['OFF','2'],['ON','1']]), "TEA5767_MUTE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RadioTEA5767_Url_3);
  }
};

Blockly.Blocks['RadioTEA5767_LevelSignal'] = {
 //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-fm-radio-76-108-mgc'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
        .appendField(Blockly.Msg.TEA5767_Level)
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RadioTEA5767_Url_4);
  }
};

Blockly.Blocks['RadioTEA5767_Stereo'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-fm-radio-76-108-mgc'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
        .appendField(Blockly.Msg.TEA5767_Stereo)
	this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RadioTEA5767_Url_5);
  }
};

Blockly.Blocks['RadioTEA5767_setFrequency'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-fm-radio-76-108-mgc'),
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-2.png",25,25))
        .appendField(Blockly.Msg.TEA5767_name)
		.appendField(Blockly.Msg.TEA5767_RadioStation)
	this.appendValueInput("Value")
		.setCheck('Number')
		.appendField(Blockly.Msg.TEA5767_SetFrequency);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RadioTEA5767_Url_6);
  }
};

Blockly.Blocks['frequenciesMadrid'] = {
 //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-fm-radio-76-108-mgc'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/radio-3.png",25,25))
	    .appendField(Blockly.Msg.TEA5767_MadridFrequency)
        .appendField(new Blockly.FieldDropdown([['RNE Radio Nacional','88.20'],['M80 Radio','89.00'],['SER Madrid Norte','89.60'],
		['RNE Radio 5 Todo Noticias','90.30'],['Europa FM','91.00'],['Cadena Dial','91.70'],['RNE Radio 3','93.20'],['Los 40 Principales ','93.90'],
		['Melodía FM','98.40'],['Cadena 100','99.50'],['COPE+ Madrid','101.00'],['RNE Radio Clásica','96.50'],['Onda Cero','98.00'],
		['Vaughan Radio','100.40'],['Kiss FM','102.70'],['Onda Madrid ','101.30'],['Radio Marca','103.50']]), "FREQUENCY");
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.RadioTEA5767_Url_7);
  }
};
 

