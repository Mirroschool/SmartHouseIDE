
'use strict';

goog.provide('Blockly.Input');

// TODO(scr): Fix circular dependencies
// goog.require('Blockly.Block');
goog.require('Blockly.Connection');
goog.require('Blockly.FieldLabel');
goog.require('goog.asserts');



Blockly.Input = function(type, name, block, connection) {
 
  this.type = type;
 
  this.name = name;
  
  this.sourceBlock_ = block;
  
  this.connection = connection;
 
  this.fieldRow = [];
};

Blockly.Input.prototype.align = Blockly.ALIGN_LEFT;

Blockly.Input.prototype.visible_ = true;

Blockly.Input.prototype.appendField = function(field, opt_name) {
  // Empty string, Null or undefined generates no field, unless field is named.
  if (!field && !opt_name) {
    return this;
  }
  // Generate a FieldLabel when given a plain text field.
  if (goog.isString(field)) {
    field = new Blockly.FieldLabel(/** @type {string} */ (field));
  }
  if (this.sourceBlock_.rendered) {
    field.init(this.sourceBlock_);
  }
  field.name = opt_name;

  if (field.prefixField) {
    // Add any prefix.
    this.appendField(field.prefixField);
  }
  // Add the field to the field row.
  this.fieldRow.push(field);
  if (field.suffixField) {
    // Add any suffix.
    this.appendField(field.suffixField);
  }

  if (this.sourceBlock_.rendered) {
    this.sourceBlock_.render();
    // Adding a field will cause the block to change shape.
    this.sourceBlock_.bumpNeighbours_();
  }
  return this;
};

Blockly.Input.prototype.appendTitle = function(field, opt_name) {
  console.warn('Deprecated call to appendTitle, use appendField instead.');
  return this.appendField(field, opt_name);
};

Blockly.Input.prototype.removeField = function(name) {
  for (var i = 0, field; field = this.fieldRow[i]; i++) {
    if (field.name === name) {
      field.dispose();
      this.fieldRow.splice(i, 1);
      if (this.sourceBlock_.rendered) {
        this.sourceBlock_.render();
        // Removing a field will cause the block to change shape.
        this.sourceBlock_.bumpNeighbours_();
      }
      return;
    }
  }
  goog.asserts.fail('Field "%s" not found.', name);
};

Blockly.Input.prototype.isVisible = function() {
  return this.visible_;
};

Blockly.Input.prototype.setVisible = function(visible) {
  var renderList = [];
  if (this.visible_ == visible) {
    return renderList;
  }
  this.visible_ = visible;

  var display = visible ? 'block' : 'none';
  for (var y = 0, field; field = this.fieldRow[y]; y++) {
    field.setVisible(visible);
  }
  if (this.connection) {
    // Has a connection.
    if (visible) {
      renderList = this.connection.unhideAll();
    } else {
      this.connection.hideAll();
    }
    var child = this.connection.targetBlock();
    if (child) {
      child.getSvgRoot().style.display = display;
      if (!visible) {
        child.rendered = false;
      }
    }
  }
  return renderList;
};

Blockly.Input.prototype.setCheck = function(check) {
  if (!this.connection) {
    throw 'This input does not have a connection.';
  }
  this.connection.setCheck(check);
  return this;
};

Blockly.Input.prototype.setAlign = function(align) {
  this.align = align;
  if (this.sourceBlock_.rendered) {
    this.sourceBlock_.render();
  }
  return this;
};

Blockly.Input.prototype.init = function() {
  if (!this.sourceBlock_.workspace.rendered) {
    return;  // Headless blocks don't need fields initialized.
  }
  for (var x = 0; x < this.fieldRow.length; x++) {
    this.fieldRow[x].init(this.sourceBlock_);
  }
};

Blockly.Input.prototype.dispose = function() {
  for (var i = 0, field; field = this.fieldRow[i]; i++) {
    field.dispose();
  }
  if (this.connection) {
    this.connection.dispose();
  }
  this.sourceBlock_ = null;
};
