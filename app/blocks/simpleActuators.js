
'use strict';

goog.provide('Blockly.Blocks.advanced');

goog.require('Blockly.Blocks');

Blockly.Blocks['actuator_led'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-rgb-svetodiod'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/led_diode.png",54,38))
        .appendField(Blockly.Msg.LedPin)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
     this.appendDummyInput()
        .appendField(Blockly.Msg.ONOFF)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ACTUATOR_HIGH_LEVEL, "HIGH"], [Blockly.Msg.ACTUATOR_LOW_LEVEL, "LOW"]]), "STATUS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_1);
  }
};

Blockly.Blocks['actuator_ledlevel'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-rgb-svetodiod'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/led_diode.png",46,38))
        .appendField(Blockly.Msg.LedLevelPin)
        .appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PIN");
    this.appendValueInput("NUM", "Number")
        .appendField(Blockly.Msg.LedLevelValue)
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);//, null
    this.setNextStatement(true);//, null
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_2);
  }
};



Blockly.Blocks['actuator_rgbled'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-rgb-svetodiod'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/led_diode.png",46,38))
        .appendField(Blockly.Msg.LedRGBName)
		.appendField(new Blockly.FieldDropdown([['Anode', '1'], ['Cathode', '0']]), "RGB_TYPE");
	this.appendDummyInput()
		.appendField(Blockly.Msg.LedRGBpinR)
		.appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PINRed");
	this.appendDummyInput()
		.appendField(Blockly.Msg.LedRGBpinG)
		.appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PINGreen");
	this.appendDummyInput()
		.appendField(Blockly.Msg.LedRGBpinB)
		.appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PINBlue");
	this.appendDummyInput()
		.appendField(Blockly.Msg.LedRGBcolor)	 
		.appendField(new Blockly.FieldColour('#ff0000'), 'RGBCOLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_3);
  }
};


Blockly.Blocks['actuator_rgbled595'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-rgb-svetodiod'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/led595.png",46,38))
        .appendField('74HC595:')
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'], ['10', '10']]), "RGB_TYPE");
	this.appendDummyInput()
		.appendField('D:')
		.appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PINRed");
	this.appendDummyInput()
		.appendField('L:')
		.appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PINGreen");
	this.appendDummyInput()
		.appendField('C:')
        .appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PINBlue");
	this.appendValueInput("NUM", "Number")
        .appendField(Blockly.Msg.LedPin)
        .setCheck("Number");
	this.appendDummyInput()	
		.appendField(Blockly.Msg.ONOFF)
         .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ACTUATOR_HIGH_LEVEL, "HIGH"], [Blockly.Msg.ACTUATOR_LOW_LEVEL, "LOW"]]), "STATUS");
    
		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuator_rgbled595);
  }
};


Blockly.Blocks['actuator_laser'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-lazernogo-dioda'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/laser.png",34,38))
        .appendField(Blockly.Msg.LaserPin)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
     this.appendDummyInput()
        .appendField(Blockly.Msg.ONOFF)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ACTUATOR_HIGH_LEVEL, "HIGH"], [Blockly.Msg.ACTUATOR_LOW_LEVEL, "LOW"]]), "STATUS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_4);
  }
};

Blockly.Blocks['actuator_rele'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulej-rele'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/rele.png",47,38))
        .appendField(Blockly.Msg.RelePin)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
     this.appendDummyInput()
        .appendField(Blockly.Msg.ONOFF)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ACTUATOR_HIGH_LEVEL, "HIGH"], [Blockly.Msg.ACTUATOR_LOW_LEVEL, "LOW"]]), "STATUS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_5);
  }
};

Blockly.Blocks['actuator_rele2'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-modulej-rele'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/rele2.png",47,38))
        .appendField(Blockly.Msg.RelePini)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
     this.appendDummyInput()
        .appendField(Blockly.Msg.ONOFF)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ACTUATOR_HIGH_LEVEL, "LOW"], [Blockly.Msg.ACTUATOR_LOW_LEVEL, "HIGH"]]), "STATUS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_5);
  }
};

Blockly.Blocks['actuator_tonedure'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-zummer'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/buzzer.png",46,38))
        .appendField(Blockly.Msg.TonePin)
        .appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PIN");
    this.appendValueInput("NUM", "Number")
        .appendField(Blockly.Msg.Frequence)
        .setCheck("Number");
    this.appendValueInput("DUR", "Number")
        .appendField(Blockly.Msg.Duration)
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_6);
  }
};

Blockly.Blocks['actuator_notone'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-zummer'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/buzzer.png",46,38))
        .appendField(Blockly.Msg.NoTonePin)
        .appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_7);
  }
};


Blockly.Blocks['frequency'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-zummer'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/notas.png",62,38))
	    .appendField(Blockly.Msg.Note)
        .appendField(new Blockly.FieldDropdown([['C (do)','C'],['C# (do#)','C#'],['D (re)','D'],['D# (re#)','D#'],['E (mi)','E'],['F (fa)','F'],['F# (fa#)','F#'],['G (sol)','G'],['G# (sol#)','G#'],['A (la)','A'],['A# (la#)','A#'],['B (si)','B']]), "NOTE");
    this.appendDummyInput()
		.appendField(Blockly.Msg.Octave)
		.appendField(new Blockly.FieldDropdown([['2','2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8']]), "OCTAVE")
	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_8);
  }
};

Blockly.Blocks['duration'] = {
 // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-zummer'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/durationNote.png",76,38))
	    //.appendField(Blockly.Msg.Duration)
        .appendField(new Blockly.FieldDropdown([['Double','5'],['Whole','4'],['Half','1'],['Quater','2'],['Eighth','3'],['Sixteenth','6']]), "DURATION");
   	this.setOutput(true, 'Number');
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.actuatormoduli_Url_9);
  }
};







