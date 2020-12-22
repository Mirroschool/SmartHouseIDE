
 
'use strict';

goog.provide('Blockly.Blocks.genericTime');

goog.require('Blockly.Blocks');

Blockly.Blocks['base_delayms'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vremya'),
  init: function() {
    this.setColour(190);
	this.appendValueInput("DELAY_TIME", 'Number')
		.appendField(new Blockly.FieldImage("images/crono.png",19,20))
        .appendField(Blockly.Msg.DelayMs)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.base_delayms_Url_1);
  }
};

Blockly.Blocks['base_delays'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vremya'),
  init: function() {
     this.setColour(190);
    this.appendValueInput("DELAY_TIME", 'Number')
		.appendField(new Blockly.FieldImage("images/crono.png",19,20))
        .appendField(Blockly.Msg.DelayS)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.base_delayms_Url_2);
  }
};

Blockly.Blocks['base_delaymicros'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vremya'),
  init: function() {
     this.setColour(190);
    this.appendValueInput("DELAY_TIME", 'Number')
		.appendField(new Blockly.FieldImage("images/crono.png",19,20))
        .appendField(Blockly.Msg.DelayMicros)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.base_delayms_Url_3);
  }
};

Blockly.Blocks['micros'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vremya'),
  init: function() {
     this.setColour(190);
      this.appendDummyInput()
		  .appendField(new Blockly.FieldImage("images/crono.png",19,20))
          .appendField(Blockly.Msg.MicroSecondSinceProgramStarted);
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.base_delayms_Url_4);
  }
};

Blockly.Blocks['millis'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vremya'),
  init: function() {
     this.setColour(190);
      this.appendDummyInput()
		  .appendField(new Blockly.FieldImage("images/crono.png",19,20))
          .appendField(Blockly.Msg.SinceProgramStarted);
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.base_delayms_Url_5);
  }
};

Blockly.Blocks['seconds'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vremya'),
  init: function() {
     this.setColour(190);
      this.appendDummyInput()
		  .appendField(new Blockly.FieldImage("images/crono.png",19,20))
          .appendField(Blockly.Msg.SecondSinceProgramStarted);
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.base_delayms_Url_6);
  }
};

Blockly.Blocks['tempo_no_delay'] = {
	init: function() {
		this.setColour(190);
		this.appendValueInput("DELAY_TIME")
			.setCheck("Number")
			.appendField(new Blockly.FieldImage("images/crono.png",19,20))
			.appendField(Blockly.Msg.ARDUINO_BASE_TEMPO1);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ARDUINO_BASE_TEMPO_TIME), "unit")
			.appendField(Blockly.Msg.ARDUINO_BASE_TEMPO2);
		this.appendStatementInput("branch");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
		//this.setHelpUrl('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vremya');
		this.setHelpUrl(Blockly.Msg.base_delayms_Url_7);
	}
};

