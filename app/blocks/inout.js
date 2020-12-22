
'use strict';

goog.provide('Blockly.Blocks.inout');

goog.require('Blockly.Blocks');


Blockly.Blocks.colour.HUE = 230;


///
Blockly.Blocks['inout_highlow'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vhody-i-vyhody'),
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH_LEVEL, "HIGH"], [Blockly.Msg.INOUT_LOW_LEVEL, "LOW"]]), 'BOOL');
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.analogdigital_Url_1);
  }
}; 


Blockly.Blocks['inout_digital_read'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vhody-i-vyhody'),
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
		  .appendField(new Blockly.FieldImage("images/Digitalsignal.png",86,43))
	      .appendField(Blockly.Msg.INOUT_DIG_READ)
	      .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.analogdigital_Url_2);
  }
};

Blockly.Blocks['inout_analog_read'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vhody-i-vyhody'),
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/Analogsignal.png",68,45))
        .appendField(Blockly.Msg.INOUT_ANA_READ)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.analogdigital_Url_3);
  }
};

Blockly.Blocks['inout_analog_write'] = {
  init: function() {
    //this.setHelpUrl('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vhody-i-vyhody');
    this.setColour(10);    
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("images/Analogsignal.png",68,45))
        .appendField(Blockly.Msg.INOUT_ANA_WRITE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PIN");
    this.appendValueInput("Value")
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_VALUE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.analogdigital_Url_4);
  }
};

Blockly.Blocks['inout_buildin_led'] = {
   //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vhody-i-vyhody'),
   init: function() {
     this.setColour(10);
     this.appendDummyInput()
	  .appendField(Blockly.Msg.INOUT_BUI_LED)
	  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH_LEVEL, "HIGH"], [Blockly.Msg.INOUT_LOW_LEVEL, "LOW"]]), "STAT");
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip('');
	 this.setHelpUrl(Blockly.Msg.analogdigital_Url_5);
   }
};

Blockly.Blocks['inout_digital_write'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vhody-i-vyhody'),
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Digitalsignal.png",86,43))
	.appendField(Blockly.Msg.INPOUT_DIGITAL_WRITE)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      	.appendField(Blockly.Msg.INOUT_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH_LEVEL, "HIGH"], [Blockly.Msg.INOUT_LOW_LEVEL, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.analogdigital_Url_6);
  }
};



Blockly.Blocks['advanced_pulsein'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vhody-i-vyhody'),
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
                .appendField(Blockly.Msg.PulseIn)
                .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN")
            	.appendField(Blockly.Msg.INOUT_STAT)
                .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH_LEVEL, "HIGH"], [Blockly.Msg.INOUT_LOW_LEVEL, "LOW"]]), "STAT");
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.analogdigital_Url_7);
  }
};


Blockly.Blocks['inout_analog_write_variable'] = {
  init: function() {
    //this.setHelpUrl('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vhody-i-vyhody');
    this.setColour(10);    
    this.appendDummyInput()
	  //  .appendField(new Blockly.FieldImage("images/Analogsignal.png",68,45))
        .appendField(Blockly.Msg.INPOUT_DIGITAL_WRITE)
   // this.appendDummyInput()
    //    .appendField(new Blockly.FieldDropdown(profile.default.analog_write), "PIN");
     this.appendValueInput("Value")
        .setCheck("Number")
    //    .appendField(Blockly.Msg.INOUT_VALUE2);
		
		this.appendDummyInput()
        .appendField(Blockly.Msg.INOUT_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH_LEVEL, "HIGH"], [Blockly.Msg.INOUT_LOW_LEVEL, "LOW"]]), "STATv");
		
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.analogdigital_Url_8);
  }
};


Blockly.Blocks['inout_analog_reference'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-vhody-i-vyhody'),
  init: function() {
    this.setColour(10);
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("images/Analogsignal.png",68,45))
        .appendField('AREF')
		.appendField(new Blockly.FieldDropdown([['DEFAULT', "0"], ['INTERNAL', "1"], ['INTERNAL1V1', "2"], ['INTERNAL2V56', "3"], ['EXTERNAL', "4"]]), "PIN");
        //.appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.inout_analog_reference);
  }
};
