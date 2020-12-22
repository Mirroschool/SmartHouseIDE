 
'use strict';

// Top level object for Blockly.
goog.provide('Blockly');

goog.require('Blockly.BlockSvg');
goog.require('Blockly.FieldAngle');
goog.require('Blockly.FieldCheckbox');
goog.require('Blockly.FieldColour');
// Date picker commented out since it increases footprint by 60%.
// Add it only if you need it.
//goog.require('Blockly.FieldDate');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldImage');
goog.require('Blockly.FieldTextInput');
goog.require('Blockly.FieldVariable');
goog.require('Blockly.FieldString');
goog.require('Blockly.Generator');
goog.require('Blockly.Msg');
goog.require('Blockly.Procedures');
// Realtime is currently badly broken.  Stub it out.
//goog.require('Blockly.Realtime');
Blockly.Realtime = {
  isEnabled: function() {return false;},
  blockChanged: function() {},
  doCommand: function(cmdThunk) {cmdThunk();}
};
goog.require('Blockly.Toolbox');
goog.require('Blockly.WidgetDiv');
goog.require('Blockly.WorkspaceSvg');
goog.require('Blockly.inject');
goog.require('Blockly.utils');
goog.require('goog.color');
goog.require('goog.userAgent');


// Turn off debugging when compiled.
var CLOSURE_DEFINES = {'goog.DEBUG': false};

 
Blockly.SVG_NS = 'http://www.w3.org/2000/svg';
 
Blockly.HTML_NS = 'http://www.w3.org/1999/xhtml';

 
Blockly.HSV_SATURATION = 0.45;
 
Blockly.HSV_VALUE = 0.65;

 
Blockly.SPRITE = {
  width: 96,
  height: 124,
  url: 'sprites.png'
};

 
Blockly.makeColour = function(hue) {
  return goog.color.hsvToHex(hue, Blockly.HSV_SATURATION,
      Blockly.HSV_VALUE * 255);
};

 
Blockly.INPUT_VALUE = 1;
 
Blockly.OUTPUT_VALUE = 2;
 
Blockly.NEXT_STATEMENT = 3;
 
Blockly.PREVIOUS_STATEMENT = 4;
 
Blockly.DUMMY_INPUT = 5;

 
Blockly.ALIGN_LEFT = -1;
 
Blockly.ALIGN_CENTRE = 0;
 
Blockly.ALIGN_RIGHT = 1;

 
Blockly.OPPOSITE_TYPE = [];
Blockly.OPPOSITE_TYPE[Blockly.INPUT_VALUE] = Blockly.OUTPUT_VALUE;
Blockly.OPPOSITE_TYPE[Blockly.OUTPUT_VALUE] = Blockly.INPUT_VALUE;
Blockly.OPPOSITE_TYPE[Blockly.NEXT_STATEMENT] = Blockly.PREVIOUS_STATEMENT;
Blockly.OPPOSITE_TYPE[Blockly.PREVIOUS_STATEMENT] = Blockly.NEXT_STATEMENT;

 
Blockly.selected = null;

 
Blockly.highlightedConnection_ = null;

 
Blockly.localConnection_ = null;

 
Blockly.DRAG_RADIUS = 5;

 
Blockly.SNAP_RADIUS = 20;

 
Blockly.BUMP_DELAY = 250;

 
Blockly.COLLAPSE_CHARS = 30;

 
Blockly.LONGPRESS = 750;

 
Blockly.mainWorkspace = null;

 
Blockly.clipboardXml_ = null;

 
Blockly.clipboardSource_ = null;

 
Blockly.dragMode_ = 0;

 
Blockly.onTouchUpWrapper_ = null;

 
Blockly.svgSize = function(svg) {
  return {width: svg.cachedWidth_,
          height: svg.cachedHeight_};
};

 
Blockly.svgResize = function(workspace) {
  var mainWorkspace = workspace;
  while (mainWorkspace.options.parentWorkspace) {
    mainWorkspace = mainWorkspace.options.parentWorkspace;
  }
  var svg = mainWorkspace.options.svg;
  var div = svg.parentNode;
  if (!div) {
    // Workspace deteted, or something.
    return;
  }
  var width = div.offsetWidth;
  var height = div.offsetHeight;
  if (svg.cachedWidth_ != width) {
    svg.setAttribute('width', width + 'px');
    svg.cachedWidth_ = width;
  }
  if (svg.cachedHeight_ != height) {
    svg.setAttribute('height', height + 'px');
    svg.cachedHeight_ = height;
  }
  mainWorkspace.resize();
};

 
Blockly.onMouseUp_ = function(e) {
  var workspace = Blockly.getMainWorkspace();
  Blockly.Css.setCursor(Blockly.Css.Cursor.OPEN);
  workspace.isScrolling = false;

  // Unbind the touch event if it exists.
  if (Blockly.onTouchUpWrapper_) {
    Blockly.unbindEvent_(Blockly.onTouchUpWrapper_);
    Blockly.onTouchUpWrapper_ = null;
  }
  if (Blockly.onMouseMoveWrapper_) {
    Blockly.unbindEvent_(Blockly.onMouseMoveWrapper_);
    Blockly.onMouseMoveWrapper_ = null;
  }
};

 
Blockly.onMouseMove_ = function(e) {
  if (e.touches && e.touches.length >= 2) {
    return;  // Multi-touch gestures won't have e.clientX.
  }
  var workspace = Blockly.getMainWorkspace();
  if (workspace.isScrolling) {
    Blockly.removeAllRanges();
    var dx = e.clientX - workspace.startDragMouseX;
    var dy = e.clientY - workspace.startDragMouseY;
    var metrics = workspace.startDragMetrics;
    var x = workspace.startScrollX + dx;
    var y = workspace.startScrollY + dy;
    x = Math.min(x, -metrics.contentLeft);
    y = Math.min(y, -metrics.contentTop);
    x = Math.max(x, metrics.viewWidth - metrics.contentLeft -
                 metrics.contentWidth);
    y = Math.max(y, metrics.viewHeight - metrics.contentTop -
                 metrics.contentHeight);

    // Move the scrollbars and the page will scroll automatically.
    workspace.scrollbar.set(-x - metrics.contentLeft,
                            -y - metrics.contentTop);
    // Cancel the long-press if the drag has moved too far.
    if (Math.sqrt(dx * dx + dy * dy) > Blockly.DRAG_RADIUS) {
      Blockly.longStop_();
    }
    e.stopPropagation();
  }
};

 
Blockly.onKeyDown_ = function(e) {
  if (Blockly.isTargetInput_(e)) {
    // When focused on an HTML text input widget, don't trap any keys.
    return;
  }
  var deleteBlock = false;
  if (e.keyCode == 27) {
    // Pressing esc closes the context menu.
    Blockly.hideChaff();
  } else if (e.keyCode == 8 || e.keyCode == 46) {
    // Delete or backspace.
    try {
      if (Blockly.selected && Blockly.selected.isDeletable()) {
        deleteBlock = true;
      }
    } finally {
      // Stop the browser from going back to the previous page.
      // Use a finally so that any error in delete code above doesn't disappear
      // from the console when the page rolls back.
      e.preventDefault();
    }
  } else if (e.altKey || e.ctrlKey || e.metaKey) {
    if (Blockly.selected &&
        Blockly.selected.isDeletable() && Blockly.selected.isMovable()) {
      if (e.keyCode == 67) {
        // 'c' for copy.
        Blockly.hideChaff();
        Blockly.copy_(Blockly.selected);
      } else if (e.keyCode == 88) {
        // 'x' for cut.
        Blockly.copy_(Blockly.selected);
        deleteBlock = true;
      }
    }
    if (e.keyCode == 86) {
      // 'v' for paste.
      if (Blockly.clipboardXml_) {
        Blockly.clipboardSource_.paste(Blockly.clipboardXml_);
      }
    }
  }
  if (deleteBlock) {
    // Common code for delete and cut.
    Blockly.hideChaff();
    var heal = Blockly.dragMode_ != 2;
    Blockly.selected.dispose(heal, true);
    if (Blockly.highlightedConnection_) {
      Blockly.highlightedConnection_.unhighlight();
      Blockly.highlightedConnection_ = null;
    }
  }
};

 
Blockly.terminateDrag_ = function() {
  Blockly.BlockSvg.terminateDrag_();
  Blockly.Flyout.terminateDrag_();
};

 
Blockly.longPid_ = 0;

 
Blockly.longStart_ = function(e, uiObject) {
  Blockly.longStop_();
  Blockly.longPid_ = setTimeout(function() {
      e.button = 2;  // Simulate a right button click.
      uiObject.onMouseDown_(e);
    }, Blockly.LONGPRESS);
};

 
Blockly.longStop_ = function() {
  if (Blockly.longPid_) {
    clearTimeout(Blockly.longPid_);
    Blockly.longPid_ = 0;
  }
};

 
Blockly.copy_ = function(block) {
  var xmlBlock = Blockly.Xml.blockToDom_(block);
  if (Blockly.dragMode_ != 2) {
    Blockly.Xml.deleteNext(xmlBlock);
  }
  // Encode start position in XML.
  var xy = block.getRelativeToSurfaceXY();
  xmlBlock.setAttribute('x', block.RTL ? -xy.x : xy.x);
  xmlBlock.setAttribute('y', xy.y);
  Blockly.clipboardXml_ = xmlBlock;
  Blockly.clipboardSource_ = block.workspace;
};

 
Blockly.duplicate_ = function(block) {
  // Save the clipboard.
  var clipboardXml = Blockly.clipboardXml_;
  var clipboardSource = Blockly.clipboardSource_;

  // Create a duplicate via a copy/paste operation.
  Blockly.copy_(block);
  block.workspace.paste(Blockly.clipboardXml_);

  // Restore the clipboard.
  Blockly.clipboardXml_ = clipboardXml;
  Blockly.clipboardSource_ = clipboardSource;
};

 
Blockly.onContextMenu_ = function(e) {
  if (!Blockly.isTargetInput_(e)) {
    // When focused on an HTML text input widget, don't cancel the context menu.
    e.preventDefault();
  }
};

 
Blockly.hideChaff = function(opt_allowToolbox) {
  Blockly.Tooltip.hide();
  Blockly.WidgetDiv.hide();
  if (!opt_allowToolbox) {
    var workspace = Blockly.getMainWorkspace();
    if (workspace.toolbox_ &&
        workspace.toolbox_.flyout_ &&
        workspace.toolbox_.flyout_.autoClose) {
      workspace.toolbox_.clearSelection();
    }
  }
};

 
Blockly.getMainWorkspaceMetrics_ = function() {
  var svgSize = Blockly.svgSize(this.options.svg);
  if (this.toolbox_) {
    svgSize.width -= this.toolbox_.width;
  }
  // Set the margin to match the flyout's margin so that the workspace does
  // not jump as blocks are added.
  var MARGIN = Blockly.Flyout.prototype.CORNER_RADIUS - 1;
  var viewWidth = svgSize.width - MARGIN;
  var viewHeight = svgSize.height - MARGIN;
  try {
    var blockBox = this.getCanvas().getBBox();
  } catch (e) {
    // Firefox has trouble with hidden elements (Bug 528969).
    return null;
  }
  // Fix scale.
  var contentWidth = blockBox.width * this.scale;
  var contentHeight = blockBox.height * this.scale;
  var contentX = blockBox.x * this.scale;
  var contentY = blockBox.y * this.scale;
  if (this.scrollbar) {
    // Add a border around the content that is at least half a screenful wide.
    // Ensure border is wide enough that blocks can scroll over entire screen.
    var leftEdge = Math.min(contentX - viewWidth / 2,
                            contentX + contentWidth - viewWidth);
    var rightEdge = Math.max(contentX + contentWidth + viewWidth / 2,
                             contentX + viewWidth);
    var topEdge = Math.min(contentY - viewHeight / 2,
                           contentY + contentHeight - viewHeight);
    var bottomEdge = Math.max(contentY + contentHeight + viewHeight / 2,
                              contentY + viewHeight);
  } else {
    var leftEdge = blockBox.x;
    var rightEdge = leftEdge + blockBox.width;
    var topEdge = blockBox.y;
    var bottomEdge = topEdge + blockBox.height;
  }
  var absoluteLeft = 0;
  if (!this.RTL && this.toolbox_) {
    absoluteLeft = this.toolbox_.width;
  }
  var metrics = {
    viewHeight: svgSize.height,
    viewWidth: svgSize.width,
    contentHeight: bottomEdge - topEdge,
    contentWidth: rightEdge - leftEdge,
    viewTop: -this.scrollY,
    viewLeft: -this.scrollX,
    contentTop: topEdge,
    contentLeft: leftEdge,
    absoluteTop: 0,
    absoluteLeft: absoluteLeft
  };
  return metrics;
};

 
Blockly.setMainWorkspaceMetrics_ = function(xyRatio) {
  if (!this.scrollbar) {
    throw 'Attempt to set main workspace scroll without scrollbars.';
  }
  var metrics = this.getMetrics();
  if (goog.isNumber(xyRatio.x)) {
    this.scrollX = -metrics.contentWidth * xyRatio.x - metrics.contentLeft;
  }
  if (goog.isNumber(xyRatio.y)) {
    this.scrollY = -metrics.contentHeight * xyRatio.y - metrics.contentTop;
  }
  var x = this.scrollX + metrics.absoluteLeft;
  var y = this.scrollY + metrics.absoluteTop;
  this.translate(x, y);
  if (this.options.gridPattern) {
    this.options.gridPattern.setAttribute('x', x);
    this.options.gridPattern.setAttribute('y', y);
    if (goog.userAgent.IE) {
      // IE doesn't notice that the x/y offsets have changed.  Force an update.
      this.updateGridPattern_();
    }
  }
};

 
Blockly.doCommand = function(cmdThunk) {
  if (Blockly.Realtime.isEnabled) {
    Blockly.Realtime.doCommand(cmdThunk);
  } else {
    cmdThunk();
  }
};

 
Blockly.addChangeListener = function(func) {
  // Backwards compatability from before there could be multiple workspaces.
  console.warn('Deprecated call to Blockly.addChangeListener, ' +
               'use workspace.addChangeListener instead.');
  return Blockly.getMainWorkspace().addChangeListener(func);
};

 
Blockly.getMainWorkspace = function() {
  return Blockly.mainWorkspace;
};

// Export symbols that would otherwise be renamed by Closure compiler.
if (!goog.global['Blockly']) {
  goog.global['Blockly'] = {};
}
goog.global['Blockly']['getMainWorkspace'] = Blockly.getMainWorkspace;
goog.global['Blockly']['addChangeListener'] = Blockly.addChangeListener;
