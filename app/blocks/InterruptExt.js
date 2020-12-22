
'use strict';

goog.provide('Blockly.Blocks.InterruptExt');

goog.require('Blockly.Blocks');

Blockly.Blocks['interrupts_attach'] = {
    init: function () {
        this.setColour(50);
        this.appendDummyInput().appendField(Blockly.Msg.interrupAttach);
        this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PIN");
        this.appendDummyInput().appendField(Blockly.Msg.interrupMode).appendField(new Blockly.FieldDropdown([['Low', "LOW"], ['Change', "CHANGE"], ['Rising', "RISING"],['High', "HIGH"],['Falling', "FALLING"]]), "MODE");
        this.appendStatementInput("CONTENT");
        this.setInputsInline(true);
        //this.setHelpUrl("http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-preryvanie")
		this.setHelpUrl(Blockly.Msg.interrupts_attach_Url_1);
    }};

Blockly.Blocks['interrupts_detach'] = {
    init: function () {
        this.setColour(50);
        this.appendDummyInput().appendField(Blockly.Msg.interrupDetach);
        this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setHelpUrl("http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-preryvanie")
		this.setHelpUrl(Blockly.Msg.interrupts_attach_Url_2);
    }};

Blockly.Blocks['interrupts'] = {
    init: function () {
        this.setColour(50);
        this.appendDummyInput().appendField(Blockly.Msg.interrupInterrupts);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setHelpUrl("http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-preryvanie")
		this.setHelpUrl(Blockly.Msg.interrupts_attach_Url_3);
    }};

Blockly.Blocks['interrupts_no'] = {
    init: function () {
        this.setColour(50);
        this.appendDummyInput().appendField(Blockly.Msg.interrupNoInterrupts);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setHelpUrl("http://ardublock.ru/index.php?id=struktura-yazyka-ardublock-preryvanie")
		this.setHelpUrl(Blockly.Msg.interrupts_attach_Url_4);
    }};


