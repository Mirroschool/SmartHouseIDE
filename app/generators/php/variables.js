 
'use strict';

goog.provide('Blockly.PHP.variables');

goog.require('Blockly.PHP');


Blockly.PHP['variables_get'] = function(block) {
    // Variable getter.
    var code = Blockly.PHP.variableDB_.getName(block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['variables_set'] = function(block) {
    // Variable setter.
    var argument0 = Blockly.PHP.valueToCode(block, 'VALUE',
            Blockly.PHP.ORDER_ASSIGNMENT) || '0';
    var varName = Blockly.PHP.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return varName + ' = ' + argument0 + ';\n';
};