
'use strict';

goog.provide('Blockly.Blocks.CameraSerial');

goog.require('Blockly.Blocks');

Blockly.Blocks['Camera_init_ss'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera.png",38,38))
        .appendField(Blockly.Msg.Camera_init)
	 this.appendDummyInput()
		.appendField(Blockly.Msg.Camera_TX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN1");
    this.appendDummyInput()
		.appendField(Blockly.Msg.Camera_RX)
		.appendField(new Blockly.FieldDropdown([['Port2', '15'],['Port3', '16'],['Port4', '14'],['Port10', '9'],['Port11', '11']]), "PIN2");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_init_serial1'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/camera.png",38,38))
        .appendField(Blockly.Msg.Camera_init2)
		.appendField(Blockly.Msg.Camera_init3);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_begin'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
		.appendField(Blockly.Msg.Camera_name)
        .appendField(Blockly.Msg.Camera_Begin)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_Resolution'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
        .appendField(Blockly.Msg.Camera_name)
		.appendField(Blockly.Msg.Camera_Resolution)
		.appendField(new Blockly.FieldDropdown([['640x480','0'],['320x240','17'],['160x120','34']]), "Resolution")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_takepicture'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
		.appendField(Blockly.Msg.Camera_name)
        .appendField(Blockly.Msg.Camera_Takepicture)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_resumevideo'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
		.appendField(Blockly.Msg.Camera_name)
        .appendField(Blockly.Msg.Camera_ResumeVideo)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_SetMotionDetect'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
        .appendField(Blockly.Msg.Camera_name)
		.appendField(Blockly.Msg.Camera_Motion)
		.appendField(new Blockly.FieldDropdown([['Disabled','false'],['Enabled','true']]), "Status")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_OutputTV'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
        .appendField(Blockly.Msg.Camera_name)
		.appendField(Blockly.Msg.Camera_ActivateTV)
		.appendField(new Blockly.FieldDropdown([['Disabled','0'],['Enabled','1']]), "Status")
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


Blockly.Blocks['Camera_SizePicture'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
        .appendField(Blockly.Msg.Camera_name)
		.appendField(Blockly.Msg.Camera_SizePicture)
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_MotionDetected'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
        .appendField(Blockly.Msg.Camera_name)
		.appendField(Blockly.Msg.Camera_MotionDetected)
	this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_Readbytes'] = {
  helpUrl: '',
  init: function() {
	this.setColour(220);
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
        .appendField(Blockly.Msg.Camera_name)
		.appendField(Blockly.Msg.Camera_Read)
	this.appendValueInput("NUMBYTES", "Number")
		.appendField(Blockly.Msg.Camera_Read2)
        .setCheck("Number");	
	this.setInputsInline(true);
	this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['Camera_SavePicture'] = {
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/cameraicon.png",31,25))
		.appendField(Blockly.Msg.Camera_name)
        .appendField(Blockly.Msg.Camera_SaveFile);
	this.appendValueInput("filename")
        .setCheck('String')
	this.appendDummyInput()
		.appendField(Blockly.Msg.Camera_SaveFile2)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


