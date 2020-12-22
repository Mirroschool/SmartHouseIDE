
'use strict';

goog.provide('Blockly.FieldCheckbox');

goog.require('Blockly.Field');



Blockly.FieldCheckbox = function(state, opt_changeHandler) {
  Blockly.FieldCheckbox.superClass_.constructor.call(this, '');

  this.setChangeHandler(opt_changeHandler);
  // Set the initial state.
  this.setValue(state);
};
goog.inherits(Blockly.FieldCheckbox, Blockly.Field);


Blockly.FieldCheckbox.prototype.CURSOR = 'default';


Blockly.FieldCheckbox.prototype.init = function(block) {
  if (this.sourceBlock_) {
    // Checkbox has already been initialized once.
    return;
  }
  Blockly.FieldCheckbox.superClass_.init.call(this, block);
  // The checkbox doesn't use the inherited text element.
  // Instead it uses a custom checkmark element that is either visible or not.
  this.checkElement_ = Blockly.createSvgElement('text',
      {'class': 'blocklyText', 'x': -3, 'y': 14}, this.fieldGroup_);
  var textNode = document.createTextNode('\u2713');
  this.checkElement_.appendChild(textNode);
  this.checkElement_.style.display = this.state_ ? 'block' : 'none';
};


Blockly.FieldCheckbox.prototype.getValue = function() {
  return String(this.state_).toUpperCase();
};


Blockly.FieldCheckbox.prototype.setValue = function(strBool) {
  var newState = (strBool == 'TRUE');
  if (this.state_ !== newState) {
    this.state_ = newState;
    if (this.checkElement_) {
      this.checkElement_.style.display = newState ? 'block' : 'none';
    }
    if (this.sourceBlock_ && this.sourceBlock_.rendered) {
      this.sourceBlock_.workspace.fireChangeEvent();
    }
  }
};


Blockly.FieldCheckbox.prototype.showEditor_ = function() {
  var newState = !this.state_;
  if (this.sourceBlock_ && this.changeHandler_) {
    // Call any change handler, and allow it to override.
    var override = this.changeHandler_(newState);
    if (override !== undefined) {
      newState = override;
    }
  }
  if (newState !== null) {
    this.sourceBlock_.setShadow(false);
    this.setValue(String(newState).toUpperCase());
  }
};
