
'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');


Blockly.Blocks.loops.HUE = 120;

Blockly.Blocks['while_do'] = {
  init: function() {
    this.setColour(190);
    //this.setHelpUrl('http://ardublock.ru/index.php?id=ru-021');
	this.setHelpUrl(Blockly.Msg.loops_Url_1);
    this.appendStatementInput("STATNAME")
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    this.appendValueInput("CONDI")
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['do_while'] = {
  init: function() {
    this.setColour(190);
    //this.setHelpUrl('http://ardublock.ru/index.php?id=ru-021');
    this.setHelpUrl(Blockly.Msg.loops_Url_2);
	this.appendValueInput("CONDI")
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE);
    this.appendStatementInput("STATNAME")
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['cont_break'] = {
  init: function() {
    this.setColour(190);
    //this.setHelpUrl('http://ardublock.ru/index.php?id=ru-021');
	this.setHelpUrl(Blockly.Msg.loops_Url_3);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Break);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
 }; 
 
 Blockly.Blocks['controls_repeat_y'] = {
  /**
   * Block for repeat n times (external number).
   * @this Blockly.Block
   */
  init: function() {
    //this.setHelpUrl('http://ardublock.ru/index.php?id=ru-021');
    this.setHelpUrl(Blockly.Msg.loops_Url_4);
	this.setColour(190);
    this.interpolateMsg(Blockly.Msg.CONTROLS_REPEAT_TITLE,
                        ['TIMES', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['controls_for'] = {

  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROLS_FOR_TITLE,
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": null
        },
        {
          "type": "input_value",
          "name": "FROM",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "TO",
          "check": "Number",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "BY",
          "check": "Number",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 190,
      "helpUrl": (Blockly.Msg.loops_Url_5)
	 // "helpUrl": http://ardublock.ru/index.php?id=ru-021 
    });
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip('');
  },

  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
 
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  
  customContextMenu: function(options) {
    if (!this.isCollapsed()) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  }
};

Blockly.Blocks['controls_repeat_x'] = {
  
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 190,
      "tooltip": ,
      "helpUrl": (Blockly.Msg.loops_Url_6)
	  //"helpUrl": http://ardublock.ru/index.php?id=ru-021
    });
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  }
};

Blockly.Blocks['cont_continue'] = {
  init: function() {
    this.setColour(190);
    // this.setHelpUrl('http://ardublock.ru/index.php?id=ru-021');
	this.setHelpUrl(Blockly.Msg.loops_Url_7);
    this.appendDummyInput()
        .appendField(Blockly.Msg.continue);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
 }; 
 
 Blockly.Blocks['cont_returnnull'] = {
  init: function() {
    this.setColour(190);
   //  this.setHelpUrl('http://ardublock.ru/index.php?id=ru-021');
    this.setHelpUrl(Blockly.Msg.loops_Url_8);
	this.appendDummyInput()
        .appendField(Blockly.Msg.returnnull);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
 };
 