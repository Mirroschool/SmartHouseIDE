
'use strict';

goog.provide('Blockly.Blocks.motorMRT');

goog.require('Blockly.Blocks');

Blockly.Blocks['motor_run'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-motor-shield-2-a-l298p-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/MotorMRT.png",45,29))
	this.appendDummyInput()
	.appendField(Blockly.Msg.MOTOR_Connector)
	.appendField(new Blockly.FieldDropdown([['ML1'],['MR1'],['ML2'],['MR2']]), "MOTOR_CON");
    this.appendDummyInput()
    .appendField(Blockly.Msg.MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Forward', 'HIGH'],['Backward', 'LOW']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_1);
  }
};

Blockly.Blocks['motor_stop'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-motor-shield-2-a-l298p-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/MotorMRT.png",45,29))
	this.appendDummyInput()
		.appendField(Blockly.Msg.MOTOR_Connector)
		.appendField(new Blockly.FieldDropdown([['ML1'],['MR1'],['ML2'],['MR2']]), "MOTOR_CON");
	this.appendDummyInput()
		.appendField(Blockly.Msg.MOTOR_Stop)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_2);
  }
};

 





Blockly.Blocks['l298motor_run'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l293d-l298n-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/l298.png",45,29))
	this.appendDummyInput()
	.appendField(Blockly.Msg.l298MOTOR_Connector)
	.appendField(new Blockly.FieldDropdown([['ML'],['MR']]), "MOTOR_CON");
    this.appendDummyInput()
    .appendField(Blockly.Msg.l298MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Forward', '1'],['Backward', '0']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l298MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_3);
  }
};

Blockly.Blocks['l298motor_stop'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l293d-l298n-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/l298.png",45,29))
	this.appendDummyInput()
		.appendField(Blockly.Msg.l298MOTOR_Connector)
		.appendField(new Blockly.FieldDropdown([['ML'],['MR']]), "MOTOR_CON");
	this.appendDummyInput()
		.appendField(Blockly.Msg.l298MOTOR_Stop)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_4);
  }
};


Blockly.Blocks['l298nmotor_run'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l293d-l298n-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/l298n2.png",45,29))
	this.appendDummyInput()
	.appendField(Blockly.Msg.MOTOR_Connector)
	.appendField(new Blockly.FieldDropdown([['MotorA'],['MotorB']]), "MOTOR_CON");
    this.appendDummyInput()
    .appendField(Blockly.Msg.l298MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Forward', '1'],['Backward', '0']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l298MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_7);
  }
};

Blockly.Blocks['l298nmotor_stop'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l293d-l298n-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/l298n2.png",45,29))
	this.appendDummyInput()
		.appendField(Blockly.Msg.MOTOR_Connector)
		.appendField(new Blockly.FieldDropdown([['MotorA'],['MotorB']]), "MOTOR_CON");
	this.appendDummyInput()
		.appendField(Blockly.Msg.l298MOTOR_Stop)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_7);
  }
};


Blockly.Blocks['l298nmotor_runp'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l293d-l298n-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/l298pn.png",45,29))
	this.appendDummyInput()
	.appendField(Blockly.Msg.MOTOR_Connector)
	.appendField(new Blockly.FieldDropdown([['MotorA'],['MotorB']]), "MOTOR_CON");
    this.appendDummyInput()
    .appendField(Blockly.Msg.l298MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Forward', '1'],['Backward', '0']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l298MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_8);
  }
};

Blockly.Blocks['l298nmotor_stopp'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l293d-l298n-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/l298pn.png",45,29))
	this.appendDummyInput()
		.appendField(Blockly.Msg.MOTOR_Connector)
		.appendField(new Blockly.FieldDropdown([['MotorA'],['MotorB']]), "MOTOR_CON");
	this.appendDummyInput()
		.appendField(Blockly.Msg.l298MOTOR_Stop)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_8);
  }
};


Blockly.Blocks['l9110motor_run'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l9110s-dc-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/l9110.png",45,29))
	this.appendDummyInput()
	.appendField(Blockly.Msg.l9110MOTOR_Connector)
	.appendField(new Blockly.FieldDropdown([['MotorA'],['MotorB']]), "MOTOR_CON");
    this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Forward', '1'],['Backward', '0']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l9110MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_5);
  }
};

Blockly.Blocks['l9110motor_stop'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l9110s-dc-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/l9110.png",45,29))
	this.appendDummyInput()
		.appendField(Blockly.Msg.l9110MOTOR_Connector)
		.appendField(new Blockly.FieldDropdown([['MotorA'],['MotorB']]), "MOTOR_CON");
	this.appendDummyInput()
		.appendField(Blockly.Msg.l9110MOTOR_Stop)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_run_Url_6);
  }
};

Blockly.Blocks['motor_autoR'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l9110s-dc-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/MotorMRT111.png",45,29))

	this.appendDummyInput()
		.appendField('RM HN')
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RM1")
	this.appendDummyInput()
		.appendField('EN (pwm)')
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RM2")
		
    this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Forward', '1'],['Backward', '0']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l9110MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_auto);
  }
};
Blockly.Blocks['motor_autoL'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l9110s-dc-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/MotorMRT111.png",45,29))

	this.appendDummyInput()
		.appendField('LM HN')
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RM1")
	this.appendDummyInput()
		.appendField('EN (pwm)')
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RM2")
		
    this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Forward', '1'],['Backward', '0']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l9110MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_auto);
  }
};

Blockly.Blocks['motor_auto1'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l9110s-dc-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Motor293.png",45,29))

	this.appendDummyInput()
		.appendField('MR1(pwm)')
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RM1")
	this.appendDummyInput()
		.appendField('MR2(pwm)')
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RM2")
		
    this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Forward', '1'],['Backward', '0']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l9110MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_auto);
  }
};

Blockly.Blocks['motor_auto2'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-l9110s-dc-2-motora'),
  init: function() {
    this.setColour(80);
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage("images/Motor293.png",45,29))

	this.appendDummyInput()
		.appendField('ML1(pwm)')
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RM1")
	this.appendDummyInput()
		.appendField('ML2(pwm)')
        .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RM2")
		
    this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTOR_Direction)
	.appendField(new Blockly.FieldDropdown([['Forward', '1'],['Backward', '0']]), "MOTOR_DIR");
	 this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l9110MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.motor_auto);
  }
};