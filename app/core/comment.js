
'use strict';

goog.provide('Blockly.Comment');

goog.require('Blockly.Bubble');
goog.require('Blockly.Icon');
goog.require('goog.userAgent');



Blockly.Comment = function(block) {
  Blockly.Comment.superClass_.constructor.call(this, block);
  this.createIcon();
};
goog.inherits(Blockly.Comment, Blockly.Icon);


Blockly.Comment.prototype.png_ = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAANyAAADcgBffIlqAAAAAd0SU1FB98DGgAnBf0Xj5sAAAIBSURBVDjLjZO9SxxRFMXPrFkWl2UFYSOIRtF210YtAiH/gGATRNZFgo19IBaB9Ipgk3SiEoKQgI19JIVgGaOIgpWJEAV1kZk3b1ad0V+KRYIzk5ALh1ecc88978tRSgHPg0Bjvq/BbFalMNR5oaBv+bzWHMfZjOudWPOg6+pDva6elRXlt7fVcnYmPX4sDQ3pdmpKQXu7frS16aXjON8T06OIMWOwtRp3jgNSEpkMTE5y5/v4UcSLePxnroutVNKb4xgYANfFAk/vDbLG8Gtk5P8M7jE6CsZwDDwSMLm5iYmLlpbg4ABOTmBjA4aHk0ZbWxigposLvlarScH5OSwvw9oaABwdJTW1GtTrfJHnUe/uTgqKxeZaKEAUgTEQP/CeHvA8LhRFhLlc+r6zWVhfbyaZn0/yuRxEEaGCAK9USjdZWGgarK5CS0uS7+gAa3EzjYaOy2WlludJi4vSzIx0e5vky2Xp6ko/M4WCPleruk4zsVa6vJSur9OHTEzoqljUJwEdQYDf25uMe3jY3E5fX5Lr7wdr8YGSJCkIeL23h9/a+lA4Pg7T039u6h75POzv4wcBrx5Ec11Wd3bwOzv//VK7umB3F991+Zj2/R1reWstdnaWm3L5YXOlAnNz3FiLbTR4Azj6WwFPjOG953EahoT1On4YEnoep8bwDuiO9/wG1sM4kG8A4fUAAAAASUVORK5CYII=';


Blockly.Comment.prototype.text_ = '';


Blockly.Comment.prototype.width_ = 160;


Blockly.Comment.prototype.height_ = 80;

 
Blockly.Comment.prototype.createEditor_ = function() {
  /* Create the editor.  Here's the markup that will be generated:
    <foreignObject x="8" y="8" width="164" height="164">
      <body xmlns="http://www.w3.org/1999/xhtml" class="blocklyMinimalBody">
        <textarea xmlns="http://www.w3.org/1999/xhtml"
            class="blocklyCommentTextarea"
            style="height: 164px; width: 164px;"></textarea>
      </body>
    </foreignObject>
  */
  this.foreignObject_ = Blockly.createSvgElement('foreignObject',
      {'x': Blockly.Bubble.BORDER_WIDTH, 'y': Blockly.Bubble.BORDER_WIDTH},
      null);
  var body = document.createElementNS(Blockly.HTML_NS, 'body');
  body.setAttribute('xmlns', Blockly.HTML_NS);
  body.className = 'blocklyMinimalBody';
  this.textarea_ = document.createElementNS(Blockly.HTML_NS, 'textarea');
  this.textarea_.className = 'blocklyCommentTextarea';
  this.textarea_.setAttribute('dir', this.block_.RTL ? 'RTL' : 'LTR');
  body.appendChild(this.textarea_);
  this.foreignObject_.appendChild(body);
  Blockly.bindEvent_(this.textarea_, 'mouseup', this, this.textareaFocus_);
  // Don't zoom with mousewheel.
  Blockly.bindEvent_(this.textarea_, 'wheel', this, function(e) {
    e.stopPropagation();
  });
  return this.foreignObject_;
};

 
Blockly.Comment.prototype.updateEditable = function() {
  if (this.isVisible()) {
    // Toggling visibility will force a rerendering.
    this.setVisible(false);
    this.setVisible(true);
  }
  // Allow the icon to update.
  Blockly.Icon.prototype.updateEditable.call(this);
};

 
Blockly.Comment.prototype.resizeBubble_ = function() {
  var size = this.bubble_.getBubbleSize();
  var doubleBorderWidth = 2 * Blockly.Bubble.BORDER_WIDTH;
  this.foreignObject_.setAttribute('width', size.width - doubleBorderWidth);
  this.foreignObject_.setAttribute('height', size.height - doubleBorderWidth);
  this.textarea_.style.width = (size.width - doubleBorderWidth - 4) + 'px';
  this.textarea_.style.height = (size.height - doubleBorderWidth - 4) + 'px';
};

 
Blockly.Comment.prototype.setVisible = function(visible) {
  if (visible == this.isVisible()) {
    // No change.
    return;
  }
  if ((!this.block_.isEditable() && !this.textarea_) || goog.userAgent.IE) {
    // Steal the code from warnings to make an uneditable text bubble.
    // MSIE does not support foreignobject; textareas are impossible.
    // http://msdn.microsoft.com/en-us/library/hh834675%28v=vs.85%29.aspx
    // Always treat comments in IE as uneditable.
    Blockly.Warning.prototype.setVisible.call(this, visible);
    return;
  }
  // Save the bubble stats before the visibility switch.
  var text = this.getText();
  var size = this.getBubbleSize();
  if (visible) {
    // Create the bubble.
    this.bubble_ = new Blockly.Bubble(
        /** @type {!Blockly.Workspace} */ (this.block_.workspace),
        this.createEditor_(), this.block_.svgPath_,
        this.iconX_, this.iconY_,
        this.width_, this.height_);
    this.bubble_.registerResizeEvent(this, this.resizeBubble_);
    this.updateColour();
    this.text_ = null;
  } else {
    // Dispose of the bubble.
    this.bubble_.dispose();
    this.bubble_ = null;
    this.textarea_ = null;
    this.foreignObject_ = null;
  }
  // Restore the bubble stats after the visibility switch.
  this.setText(text);
  this.setBubbleSize(size.width, size.height);
};

 
Blockly.Comment.prototype.textareaFocus_ = function(e) {
  // Ideally this would be hooked to the focus event for the comment.
  // However doing so in Firefox swallows the cursor for unknown reasons.
  // So this is hooked to mouseup instead.  No big deal.
  this.bubble_.promote_();
  // Since the act of moving this node within the DOM causes a loss of focus,
  // we need to reapply the focus.
  this.textarea_.focus();
};

 
Blockly.Comment.prototype.getBubbleSize = function() {
  if (this.isVisible()) {
    return this.bubble_.getBubbleSize();
  } else {
    return {width: this.width_, height: this.height_};
  }
};

 
Blockly.Comment.prototype.setBubbleSize = function(width, height) {
  if (this.textarea_) {
    this.bubble_.setBubbleSize(width, height);
  } else {
    this.width_ = width;
    this.height_ = height;
  }
};

 
Blockly.Comment.prototype.getText = function() {
  return this.textarea_ ? this.textarea_.value : this.text_;
};

 
Blockly.Comment.prototype.setText = function(text) {
  if (this.textarea_) {
    this.textarea_.value = text;
  } else {
    this.text_ = text;
  }
};

 
Blockly.Comment.prototype.dispose = function() {
  this.block_.comment = null;
  Blockly.Icon.prototype.dispose.call(this);
};
