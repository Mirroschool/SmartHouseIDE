
'use strict';

goog.provide('Blockly.Blocks.DFPlayerMP3');

goog.require('Blockly.Blocks');
/*
Blockly.Blocks['DFPplayerMp3_init_ss'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/dfplayer.png",43,38))
        .appendField(Blockly.Msg.MP3_init)
	 this.appendDummyInput()
		.appendField(Blockly.Msg.MP3_TX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN1");
    this.appendDummyInput()
		.appendField(Blockly.Msg.MP3_RX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN2");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};*/

Blockly.Blocks['DFPplayerMp3_init_serial1'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-mp3-pleer'),
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/dfplayer.png",43,38))
        .appendField(Blockly.Msg.MP3_init2)
		.appendField(Blockly.Msg.MP3_init3);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.DFPplayerMp3_Url_1);
  }
};
/*
Blockly.Blocks['DFPplayerMp3_set_equalizator'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_equalizer)
		.appendField(new Blockly.FieldDropdown([['Normal','0'],['Pop','1'],['Rock','2'],['Jazz','3'],['Classic','4'],['Bass','5']]), "MP3_EQ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};*/

Blockly.Blocks['DFPplayerMp3_set_volumen'] = {
   //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-mp3-pleer'),
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_volumen)
	this.appendValueInput("Volumen")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.DFPplayerMp3_Url_2);
  }
};
/*
Blockly.Blocks['DFPplayerMp3_get_values'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_property)
		.appendField(new Blockly.FieldDropdown([['Volumen Level','0'],['Equalizer value','1'],['MP3 status','2']]), "MP3_PROPERTY")
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};*/

Blockly.Blocks['DFPplayerMp3_operation'] = {
   //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-mp3-pleer'),
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_operation)
		.appendField(new Blockly.FieldDropdown([['play','0'],['next','1'],['prev','2'],['pause','3'],['stop','4']]), "MP3_OPERATION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.DFPplayerMp3_Url_3);
  }
};
/*
Blockly.Blocks['DFPplayerMp3_repeatoperation'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_repeatoperation)
		.appendField(new Blockly.FieldDropdown([['Enable repeat one song','1'],['Disable repeat one song','2'],['Enable repeat all songs','3'],['Disable repeat all songs','4']]), "MP3_REPEATOPERATION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};*/

Blockly.Blocks['DFPplayerMp3_playsong'] = {
   //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-mini-mp3-pleer'),
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_playsong)
	this.appendValueInput("Volumen")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.DFPplayerMp3_Url_4);
  }
};
/*
Blockly.Blocks['DFPplayerMp3_playsongdirectiry'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
	this.appendValueInput("Song")
		.appendField(Blockly.Msg.MP3_playsong)
		.setCheck('Number')
	this.appendValueInput("Directory")
		.appendField(Blockly.Msg.MP3_playsongdirectory)
		.setCheck('Number')	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['DFPplayerMp3_repeatsong'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/mp3.png",25,25))
        .appendField(Blockly.Msg.MP3_name)
		.appendField(Blockly.Msg.MP3_repeatsong)
	this.appendValueInput("Song")
		.setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};*/
