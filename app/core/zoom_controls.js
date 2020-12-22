 
'use strict';

goog.provide('Blockly.ZoomControls');

goog.require('goog.dom');


 
Blockly.ZoomControls = function(workspace) {
  this.workspace_ = workspace;
};

 
Blockly.ZoomControls.prototype.WIDTH_ = 32;

 
Blockly.ZoomControls.prototype.HEIGHT_ = 110;

 
Blockly.ZoomControls.prototype.MARGIN_BOTTOM_ = 20;

 
Blockly.ZoomControls.prototype.MARGIN_SIDE_ = 20;

 
Blockly.ZoomControls.prototype.svgGroup_ = null;

 
Blockly.ZoomControls.prototype.left_ = 0;

 
Blockly.ZoomControls.prototype.top_ = 0;

 
Blockly.ZoomControls.prototype.createDom = function() {
  var workspace = this.workspace_;
  /* Here's the markup that will be generated:
  <g class="blocklyZoom">
    <clippath id="blocklyZoomoutClipPath837493">
      <rect width="32" height="32" y="77"></rect>
    </clippath>
    <image width="96" height="124" x="-64" y="-15" xlink:href="media/sprites.png">
        clip-path="url(#blocklyZoomoutClipPath837493)"></image>
    <clippath id="blocklyZoominClipPath837493">
      <rect width="32" height="32" y="43"></rect>
    </clippath>
    <image width="96" height="124" x="-32" y="-49" xlink:href="media/sprites.png">
        clip-path="url(#blocklyZoominClipPath837493)"></image>
    <clippath id="blocklyZoomresetClipPath837493">
      <rect width="32" height="32"></rect>
    </clippath>
    <image width="96" height="124" y="-92" xlink:href="media/sprites.png">
        clip-path="url(#blocklyZoomresetClipPath837493)"></image>
  </g>
  */
  this.svgGroup_ = Blockly.createSvgElement('g',
      {'class': 'blocklyZoom'}, null);
  var rnd = String(Math.random()).substring(2);

  var clip = Blockly.createSvgElement('clipPath',
      {'id': 'blocklyZoomoutClipPath' + rnd},
      this.svgGroup_);
  Blockly.createSvgElement('rect',
      {'width': 32, 'height': 32, 'y': 77},
      clip);
  var zoomoutSvg = Blockly.createSvgElement('image',
      {'width': Blockly.SPRITE.width,
       'height': Blockly.SPRITE.height, 'x': -64,
       'y': -15,
       'clip-path': 'url(#blocklyZoomoutClipPath' + rnd + ')'},
      this.svgGroup_);
  zoomoutSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      workspace.options.pathToMedia + Blockly.SPRITE.url);

  var clip = Blockly.createSvgElement('clipPath',
      {'id': 'blocklyZoominClipPath' + rnd},
      this.svgGroup_);
  Blockly.createSvgElement('rect',
      {'width': 32, 'height': 32, 'y': 43},
      clip);
  var zoominSvg = Blockly.createSvgElement('image',
      {'width': Blockly.SPRITE.width,
       'height': Blockly.SPRITE.height,
       'x': -32,
       'y': -49,
       'clip-path': 'url(#blocklyZoominClipPath' + rnd + ')'},
      this.svgGroup_);
  zoominSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      workspace.options.pathToMedia + Blockly.SPRITE.url);

  var clip = Blockly.createSvgElement('clipPath',
      {'id': 'blocklyZoomresetClipPath' + rnd},
      this.svgGroup_);
  Blockly.createSvgElement('rect',
      {'width': 32, 'height': 32},
      clip);
  var zoomresetSvg = Blockly.createSvgElement('image',
      {'width': Blockly.SPRITE.width,
       'height': Blockly.SPRITE.height, 'y': -92,
       'clip-path': 'url(#blocklyZoomresetClipPath' + rnd + ')'},
      this.svgGroup_);
  zoomresetSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      workspace.options.pathToMedia + Blockly.SPRITE.url);

  // Attach event listeners.
  Blockly.bindEvent_(zoomresetSvg, 'mousedown', workspace, workspace.zoomReset);
  Blockly.bindEvent_(zoominSvg, 'mousedown', null, function(e) {
    workspace.zoomCenter(1);
    e.stopPropagation();  // Don't start a workspace scroll.
  });
  Blockly.bindEvent_(zoomoutSvg, 'mousedown', null, function(e) {
    workspace.zoomCenter(-1);
    e.stopPropagation();  // Don't start a workspace scroll.
  });

  return this.svgGroup_;
};

 
Blockly.ZoomControls.prototype.init = function(bottom) {
  this.bottom_ = this.MARGIN_BOTTOM_ + bottom;
  return this.bottom_ + this.HEIGHT_;
};

 
Blockly.ZoomControls.prototype.dispose = function() {
  if (this.svgGroup_) {
    goog.dom.removeNode(this.svgGroup_);
    this.svgGroup_ = null;
  }
  this.workspace_ = null;
};

 
Blockly.ZoomControls.prototype.position = function() {
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
      this.HEIGHT_ - this.bottom_;
  this.svgGroup_.setAttribute('transform',
      'translate(' + this.left_ + ',' + this.top_ + ')');
};
