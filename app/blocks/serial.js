
'use strict';

goog.provide('Blockly.Blocks.serial');

goog.require('Blockly.Blocks');



 
 Blockly.Blocks['serial_init'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-serial-monitor-porta'),
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendDummyInput()
	.appendField(Blockly.Msg.SERIAL_Init)
    this.appendDummyInput()
    .appendField(Blockly.Msg.SERIAL_BAUD)
	.appendField(new Blockly.FieldDropdown([['1200', '1200'],['2400', '2400'],['4800', '4800'],['9600', '9600'],['19200', '19200'],['38400', '38400'],['57600', '57600'],['115200', '115200']]), "PINBAUDIOS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.serialcomarduino_Url_1);
  }
};

Blockly.Blocks['serial_printfor'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-serial-monitor-porta'),
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
        .appendTitle(Blockly.Msg.Serial_Print_Format)
     	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.Serial_Print_ForDecimal, "DEC"],[Blockly.Msg.Serial_Print_ForHexa, "HEX"],[Blockly.Msg.Serial_Print_ForBin, "BIN"],[Blockly.Msg.Serial_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.serialcomarduino_Url_1);
  }
};

Blockly.Blocks['serial_read'] = {
	//helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-serial-monitor-porta'),
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial_read);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.serialcomarduino_Url_1);
  }
};

Blockly.Blocks['serial_available'] = {
	//helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-serial-monitor-porta'),
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial_avai);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.serialcomarduino_Url_1);
  }
};

Blockly.Blocks['serial_print'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-serial-monitor-porta'),
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.Serial_Print);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.serialcomarduino_Url_1);
  }
};

Blockly.Blocks['serial_write'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-serial-monitor-porta'),
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.Msg.Serial_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.serialcomarduino_Url_1);
  }
};


//Blockly.Blocks['serial_write_out'] = {
//  helpUrl: '',
//  init: function() {
//    this.setHelpUrl('');
//    this.setColour(20);
//	this.appendDummyInput()
//	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
//    this.appendValueInput("valeur")
//        .appendField(Blockly.Msg.Serial_write_out);
//    this.setInputsInline(true);
//    this.setOutput(true, "Number");
//    this.setTooltip('');
//  }
//};

Blockly.Blocks['serial_flush'] = {
	//helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-serial-monitor-porta'),
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial_flush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.serialcomarduino_Url_1);
  }
};

Blockly.Blocks['serial_printL'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-serial-monitor-porta'),
  init: function() {
    this.setColour(170);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Serial.png", 21, 18))
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.Serial_PrintL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.serialcomarduino_Url_1);
  }
};
