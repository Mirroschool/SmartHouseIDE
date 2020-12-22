goog.provide('Blockly.Blocks.rotationservo');

goog.require('Blockly.Blocks');

Blockly.Blocks['stepservo_continuos_move'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-servoprivod-sg90-s-step-servo'),
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/Servo.png",41,38))
		.appendField(Blockly.Msg.stepROTSERVO_Servo)
        .appendField(Blockly.Msg.stepPIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	this.appendDummyInput()
		.appendField(Blockly.Msg.stepROTSERVO_Direction)
		.appendField(new Blockly.FieldDropdown([['250', '250'],['200', '200'],['150', '150'],['100', '100'],['90', '90'],['80', '80'],['70', '70'],['60', '60'],['50', '50'],['40', '40'],['30', '30'],['29', '29'],['28', '28'],['27', '27'],['26', '26'],['25', '25'],['24', '24'],['23', '23'],['22', '22'],['21', '21'],['20', '20'],['19', '19'],['18', '18'],['17', '17'],['16', '16'],['15', '15'],['14', '14'],['13', '13'],['12', '12'],['11', '11'],['10', '10'],['9', '9'],['8', '8'],['7', '7'],['6', '6'],['5', '5'],['4', '4'],['3', '3'],['2', '2'],['1', '1']]), "SERVOMOTOR_DIR");
  	this.appendValueInput("SpeedServo")
        .setCheck('Number')
		.appendField(Blockly.Msg.stepROTSERVO_Speed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.stepservo_Url_1);
  }
};


Blockly.Blocks['stepcatServoRot_stop'] = {
  helpUrl: '',
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/Servo.png",41,38))
        .appendField(Blockly.Msg.stepROTSERVO_Servo)
		.appendField(Blockly.Msg.stepPIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	this.appendDummyInput()
		.appendField(Blockly.Msg.stepROTSERVO_Stop)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};