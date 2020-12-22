
 
'use strict';

goog.provide('Blockly.Blocks.leonardo');

goog.require('Blockly.Blocks');


Blockly.Blocks['leonardo1'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/maus1.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_1)
		 
	this.appendValueInput("Sensor1", 'Number')
	.appendField(Blockly.Msg.leonardo_url_2)
        .setCheck('Number');
		
	this.appendValueInput("Sensor2", 'Number')
	.appendField(Blockly.Msg.leonardo_url_3)
        .setCheck('Number');
    //this.setOutput(true, 'number');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};

Blockly.Blocks['leonardo2'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/maus.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_4)
	.appendField(new Blockly.FieldDropdown([['LEFT', 'MOUSE_LEFT'],['RIGHT', 'MOUSE_RIGHT'],['MIDDLE', 'MOUSE_MIDDLE']]), "maus_DIR");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};
 
 Blockly.Blocks['leonardo3'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/maus.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_5)
	.appendField(new Blockly.FieldDropdown([['LEFT', 'MOUSE_LEFT'],['RIGHT', 'MOUSE_RIGHT'],['MIDDLE', 'MOUSE_MIDDLE']]), "maus_DIR");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};

Blockly.Blocks['leonardo4'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/maus.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_6)
	.appendField(new Blockly.FieldDropdown([['LEFT', 'MOUSE_LEFT'],['RIGHT', 'MOUSE_RIGHT'],['MIDDLE', 'MOUSE_MIDDLE']]), "maus_DIR");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};
  
Blockly.Blocks['leonardo5'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/klay.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_7)
	.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['0', '0'],['q', 'q'],['w', 'w'],['e', 'e'],['r', 'r'],['t', 't'],['y', 'y'],['u', 'u'],['i', 'i'],['o', 'o'],['p', 'p'],['a', 'a'],['s', 's'],['d', 'd'],['f', 'f'],['g', 'g'],['h', 'h'],['j', 'j'],['k', 'k'],['l', 'l'],['z', 'z'],['x', 'x'],['c', 'c'],['v', 'v'],['b', 'b'],['n', 'n'],['m', 'm']]), "maus_DIR");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};

Blockly.Blocks['leonardo6'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/klay.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_8)
	.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['0', '0'],['q', 'q'],['w', 'w'],['e', 'e'],['r', 'r'],['t', 't'],['y', 'y'],['u', 'u'],['i', 'i'],['o', 'o'],['p', 'p'],['a', 'a'],['s', 's'],['d', 'd'],['f', 'f'],['g', 'g'],['h', 'h'],['j', 'j'],['k', 'k'],['l', 'l'],['z', 'z'],['x', 'x'],['c', 'c'],['v', 'v'],['b', 'b'],['n', 'n'],['m', 'm']]), "maus_DIR");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};

Blockly.Blocks['leonardo7'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/klay.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_9)
	.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['0', '0'],['q', 'q'],['w', 'w'],['e', 'e'],['r', 'r'],['t', 't'],['y', 'y'],['u', 'u'],['i', 'i'],['o', 'o'],['p', 'p'],['a', 'a'],['s', 's'],['d', 'd'],['f', 'f'],['g', 'g'],['h', 'h'],['j', 'j'],['k', 'k'],['l', 'l'],['z', 'z'],['x', 'x'],['c', 'c'],['v', 'v'],['b', 'b'],['n', 'n'],['m', 'm']]), "maus_DIR");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};

Blockly.Blocks['leonardo8'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/klay.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_10)
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};

Blockly.Blocks['leonardo9'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/klay.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_11)
	.appendField(new Blockly.FieldDropdown([['LEFT CTRL', 'KEY_LEFT_CTRL'],['LEFT SHIFT', 'KEY_LEFT_SHIFT'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT GUI', 'KEY_LEFT_GUI'],['RIGHT CTRL', 'KEY_RIGHT_CTRL'],['RIGHT SHIFT', 'KEY_RIGHT_SHIFT'],['RIGHT ALT', 'KEY_RIGHT_ALT'],['RIGHT GUI', 'KEY_RIGHT_GUI'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT ALT', 'KEY_LEFT_ALT'],['UP ARROW', 'KEY_UP_ARROW'],['DOWN ARROW', 'KEY_DOWN_ARROW'],['LEFT ARROW', 'KEY_LEFT_ARROW'],['RIGHT ARROW', 'KEY_RIGHT_ARROW'],['BACKSPACE', 'KEY_BACKSPACE'],['TAB', 'KEY_TAB'],['RETURN', 'KEY_RETURN'],['ESC', 'KEY_ESC'],['ENTER', 'KEY_INSERT'],['DELETE', 'KEY_DELETE'],['PAGE UP', 'KEY_PAGE_UP'],['PAGE DOWN', 'KEY_PAGE_DOWN'],['HOME', 'KEY_HOME'],['END', 'KEY_END'],['CAPS LOCK', 'KEY_CAPS_LOCK'],['F1', 'KEY_F1'],['F2', 'KEY_F2'],['F3', 'KEY_F3'],['F4', 'KEY_F4'],['F5', 'KEY_F5'],['F6', 'KEY_F6'],['F7', 'KEY_F7'],['F8', 'KEY_F8'],['F9', 'KEY_F9'],['F10', 'KEY_F10'],['F11', 'KEY_F11'],['F12', 'KEY_F12']]), "maus_DIR");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};

Blockly.Blocks['leonardo10'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/klay.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_12)
	.appendField(new Blockly.FieldDropdown([['LEFT CTRL', 'KEY_LEFT_CTRL'],['LEFT SHIFT', 'KEY_LEFT_SHIFT'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT GUI', 'KEY_LEFT_GUI'],['RIGHT CTRL', 'KEY_RIGHT_CTRL'],['RIGHT SHIFT', 'KEY_RIGHT_SHIFT'],['RIGHT ALT', 'KEY_RIGHT_ALT'],['RIGHT GUI', 'KEY_RIGHT_GUI'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT ALT', 'KEY_LEFT_ALT'],['UP ARROW', 'KEY_UP_ARROW'],['DOWN ARROW', 'KEY_DOWN_ARROW'],['LEFT ARROW', 'KEY_LEFT_ARROW'],['RIGHT ARROW', 'KEY_RIGHT_ARROW'],['BACKSPACE', 'KEY_BACKSPACE'],['TAB', 'KEY_TAB'],['RETURN', 'KEY_RETURN'],['ESC', 'KEY_ESC'],['ENTER', 'KEY_INSERT'],['DELETE', 'KEY_DELETE'],['PAGE UP', 'KEY_PAGE_UP'],['PAGE DOWN', 'KEY_PAGE_DOWN'],['HOME', 'KEY_HOME'],['END', 'KEY_END'],['CAPS LOCK', 'KEY_CAPS_LOCK'],['F1', 'KEY_F1'],['F2', 'KEY_F2'],['F3', 'KEY_F3'],['F4', 'KEY_F4'],['F5', 'KEY_F5'],['F6', 'KEY_F6'],['F7', 'KEY_F7'],['F8', 'KEY_F8'],['F9', 'KEY_F9'],['F10', 'KEY_F10'],['F11', 'KEY_F11'],['F12', 'KEY_F12']]), "maus_DIR");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};

Blockly.Blocks['leonardo11'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/klay.png",52,38))
	    .appendField(Blockly.Msg.leonardo_url_13)
	.appendField(new Blockly.FieldDropdown([['LEFT CTRL', 'KEY_LEFT_CTRL'],['LEFT SHIFT', 'KEY_LEFT_SHIFT'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT GUI', 'KEY_LEFT_GUI'],['RIGHT CTRL', 'KEY_RIGHT_CTRL'],['RIGHT SHIFT', 'KEY_RIGHT_SHIFT'],['RIGHT ALT', 'KEY_RIGHT_ALT'],['RIGHT GUI', 'KEY_RIGHT_GUI'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT ALT', 'KEY_LEFT_ALT'],['UP ARROW', 'KEY_UP_ARROW'],['DOWN ARROW', 'KEY_DOWN_ARROW'],['LEFT ARROW', 'KEY_LEFT_ARROW'],['RIGHT ARROW', 'KEY_RIGHT_ARROW'],['BACKSPACE', 'KEY_BACKSPACE'],['TAB', 'KEY_TAB'],['RETURN', 'KEY_RETURN'],['ESC', 'KEY_ESC'],['ENTER', 'KEY_INSERT'],['DELETE', 'KEY_DELETE'],['PAGE UP', 'KEY_PAGE_UP'],['PAGE DOWN', 'KEY_PAGE_DOWN'],['HOME', 'KEY_HOME'],['END', 'KEY_END'],['CAPS LOCK', 'KEY_CAPS_LOCK'],['F1', 'KEY_F1'],['F2', 'KEY_F2'],['F3', 'KEY_F3'],['F4', 'KEY_F4'],['F5', 'KEY_F5'],['F6', 'KEY_F6'],['F7', 'KEY_F7'],['F8', 'KEY_F8'],['F9', 'KEY_F9'],['F10', 'KEY_F10'],['F11', 'KEY_F11'],['F12', 'KEY_F12']]), "maus_DIR");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.leonardo_url);
  }
};


  
  
  
  
  
  
  

