
'use strict';

goog.provide('Blockly.Trashcan');

goog.require('goog.Timer');
goog.require('goog.dom');
goog.require('goog.math');
goog.require('goog.math.Rect');



Blockly.Trashcan = function(workspace) {
  this.workspace_ = workspace;
};


Blockly.Trashcan.prototype.WIDTH_ = 47;


Blockly.Trashcan.prototype.BODY_HEIGHT_ = 44;


Blockly.Trashcan.prototype.LID_HEIGHT_ = 16;


Blockly.Trashcan.prototype.MARGIN_BOTTOM_ = 20;


Blockly.Trashcan.prototype.MARGIN_SIDE_ = 20;


Blockly.Trashcan.prototype.MARGIN_HOTSPOT_ = 25;

Blockly.Trashcan.prototype.isOpen = false;


Blockly.Trashcan.prototype.svgGroup_ = null;


Blockly.Trashcan.prototype.svgLid_ = null;


Blockly.Trashcan.prototype.lidTask_ = 0;


Blockly.Trashcan.prototype.lidOpen_ = 0;


Blockly.Trashcan.prototype.left_ = 0;


Blockly.Trashcan.prototype.top_ = 0;


Blockly.Trashcan.prototype.createDom = function() {
  /* Here's the markup that will be generated:
  <g class="blocklyTrash">
    <clippath id="blocklyTrashBodyClipPath837493">
      <rect width="47" height="45" y="15"></rect>
    </clippath>
    <image width="64" height="92" y="-32" xlink:href="media/sprites.png"
        clip-path="url(#blocklyTrashBodyClipPath837493)"></image>
    <clippath id="blocklyTrashLidClipPath837493">
      <rect width="47" height="15"></rect>
    </clippath>
    <image width="84" height="92" y="-32" xlink:href="media/sprites.png"
        clip-path="url(#blocklyTrashLidClipPath837493)"></image>
  </g>
  */
  this.svgGroup_ = Blockly.createSvgElement('g',
      {'class': 'blocklyTrash'}, null);
  var rnd = String(Math.random()).substring(2);
  var clip = Blockly.createSvgElement('clipPath',
      {'id': 'blocklyTrashBodyClipPath' + rnd},
      this.svgGroup_);
  Blockly.createSvgElement('rect',
      {'width': this.WIDTH_, 'height': this.BODY_HEIGHT_,
       'y': this.LID_HEIGHT_},
      clip);
  var body = Blockly.createSvgElement('image',
      {'width': Blockly.SPRITE.width, 'height': Blockly.SPRITE.height, 'y': -32,
       'clip-path': 'url(#blocklyTrashBodyClipPath' + rnd + ')'},
      this.svgGroup_);
  body.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      this.workspace_.options.pathToMedia + Blockly.SPRITE.url);

  var clip = Blockly.createSvgElement('clipPath',
      {'id': 'blocklyTrashLidClipPath' + rnd},
      this.svgGroup_);
  Blockly.createSvgElement('rect',
      {'width': this.WIDTH_, 'height': this.LID_HEIGHT_}, clip);
  this.svgLid_ = Blockly.createSvgElement('image',
      {'width': Blockly.SPRITE.width, 'height': Blockly.SPRITE.height, 'y': -32,
       'clip-path': 'url(#blocklyTrashLidClipPath' + rnd + ')'},
      this.svgGroup_);
  this.svgLid_.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      this.workspace_.options.pathToMedia + Blockly.SPRITE.url);

  Blockly.bindEvent_(this.svgGroup_, 'mouseup', this, this.click);
  this.animateLid_();
  return this.svgGroup_;
};


Blockly.Trashcan.prototype.init = function(bottom) {
  this.bottom_ =  this.MARGIN_BOTTOM_ + bottom;
  this.setOpen_(false);
  return this.bottom_ + this.BODY_HEIGHT_ + this.LID_HEIGHT_;
};


Blockly.Trashcan.prototype.dispose = function() {
  if (this.svgGroup_) {
    goog.dom.removeNode(this.svgGroup_);
    this.svgGroup_ = null;
  }
  this.svgLid_ = null;
  this.workspace_ = null;
  goog.Timer.clear(this.lidTask_);
};


Blockly.Trashcan.prototype.position = function() {
  var metrics = this.workspace_.getMetrics();
  if (!metrics) {
    // There are no metrics available (workspace is probably not visible).
    return;
  }
  if (this.workspace_.RTL) {
    this.left_ = this.MARGIN_SIDE_ + Blockly.Scrollbar.scrollbarThickness;
  } else {
    this.left_ = metrics.viewWidth + metrics.absoluteLeft -
        this.WIDTH_ - this.MARGIN_SIDE_ - Blockly.Scrollbar.scrollbarThickness;
  }
  this.top_ = metrics.viewHeight + metrics.absoluteTop -
      (this.BODY_HEIGHT_ + this.LID_HEIGHT_) - this.bottom_;
  this.svgGroup_.setAttribute('transform',
      'translate(' + this.left_ + ',' + this.top_ + ')');
};


Blockly.Trashcan.prototype.getRect = function() {
  var trashXY = Blockly.getSvgXY_(this.svgGroup_, this.workspace_);
  return new goog.math.Rect(
      trashXY.x - this.MARGIN_HOTSPOT_,
      trashXY.y - this.MARGIN_HOTSPOT_,
      this.WIDTH_ + 2 * this.MARGIN_HOTSPOT_,
      this.BODY_HEIGHT_ + this.LID_HEIGHT_ + 2 * this.MARGIN_HOTSPOT_);
};


Blockly.Trashcan.prototype.setOpen_ = function(state) {
  if (this.isOpen == state) {
    return;
  }
  goog.Timer.clear(this.lidTask_);
  this.isOpen = state;
  this.animateLid_();
};


Blockly.Trashcan.prototype.animateLid_ = function() {
  this.lidOpen_ += this.isOpen ? 0.2 : -0.2;
  this.lidOpen_ = goog.math.clamp(this.lidOpen_, 0, 1);
  var lidAngle = this.lidOpen_ * 45;
  this.svgLid_.setAttribute('transform', 'rotate(' +
      (this.workspace_.RTL ? -lidAngle : lidAngle) + ',' +
      (this.workspace_.RTL ? 4 : this.WIDTH_ - 4) + ',' +
      (this.LID_HEIGHT_ - 2) + ')');
  var opacity = goog.math.lerp(0.4, 0.8, this.lidOpen_);
  this.svgGroup_.style.opacity = opacity;
  if (this.lidOpen_ > 0 && this.lidOpen_ < 1) {
    this.lidTask_ = goog.Timer.callOnce(this.animateLid_, 20, this);
  }
};


Blockly.Trashcan.prototype.close = function() {
  this.setOpen_(false);
};


Blockly.Trashcan.prototype.click = function() {
  var dx = this.workspace_.startScrollX - this.workspace_.scrollX;
  var dy = this.workspace_.startScrollY - this.workspace_.scrollY;
  if (Math.sqrt(dx * dx + dy * dy) > Blockly.DRAG_RADIUS) {
    return;
  }
  console.log('TODO: Inspect trash.');
};
