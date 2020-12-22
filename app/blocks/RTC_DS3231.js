
'use strict';

goog.provide('Blockly.Blocks.RTC_DS3231');
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_RTC_ds3231'] = {
 //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-ds3231-i2c'),
  init: function() {
    this.setColour(190);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rtcds3231.png",51,38))
		.appendField(Blockly.Msg.RTCDS3231_NAME)
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds3231_Url_1);
  }
};


Blockly.Blocks['DateTime_RTC_ds3231'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-ds3231-i2c'),
  init: function() {
    this.setColour(190);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/rtcds3231.png",51,38))
		.appendField(Blockly.Msg.RTCDS3231_RTC)
    this.appendValueInput("DS3231_DAY")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_DAY);
	this.appendValueInput("DS3231_MONTH")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_MONTH);		
	this.appendValueInput("DS3231_YEAR")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_YEAR);		
	this.appendValueInput("DS3231_HOUR")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_HOUR);		
	this.appendValueInput("DS3231_MINUTE")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_MINUTE);		
	this.appendValueInput("DS3231_SECOND")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS3231_SECOND);		
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds3231_Url_1);
  }
};


Blockly.Blocks['order_read_rtc_ds3231'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-ds3231-i2c'),
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
	   .appendField(new Blockly.FieldImage("images/rtcds3231.png",51,38))
        .appendField(Blockly.Msg.RTCDS3231_READ_RTC);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds3231_Url_1);
  }
};

Blockly.Blocks['values_ds3231'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-ds3231-i2c'),
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/rtcds3231.png",51,38))
		.appendField(Blockly.Msg.RTCDS3231_Name2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_YEAR, "0"], [Blockly.Msg.RTCDS3231_MONTH, "1"],[Blockly.Msg.RTCDS3231_DAY, "2"],[Blockly.Msg.RTCDS3231_HOUR, "3"],[Blockly.Msg.RTCDS3231_MINUTE, "4"],[Blockly.Msg.RTCDS3231_SECOND, "5"],[Blockly.Msg.RTCDS3231_DOFWEEK, "6"]]), "OUTPUT_VALUE")
	    .appendField(Blockly.Msg.RTCDS3231_VALUES)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds3231_Url_1);
  }
};

Blockly.Blocks['values_text_ds3231'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-ds3231-i2c'),
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/rtcds3231.png",51,38))
		.appendField(Blockly.Msg.RTCDS3231_Name2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_TEXT_DOFWEEK, "0"], [Blockly.Msg.RTCDS3231_TEXT_MONTH, "1"]]), "OUTPUT_VALUE")
	    //.appendField(Blockly.Msg.RTCDS3231_VALUES)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds3231_Url_1);
  }
};



