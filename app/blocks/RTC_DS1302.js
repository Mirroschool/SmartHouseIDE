
 
'use strict';

goog.provide('Blockly.Blocks.RTC_DS1302');
goog.require('Blockly.Blocks');

Blockly.Blocks['Init_RTC_ds1302'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-rtc-ds1302'),
  init: function() {
    this.setColour(190);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ds1302.png",53,38))
		.appendField(Blockly.Msg.RTCDS1302_NAME)
	this.appendDummyInput()
        .appendField(Blockly.Msg.RTCDS1302_RST)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RST")
	this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS1302_DAT)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_DAT")
	this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS1302_CLK)
		.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CLK")
   	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds1302_Url_1);
  }
};


Blockly.Blocks['DateTime_RTC_ds1302'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-rtc-ds1302'),
  init: function() {
    this.setColour(190);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/ds1302.png",53,38))
		.appendField(Blockly.Msg.RTCDS1302_RTC)
    this.appendValueInput("DS1302_DAY")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS1302_DAY);
	this.appendValueInput("DS1302_MONTH")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS1302_MONTH);		
	this.appendValueInput("DS1302_YEAR")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS1302_YEAR);		
	this.appendValueInput("DS1302_HOUR")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS1302_HOUR);		
	this.appendValueInput("DS1302_MINUTE")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS1302_MINUTE);		
	this.appendValueInput("DS1302_SECOND")
			.setCheck("Number")
			.appendField(Blockly.Msg.RTCDS1302_SECOND);		
	 this.appendDummyInput()		
				.appendField(new Blockly.FieldDropdown([['Monday', "1"], ['Tuesday', "2"],['Wednesday', "3"],['Thursday', "4"],['Friday', "5"],['Saturday', "6"],['Sunday', "7"],]), "OUTPUT_VALUE")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds1302_Url_1);
  }
};


Blockly.Blocks['order_read_rtc_ds1302'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-rtc-ds1302'),
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/ds1302.png",53,38))
        .appendField(Blockly.Msg.RTCDS1302_READ_RTC);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds1302_Url_1);
  }
};

Blockly.Blocks['values_ds1302'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-rtc-ds1302'),
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ds1302.png",53,38))
		.appendField(Blockly.Msg.RTCDS1302_Name2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS1302_YEAR, "0"], [Blockly.Msg.RTCDS1302_MONTH, "1"],[Blockly.Msg.RTCDS1302_DAY, "2"],[Blockly.Msg.RTCDS1302_HOUR, "3"],[Blockly.Msg.RTCDS1302_MINUTE, "4"],[Blockly.Msg.RTCDS1302_SECOND, "5"]]), "OUTPUT_VALUE")
	    .appendField(Blockly.Msg.RTCDS1302_VALUES)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds1302_Url_1);
  }
};

Blockly.Blocks['values_text_ds1302'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulya-realnogo-vremeni-rtc-ds1302'),
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/ds1302.png",53,38))
		.appendField(Blockly.Msg.RTCDS1302_Name2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS1302_TEXT_DOFWEEK, "0"], [Blockly.Msg.RTCDS1302_TEXT_MONTH, "1"],[Blockly.Msg.RTCDS1302_TEXT_DATE, "2"],[Blockly.Msg.RTCDS1302_TEXT_TIME, "3"]]), "OUTPUT_VALUE")
    this.setOutput(true, 'String');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ds1302_Url_1);
  }
};

