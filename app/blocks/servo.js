goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');

Blockly.Blocks['servo_move'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-servoprivod-sg90-s-step-servo'),
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/Servo.png",50,38))
		.appendField(Blockly.Msg.SERVO_Servo)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
  //  this.appendValueInput("DEGREE", 'Number')
 //       .setCheck('Number')
 //       .setAlign(Blockly.ALIGN_RIGHT)
  //      .appendField(Blockly.Msg.Degree);
		
		this.appendDummyInput()
		.appendField(Blockly.Msg.Degree)
		.appendField(new Blockly.FieldAngle(180), "DEGREE");
		
    this.appendValueInput("DELAY_TIME", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Delay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.servo_move_Url_1);
  }
};

Blockly.Blocks['servo_movea'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-servoprivod-sg90-s-step-servo'),
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/Servo.png",50,38))
		.appendField(Blockly.Msg.SERVO_Servo)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
  //  this.appendValueInput("DEGREE", 'Number')
 //       .setCheck('Number')
 //       .setAlign(Blockly.ALIGN_RIGHT)
  //      .appendField(Blockly.Msg.Degree);
		
		this.appendDummyInput()
		.appendField(Blockly.Msg.Degree)
		//.appendField(new Blockly.FieldAngle(180), "DEGREE");
		this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number');
		
		
    this.appendValueInput("DELAY_TIME", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Delay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.servo_move_Url_1);
  }
};

Blockly.Blocks['servo_moveb'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-servoprivod-sg90-s-step-servo'),
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/Servo.png",50,38))
		.appendField(Blockly.Msg.SERVO_Servo)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
  //  this.appendValueInput("DEGREE", 'Number')
 //       .setCheck('Number')
 //       .setAlign(Blockly.ALIGN_RIGHT)
  //      .appendField(Blockly.Msg.Degree);
		
		this.appendDummyInput()
		.appendField(Blockly.Msg.Degree)
		//.appendField(new Blockly.FieldAngle(180), "DEGREE");
		this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number');
		
		
   // this.appendValueInput("DELAY_TIME", 'Number')
   //     .setCheck('Number')
   //     .setAlign(Blockly.ALIGN_RIGHT)
   //     .appendField(Blockly.Msg.Delay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.servo_move_Url_1);
  }
};

Blockly.Blocks['servo_read_degrees'] = {
  // helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-servoprivod-sg90-s-step-servo'),
  init: function() {
	this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/Servo.png",50,38))
        .appendField(Blockly.Msg.SERVO_Servo)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_ReadDegree);
    this.setOutput(true, "Number");
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.servo_move_Url_1);
  }
};


Blockly.Blocks['servo_attached'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-servoprivod-sg90-s-step-servo'),
  init: function() {
	this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/Servo.png",50,38))
        .appendField(Blockly.Msg.SERVO_Attached)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.servo_move_Url_1);
  }
};

Blockly.Blocks['servo_detach'] = {
 //  helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-servoprivod-sg90-s-step-servo'),
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/Servo.png",50,38))
        .appendField(Blockly.Msg.SERVO_Detach)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.servo_move_Url_1);
  }
};



Blockly.Blocks['servo_movebnn'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-servoprivod-sg90-s-step-servo'),
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/servonn.png",50,38))
		.appendField(Blockly.Msg.SERVO_Servo)
        .appendField(new Blockly.FieldTextInput("0x40"), "NAME")
        .appendField(Blockly.Msg.PIN)
		.appendField(new Blockly.FieldDropdown([['0','0'],['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13'],['14','14'],['15','15']]), "PIN");
       // .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
  //  this.appendValueInput("DEGREE", 'Number')
 //       .setCheck('Number')
 //       .setAlign(Blockly.ALIGN_RIGHT)
  //      .appendField(Blockly.Msg.Degree);
		
		this.appendDummyInput()
		.appendField(Blockly.Msg.Degree)
		//.appendField(new Blockly.FieldAngle(180), "DEGREE");
		this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number');
		
		
   // this.appendValueInput("DELAY_TIME", 'Number')
   //     .setCheck('Number')
   //     .setAlign(Blockly.ALIGN_RIGHT)
   //     .appendField(Blockly.Msg.Delay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.servo_move_Url_1);
  }
};