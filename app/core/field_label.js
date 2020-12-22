
'use strict';

goog.provide('Blockly.FieldLabel');

goog.require('Blockly.Field');
goog.require('Blockly.Tooltip');
goog.require('goog.dom');
goog.require('goog.math.Size');



Blockly.FieldLabel = function(text, opt_class) {
  this.size_ = new goog.math.Size(0, 17.5);
  this.class_ = opt_class;
  this.setText(text);
};
goog.inherits(Blockly.FieldLabel, Blockly.Field);


Blockly.FieldLabel.prototype.EDITABLE = false;


Blockly.FieldLabel.prototype.init = function(block) {
  if (this.sourceBlock_) {
    // Text has already been initialized once.
    return;
  }
  this.sourceBlock_ = block;

  // Build the DOM.
  this.textElement_ = Blockly.createSvgElement('text',
      {'class': 'blocklyText', 'y': this.size_.height - 5}, null);
  if (this.class_) {
    Blockly.addClass_(this.textElement_, this.class_);
  }
  if (!this.visible_) {
    this.textElement_.style.display = 'none';
  }
  block.getSvgRoot().appendChild(this.textElement_);

  // Configure the field to be transparent with respect to tooltips.
  this.textElement_.tooltip = this.sourceBlock_;
  Blockly.Tooltip.bindMouseEvents(this.textElement_);
  // Force a render.
  this.updateTextNode_();
};


Blockly.FieldLabel.prototype.dispose = function() {
  goog.dom.removeNode(this.textElement_);
  this.textElement_ = null;
};


Blockly.FieldLabel.prototype.getSvgRoot = function() {
  return /** @type {!Element} */ (this.textElement_);
};


Blockly.FieldLabel.prototype.setTooltip = function(newTip) {
  this.textElement_.tooltip = newTip;
};
