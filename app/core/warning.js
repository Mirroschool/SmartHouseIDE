
'use strict';

goog.provide('Blockly.Warning');

goog.require('Blockly.Bubble');
goog.require('Blockly.Icon');



Blockly.Warning = function(block) {
  Blockly.Warning.superClass_.constructor.call(this, block);
  this.createIcon();
  // The text_ object can contain multiple warnings.
  this.text_ = {};
};
goog.inherits(Blockly.Warning, Blockly.Icon);


Blockly.Warning.prototype.collapseHidden = false;


Blockly.Warning.prototype.png_ = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAANyAAADcgBffIlqAAAAAd0SU1FB98DGgApDBpIGrEAAAGfSURBVDjLnZM9S2NREIbfc2P8AF27BXshpIzK5g9ssUj8C2tnYyUoiBGSyk4sbCLs1vkRgoW1jYWFICwsMV2Se3JPboLe+FhcNCZcjXFgOMzHeec9M2ekDwTIAEUgo68IsOQczdNTIudoAksTg/g+5+UyDxKUyzz4PueTsvhZr+NmZkCC6Wmo1QiAX58FmLKWf4VCDPCiGxtgLf+B9FiQXo+9y0ucBIUCnJ3B+noMdHGBC0P2xrH4HoYEmUx8qVQCgMPD2F5ehjDEjTbZe2s4p5NKRenb2+Qid3dSpaK0tTp+j8VKq0VncXHQh2IxZrK/P/AtLECjQQf4McQEMNbq786O5qwdANfr8Xl/P/AFgbS7qzlr9Qcwr4EoYvPmBud5wxPJ5+HqCtbWhv3GwPU1Lor4/fKMeedo5vPDiRKsrsLWFuRyybFOhxbwTd0upWqVcDQpaTqjWq0SdruU5PvUkiol/ZNRzeXA96mp3aaRzSYnjdNsFtptGiYI2PY8HaVSmu33xWf3K5WS6ffVe3rSgXnzT+YlpSfY00djjJOkZ/wpr41bQMIsAAAAAElFTkSuQmCC';


Blockly.Warning.textToDom_ = function(text) {
  var paragraph = /** @type {!SVGTextElement} */ (
      Blockly.createSvgElement('text',
          {'class': 'blocklyText blocklyBubbleText',
           'y': Blockly.Bubble.BORDER_WIDTH},
          null));
  var lines = text.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var tspanElement = Blockly.createSvgElement('tspan',
        {'dy': '1em', 'x': Blockly.Bubble.BORDER_WIDTH}, paragraph);
    var textNode = document.createTextNode(lines[i]);
    tspanElement.appendChild(textNode);
  }
  return paragraph;
};


Blockly.Warning.prototype.setVisible = function(visible) {
  if (visible == this.isVisible()) {
    // No change.
    return;
  }
  if (visible) {
    // Create the bubble to display all warnings.
    var paragraph = Blockly.Warning.textToDom_(this.getText());
    this.bubble_ = new Blockly.Bubble(
        (this.block_.workspace),
        paragraph, this.block_.svgPath_,
        this.iconX_, this.iconY_, null, null);
    if (this.block_.RTL) {
      // Right-align the paragraph.
      // This cannot be done until the bubble is rendered on screen.
      var maxWidth = paragraph.getBBox().width;
      for (var i = 0, textElement; textElement = paragraph.childNodes[i]; i++) {
        textElement.setAttribute('text-anchor', 'end');
        textElement.setAttribute('x', maxWidth + Blockly.Bubble.BORDER_WIDTH);
      }
    }
    this.updateColour();
    // Bump the warning into the right location.
    var size = this.bubble_.getBubbleSize();
    this.bubble_.setBubbleSize(size.width, size.height);
  } else {
    // Dispose of the bubble.
    this.bubble_.dispose();
    this.bubble_ = null;
    this.body_ = null;
  }
};


Blockly.Warning.prototype.bodyFocus_ = function(e) {
  this.bubble_.promote_();
};


Blockly.Warning.prototype.setText = function(text, id) {
  if (this.text_[id] == text) {
    return;
  }
  if (text) {
    this.text_[id] = text;
  } else {
    delete this.text_[id];
  }
  if (this.isVisible()) {
    this.setVisible(false);
    this.setVisible(true);
  }
};


Blockly.Warning.prototype.getText = function() {
  var allWarnings = [];
  for (var id in this.text_) {
    allWarnings.push(this.text_[id]);
  }
  return allWarnings.join('\n');
};

Blockly.Warning.prototype.dispose = function() {
  this.block_.warning = null;
  Blockly.Icon.prototype.dispose.call(this);
};