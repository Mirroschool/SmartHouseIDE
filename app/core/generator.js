 
'use strict';

goog.provide('Blockly.Generator');

goog.require('Blockly.Block');
goog.require('goog.asserts');


 
Blockly.Generator = function(name) {
  this.name_ = name;
  this.FUNCTION_NAME_PLACEHOLDER_REGEXP_ =
      new RegExp(this.FUNCTION_NAME_PLACEHOLDER_, 'g');
};

 
Blockly.Generator.NAME_TYPE = 'generated_function';

 
Blockly.Generator.prototype.INFINITE_LOOP_TRAP = null;

 
Blockly.Generator.prototype.STATEMENT_PREFIX = null;

 
Blockly.Generator.prototype.workspaceToCode = function(workspace) {
  if (!workspace) {
    // Backwards compatability from before there could be multiple workspaces.
    console.warn('No workspace specified in workspaceToCode call.  Guessing.');
    workspace = Blockly.getMainWorkspace();
  }
  var code = [];
  this.init(workspace);
  var blocks = workspace.getTopBlocks(true);
  for (var x = 0, block; block = blocks[x]; x++) {
    var line = this.blockToCode(block);
    if (goog.isArray(line)) {
      // Value blocks return tuples of code and operator order.
      // Top-level blocks don't care about operator order.
      line = line[0];
    }
    if (line) {
      if (block.outputConnection && this.scrubNakedValue) {
        // This block is a naked value.  Ask the language's code generator if
        // it wants to append a semicolon, or something.
        line = this.scrubNakedValue(line);
      }
      code.push(line);
    }
  }
  code = code.join('\n');  // Blank line between each section.
  code = this.finish(code);
  // Final scrubbing of whitespace.
  code = code.replace(/^\s+\n/, '');
  code = code.replace(/\n\s+$/, '\n');
  code = code.replace(/[ \t]+\n/g, '\n');
  return code;
};

// The following are some helpful functions which can be used by multiple
// languages.

 
Blockly.Generator.prototype.prefixLines = function(text, prefix) {
  return prefix + text.replace(/\n(.)/g, '\n' + prefix + '$1');
};

 
Blockly.Generator.prototype.allNestedComments = function(block) {
  var comments = [];
  var blocks = block.getDescendants();
  for (var x = 0; x < blocks.length; x++) {
    var comment = blocks[x].getCommentText();
    if (comment) {
      comments.push(comment);
    }
  }
  // Append an empty string to create a trailing line break when joined.
  if (comments.length) {
    comments.push('');
  }
  return comments.join('\n');
};

 
Blockly.Generator.prototype.blockToCode = function(block) {
  if (!block) {
    return '';
  }
  if (block.disabled) {
    // Skip past this block if it is disabled.
    return this.blockToCode(block.getNextBlock());
  }

  var func = this[block.type];
  goog.asserts.assertFunction(func,
      'Language "%s" does not know how to generate code for block type "%s".',
      this.name_, block.type);
  // First argument to func.call is the value of 'this' in the generator.
  // Prior to 24 September 2013 'this' was the only way to access the block.
  // The current prefered method of accessing the block is through the second
  // argument to func.call, which becomes the first parameter to the generator.
  var code = func.call(block, block);
  if (goog.isArray(code)) {
    // Value blocks return tuples of code and operator order.
    return [this.scrub_(block, code[0]), code[1]];
  } else if (goog.isString(code)) {
    if (this.STATEMENT_PREFIX) {
      code = this.STATEMENT_PREFIX.replace(/%1/g, '\'' + block.id + '\'') +
          code;
    }
    return this.scrub_(block, code);
  } else if (code === null) {
    // Block has handled code generation itself.
    return '';
  } else {
    goog.asserts.fail('Invalid code generated: %s', code);
  }
};

 
Blockly.Generator.prototype.valueToCode = function(block, name, order) {
  if (isNaN(order)) {
    goog.asserts.fail('Expecting valid order from block "%s".', block.type);
  }
  var targetBlock = block.getInputTargetBlock(name);
  if (!targetBlock) {
    return '';
  }
  var tuple = this.blockToCode(targetBlock);
  if (tuple === '') {
    // Disabled block.
    return '';
  }
  // Value blocks must return code and order of operations info.
  // Statement blocks must only return code.
  goog.asserts.assertArray(tuple,
      'Expecting tuple from value block "%s".', targetBlock.type);
  var code = tuple[0];
  var innerOrder = tuple[1];
  if (isNaN(innerOrder)) {
    goog.asserts.fail('Expecting valid order from value block "%s".',
        targetBlock.type);
  }
  if (code && order <= innerOrder) {
    if (order == innerOrder && (order == 0 || order == 99)) {
      // Don't generate parens around NONE-NONE and ATOMIC-ATOMIC pairs.
      // 0 is the atomic order, 99 is the none order.  No parentheses needed.
      // In all known languages multiple such code blocks are not order
      // sensitive.  In fact in Python ('a' 'b') 'c' would fail.
    } else {
      // The operators outside this code are stonger than the operators
      // inside this code.  To prevent the code from being pulled apart,
      // wrap the code in parentheses.
      // Technically, this should be handled on a language-by-language basis.
      // However all known (sane) languages use parentheses for grouping.
      code = '(' + code + ')';
    }
  }
  return code;
};

 
Blockly.Generator.prototype.statementToCode = function(block, name) {
  var targetBlock = block.getInputTargetBlock(name);
  var code = this.blockToCode(targetBlock);
  // Value blocks must return code and order of operations info.
  // Statement blocks must only return code.
  goog.asserts.assertString(code,
      'Expecting code from statement block "%s".',
      targetBlock && targetBlock.type);
  if (code) {
    code = this.prefixLines(/** @type {string} */ (code), this.INDENT);
  }
  return code;
};

 
Blockly.Generator.prototype.addLoopTrap = function(branch, id) {
  if (this.INFINITE_LOOP_TRAP) {
    branch = this.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + id + '\'') + branch;
  }
  if (this.STATEMENT_PREFIX) {
    branch += this.prefixLines(this.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + id + '\''), this.INDENT);
  }
  return branch;
};

 
Blockly.Generator.prototype.INDENT = '  ';

 
Blockly.Generator.prototype.RESERVED_WORDS_ = '';

 
Blockly.Generator.prototype.addReservedWords = function(words) {
  this.RESERVED_WORDS_ += words + ',';
};

 
Blockly.Generator.prototype.FUNCTION_NAME_PLACEHOLDER_ = '{leCUI8hutHZI4480Dc}';

 
Blockly.Generator.prototype.provideFunction_ = function(desiredName, code) {
  if (!this.definitions_[desiredName]) {
    var functionName =
        this.variableDB_.getDistinctName(desiredName, this.NAME_TYPE);
    this.functionNames_[desiredName] = functionName;
    this.definitions_[desiredName] = code.join('\n').replace(
        this.FUNCTION_NAME_PLACEHOLDER_REGEXP_, functionName);
  }
  return this.functionNames_[desiredName];
};


 
Blockly.Generator.prototype.getUnconnectedBlock = function() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  for (var i = 0, block; block = blocks[i]; i++) {
    var connections = block.getConnections_(true);
    for (var j = 0, conn; conn = connections[j]; j++) {
      if (!conn.sourceBlock_ ||
          (conn.type == Blockly.INPUT_VALUE ||
           conn.type == Blockly.OUTPUT_VALUE) && !conn.targetConnection) {
        return block;
      }
    }
  }
  return null;
};


 
Blockly.Generator.prototype.getBlockWithWarning = function() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  for (var i = 0, block; block = blocks[i]; i++) {
    if (block.warning) {
      return block;
    }
  }
  return null;
};