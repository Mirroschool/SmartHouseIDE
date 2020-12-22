
'use strict';

goog.provide('Blockly.Blocks.SD');

goog.require('Blockly.Blocks');


Blockly.Blocks['sd_init'] = {
   init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd.png",41,38))
        .appendField(Blockly.Msg.SD_init)
		.appendField(Blockly.Msg.SD_init2);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.SD_PIN_CS)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CS")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd');
	this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};

Blockly.Blocks['sd_mkdir'] = {
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
        .appendField(Blockly.Msg.SD_Makedir);
    this.appendValueInput("dirname")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd');
	this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};

Blockly.Blocks['sd_removedir'] = {
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
        .appendField(Blockly.Msg.SD_Removedir);
    this.appendValueInput("dirname")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd');
   this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};

Blockly.Blocks['sd_removefile'] = {
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
        .appendField(Blockly.Msg.SD_removefile);
    this.appendValueInput("filename")
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  //  this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd');
  this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};

Blockly.Blocks['sd_fileexists'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd'),
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
	    .appendField(Blockly.Msg.SD_fileexist)
	this.appendValueInput("filename")
        .setCheck('String')
		.appendField(Blockly.Msg.SD_fileexist2)
	this.setOutput(true, 'Boolean');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};

Blockly.Blocks['sd_printfile'] = {
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
        .appendField(Blockly.Msg.SD_print);
	this.appendValueInput("texttoprint")
        .setCheck('String')	
	this.appendValueInput("filename")
		.appendField(Blockly.Msg.SD_infile)
        .setCheck('String')
	this.appendDummyInput()
	    .appendField(Blockly.Msg.SD_linefeed)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd');
	this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};

Blockly.Blocks['sd_filesize'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd'),
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
	    .appendField(Blockly.Msg.SD_size)
	this.appendValueInput("filename")
        .setCheck('String')
	this.setOutput(true, 'Number');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};

Blockly.Blocks['sd_writefile'] = {
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
        .appendField(Blockly.Msg.SD_write);
	this.appendValueInput("variable")	
	this.appendValueInput("filename")
		.appendField(Blockly.Msg.SD_infile)
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd');
	this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};


Blockly.Blocks['sd_writefile2'] = {
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
        .appendField(Blockly.Msg.SD_write2);
	this.appendValueInput("variable")	
	this.appendValueInput("filename")
		.appendField(Blockly.Msg.SD_infile)
        .setCheck('String')
	this.appendValueInput("numberbytes")
		.appendField(Blockly.Msg.SD_lenght)
        .setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd');
   this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};





Blockly.Blocks['sd_filereadbyte'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd'),
  init: function() {
    this.setColour(100);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
	    .appendField(Blockly.Msg.SD_readbyte)
	this.appendValueInput("position")
        .setCheck('Number')		
	this.appendValueInput("filename")
		.appendField(Blockly.Msg.SD_infile)
        .setCheck('String')
	this.setOutput(true, 'Number');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};

Blockly.Blocks['sd_filereadall'] = {
  init: function() {
    this.setColour(100);
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-plata-dlya-hraneniya-na-sd');
	this.setInputsInline(true);
	this.appendValueInput("filename")
		.appendField(new Blockly.FieldImage("images/microsd_card.png",34,25))
		.appendField(Blockly.Msg.SD_name)
	    .appendField(Blockly.Msg.SD_readbytes)
        .setCheck('String')
	this.appendValueInput("variable")
		.appendField(Blockly.Msg.SD_storereadbyte)
	this.appendDummyInput()
		.appendField(Blockly.Msg.SD_storereadbyte2)
    this.appendStatementInput("STATNAME")
        .appendField(Blockly.Msg.SD_do);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.Blocks_SD_Url_1);
  }
};

