 
'use strict';

goog.provide('Blockly.PHP.logic');

goog.require('Blockly.PHP');


Blockly.PHP['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.PHP.valueToCode(block, 'IF' + n,
      Blockly.PHP.ORDER_NONE) || 'false';
  var branch = Blockly.PHP.statementToCode(block, 'DO' + n);
  var code = 'if (' + argument + ') {\n' + branch + '}';
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.PHP.valueToCode(block, 'IF' + n,
        Blockly.PHP.ORDER_NONE) || 'false';
    branch = Blockly.PHP.statementToCode(block, 'DO' + n);
    code += ' else if (' + argument + ') {\n' + branch + '}';
  }
  if (block.elseCount_) {
    branch = Blockly.PHP.statementToCode(block, 'ELSE');
    code += ' else {\n' + branch + '}';
  }
  return code + '\n';
};

Blockly.PHP['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.PHP.ORDER_EQUALITY : Blockly.PHP.ORDER_RELATIONAL;
  var argument0 = Blockly.PHP.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.PHP.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.PHP['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.PHP.ORDER_LOGICAL_AND :
      Blockly.PHP.ORDER_LOGICAL_OR;
  var argument0 = Blockly.PHP.valueToCode(block, 'A', order);
  var argument1 = Blockly.PHP.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.PHP['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.PHP.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.PHP.valueToCode(block, 'BOOL', order) ||
      'true';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.PHP['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.PHP.valueToCode(block, 'IF',
      Blockly.PHP.ORDER_CONDITIONAL) || 'false';
  var value_then = Blockly.PHP.valueToCode(block, 'THEN',
      Blockly.PHP.ORDER_CONDITIONAL) || 'null';
  var value_else = Blockly.PHP.valueToCode(block, 'ELSE',
      Blockly.PHP.ORDER_CONDITIONAL) || 'null';
  var code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.PHP.ORDER_CONDITIONAL];
};
