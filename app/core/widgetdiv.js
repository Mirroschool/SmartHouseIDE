
'use strict';

goog.provide('Blockly.WidgetDiv');

goog.require('Blockly.Css');
goog.require('goog.dom');
goog.require('goog.style');



Blockly.WidgetDiv.DIV = null;


Blockly.WidgetDiv.owner_ = null;


Blockly.WidgetDiv.dispose_ = null;


Blockly.WidgetDiv.createDom = function() {
  if (Blockly.WidgetDiv.DIV) {
    return;  // Already created.
  }
  // Create an HTML container for popup overlays (e.g. editor widgets).
  Blockly.WidgetDiv.DIV = goog.dom.createDom('div', 'blocklyWidgetDiv');
  document.body.appendChild(Blockly.WidgetDiv.DIV);
};


Blockly.WidgetDiv.show = function(newOwner, rtl, dispose) {
  Blockly.WidgetDiv.hide();
  Blockly.WidgetDiv.owner_ = newOwner;
  Blockly.WidgetDiv.dispose_ = dispose;
  // Temporarily move the widget to the top of the screen so that it does not
  // cause a scrollbar jump in Firefox when displayed.
  var xy = goog.style.getViewportPageOffset(document);
  Blockly.WidgetDiv.DIV.style.top = xy.y + 'px';
  Blockly.WidgetDiv.DIV.style.direction = rtl ? 'rtl' : 'ltr';
  Blockly.WidgetDiv.DIV.style.display = 'block';
};


Blockly.WidgetDiv.hide = function() {
  if (Blockly.WidgetDiv.owner_) {
    Blockly.WidgetDiv.DIV.style.display = 'none';
    Blockly.WidgetDiv.DIV.style.left = '';
    Blockly.WidgetDiv.DIV.style.top = '';
    Blockly.WidgetDiv.DIV.style.height = '';
    Blockly.WidgetDiv.dispose_ && Blockly.WidgetDiv.dispose_();
    Blockly.WidgetDiv.owner_ = null;
    Blockly.WidgetDiv.dispose_ = null;
    goog.dom.removeChildren(Blockly.WidgetDiv.DIV);
  }
};


Blockly.WidgetDiv.isVisible = function() {
  return !!Blockly.WidgetDiv.owner_;
};


Blockly.WidgetDiv.hideIfOwner = function(oldOwner) {
  if (Blockly.WidgetDiv.owner_ == oldOwner) {
    Blockly.WidgetDiv.hide();
  }
};


Blockly.WidgetDiv.position = function(anchorX, anchorY, windowSize,
                                      scrollOffset, rtl) {
  // Don't let the widget go above the top edge of the window.
  if (anchorY < scrollOffset.y) {
    anchorY = scrollOffset.y;
  }
  if (rtl) {
    // Don't let the widget go right of the right edge of the window.
    if (anchorX > windowSize.width + scrollOffset.x) {
      anchorX = windowSize.width + scrollOffset.x;
    }
  } else {
    // Don't let the widget go left of the left edge of the window.
    if (anchorX < scrollOffset.x) {
      anchorX = scrollOffset.x;
    }
  }
  Blockly.WidgetDiv.DIV.style.left = anchorX + 'px';
  Blockly.WidgetDiv.DIV.style.top = anchorY + 'px';
  Blockly.WidgetDiv.DIV.style.height =
      (windowSize.height - anchorY + scrollOffset.y) + 'px';
};
