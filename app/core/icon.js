
'use strict';

goog.provide('Blockly.Icon');

goog.require('goog.dom');



Blockly.Icon = function(block) {
  this.block_ = block;
};


Blockly.Icon.prototype.collapseHidden = true;

 
Blockly.Icon.prototype.SIZE = 17;

 
Blockly.Icon.prototype.png_ = '';

 
Blockly.Icon.prototype.bubble_ = null;

 
Blockly.Icon.prototype.iconX_ = 0;

 
Blockly.Icon.prototype.iconY_ = 0;

 
Blockly.Icon.prototype.createIcon = function() {
  if (this.iconGroup_) {
    // Icon already exists.
    return;
  }
  /* Here's the markup that will be generated:
  <g class="blocklyIconGroup">
    <image width="17" height="17"
     xlink:href="data:image/png;base64,iVBOR..."></image>
  </g>
  */
  this.iconGroup_ = Blockly.createSvgElement('g',
      {'class': 'blocklyIconGroup'}, null);
  var img = Blockly.createSvgElement('image',
      {'width': this.SIZE, 'height': this.SIZE},
      this.iconGroup_);
  img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.png_);

  this.block_.getSvgRoot().appendChild(this.iconGroup_);
  Blockly.bindEvent_(this.iconGroup_, 'mouseup', this, this.iconClick_);
  this.updateEditable();
};

 
Blockly.Icon.prototype.dispose = function() {
  // Dispose of and unlink the icon.
  goog.dom.removeNode(this.iconGroup_);
  this.iconGroup_ = null;
  // Dispose of and unlink the bubble.
  this.setVisible(false);
  this.block_ = null;
};

 
Blockly.Icon.prototype.updateEditable = function() {
  if (this.block_.isInFlyout || !this.block_.isEditable()) {
    Blockly.addClass_(/** @type {!Element} */ (this.iconGroup_),
                      'blocklyIconGroupReadonly');
  } else {
    Blockly.removeClass_(/** @type {!Element} */ (this.iconGroup_),
                         'blocklyIconGroupReadonly');
  }
};

 
Blockly.Icon.prototype.isVisible = function() {
  return !!this.bubble_;
};

 
Blockly.Icon.prototype.iconClick_ = function(e) {
  if (Blockly.dragMode_ == 2) {
    // Drag operation is concluding.  Don't open the editor.
    return;
  }
  if (!this.block_.isInFlyout && !Blockly.isRightButton(e)) {
    this.setVisible(!this.isVisible());
  }
};

 
Blockly.Icon.prototype.updateColour = function() {
  if (this.isVisible()) {
    var hexColour = Blockly.makeColour(this.block_.getColour());
    this.bubble_.setColour(hexColour);
  }
};

 
Blockly.Icon.prototype.renderIcon = function(cursorX) {
  if (this.collapseHidden && this.block_.isCollapsed()) {
    this.iconGroup_.setAttribute('display', 'none');
    return cursorX;
  }
  this.iconGroup_.setAttribute('display', 'block');

  var TOP_MARGIN = 5;
  var width = this.SIZE;
  if (this.block_.RTL) {
    cursorX -= width;
  }
  this.iconGroup_.setAttribute('transform',
      'translate(' + cursorX + ',' + TOP_MARGIN + ')');
  this.computeIconLocation();
  if (this.block_.RTL) {
    cursorX -= Blockly.BlockSvg.SEP_SPACE_X;
  } else {
    cursorX += width + Blockly.BlockSvg.SEP_SPACE_X;
  }
  return cursorX;
};

 
Blockly.Icon.prototype.setIconLocation = function(x, y) {
  this.iconX_ = x;
  this.iconY_ = y;
  if (this.isVisible()) {
    this.bubble_.setAnchorLocation(x, y);
  }
};

 
Blockly.Icon.prototype.computeIconLocation = function() {
  // Find coordinates for the centre of the icon and update the arrow.
  var blockXY = this.block_.getRelativeToSurfaceXY();
  var iconXY = Blockly.getRelativeXY_(this.iconGroup_);
  var newX = blockXY.x + iconXY.x + this.SIZE / 2;
  var newY = blockXY.y + iconXY.y + this.SIZE / 2;
  if (newX !== this.iconX_ || newY !== this.iconY_) {
    this.setIconLocation(newX, newY);
  }
};

 
Blockly.Icon.prototype.getIconLocation = function() {
  return {x: this.iconX_, y: this.iconY_};
};
