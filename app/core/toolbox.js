
'use strict';

goog.provide('Blockly.Toolbox');

goog.require('Blockly.Flyout');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.BrowserFeature');
goog.require('goog.html.SafeHtml');
goog.require('goog.math.Rect');
goog.require('goog.style');
goog.require('goog.ui.tree.TreeControl');
goog.require('goog.ui.tree.TreeNode');



Blockly.Toolbox = function(workspace) {
 
  this.workspace_ = workspace;
};


Blockly.Toolbox.prototype.width = 0;


Blockly.Toolbox.prototype.selectedOption_ = null;


Blockly.Toolbox.prototype.lastCategory_ = null;

Blockly.Toolbox.prototype.CONFIG_ = {
  indentWidth: 19,
  cssRoot: 'blocklyTreeRoot',
  cssHideRoot: 'blocklyHidden',
  cssItem: '',
  cssTreeRow: 'blocklyTreeRow',
  cssItemLabel: 'blocklyTreeLabel',
  cssTreeIcon: 'blocklyTreeIcon',
  cssExpandedFolderIcon: 'blocklyTreeIconOpen',
  cssFileIcon: 'blocklyTreeIconNone',
  cssSelectedRow: 'blocklyTreeSelected'
};


Blockly.Toolbox.prototype.init = function() {
  var workspace = this.workspace_;

  // Create an HTML container for the Toolbox menu.
  this.HtmlDiv = goog.dom.createDom('div', 'blocklyToolboxDiv');
  this.HtmlDiv.setAttribute('dir', workspace.RTL ? 'RTL' : 'LTR');
  document.body.appendChild(this.HtmlDiv);

  // Clicking on toolbar closes popups.
  Blockly.bindEvent_(this.HtmlDiv, 'mousedown', this,
      function(e) {
        if (Blockly.isRightButton(e) || e.target == this.HtmlDiv) {
          // Close flyout.
          Blockly.hideChaff(false);
        } else {
          // Just close popups.
          Blockly.hideChaff(true);
        }
      });
  var workspaceOptions = {
    disabledPatternId: workspace.options.disabledPatternId,
    parentWorkspace: workspace,
    RTL: workspace.RTL,
    svg: workspace.options.svg
  };
 
  this.flyout_ = new Blockly.Flyout(workspaceOptions);
  goog.dom.insertSiblingAfter(this.flyout_.createDom(), workspace.svgGroup_);
  this.flyout_.init(workspace);

  this.CONFIG_['cleardotPath'] = workspace.options.pathToMedia + '1x1.gif';
  this.CONFIG_['cssCollapsedFolderIcon'] =
      'blocklyTreeIconClosed' + (workspace.RTL ? 'Rtl' : 'Ltr');
  var tree = new Blockly.Toolbox.TreeControl(this, this.CONFIG_);
  this.tree_ = tree;
  tree.setShowRootNode(false);
  tree.setShowLines(false);
  tree.setShowExpandIcons(false);
  tree.setSelectedItem(null);
  this.hasColours_ = false;
  this.populate_(workspace.options.languageTree);
  tree.render(this.HtmlDiv);
  if (this.hasColours_) {
    this.addColour_(tree);
  }
  this.position();
};


Blockly.Toolbox.prototype.dispose = function() {
  this.flyout_.dispose();
  this.tree_.dispose();
  goog.dom.removeNode(this.HtmlDiv);
  this.workspace_ = null;
  this.lastCategory_ = null;
};


Blockly.Toolbox.prototype.position = function() {
  var treeDiv = this.HtmlDiv;
  if (!treeDiv) {
    // Not initialized yet.
    return;
  }
  var svg = this.workspace_.options.svg;
  var svgPosition = goog.style.getPageOffset(svg);
  var svgSize = Blockly.svgSize(svg);
  if (this.workspace_.RTL) {
    treeDiv.style.left =
        (svgPosition.x + svgSize.width - treeDiv.offsetWidth) + 'px';
  } else {
    treeDiv.style.left = svgPosition.x + 'px';
  }
  treeDiv.style.height = svgSize.height + 'px';
  treeDiv.style.top = svgPosition.y + 'px';
  this.width = treeDiv.offsetWidth;
  if (!this.workspace_.RTL) {
    // For some reason the LTR toolbox now reports as 1px too wide.
    this.width -= 1;
  }
  this.flyout_.position();
};


Blockly.Toolbox.prototype.populate_ = function(newTree) {
  var rootOut = this.tree_;
  rootOut.removeChildren();  // Delete any existing content.
  rootOut.blocks = [];
  var hasColours = false;
  function syncTrees(treeIn, treeOut) {
    for (var i = 0, childIn; childIn = treeIn.childNodes[i]; i++) {
      if (!childIn.tagName) {
        // Skip over text.
        continue;
      }
      switch (childIn.tagName.toUpperCase()) {
        case 'CATEGORY':
          var childOut = rootOut.createNode(childIn.getAttribute('name'));
          childOut.blocks = [];
          treeOut.add(childOut);
          var custom = childIn.getAttribute('custom');
          if (custom) {
            // Variables and procedures are special dynamic categories.
            childOut.blocks = custom;
          } else {
            syncTrees(childIn, childOut);
          }
          var hue = childIn.getAttribute('colour');
          if (goog.isString(hue)) {
            childOut.hexColour = Blockly.makeColour(hue);
            hasColours = true;
          } else {
            childOut.hexColour = '';
          }
          if (childIn.getAttribute('expanded') == 'true') {
            if (childOut.blocks.length) {
              rootOut.setSelectedItem(childOut);
            }
            childOut.setExpanded(true);
          }
          break;
        case 'SEP':
          treeOut.add(new Blockly.Toolbox.TreeSeparator());
          break;
        case 'BLOCK':
          treeOut.blocks.push(childIn);
          break;
      }
    }
  }
  syncTrees(newTree, this.tree_);
  this.hasColours_ = hasColours;

  if (rootOut.blocks.length) {
    throw 'Toolbox cannot have both blocks and categories in the root level.';
  }

  // Fire a resize event since the toolbox may have changed width and height.
  Blockly.fireUiEvent(window, 'resize');
};


Blockly.Toolbox.prototype.addColour_ = function(tree) {
  var children = tree.getChildren();
  for (var i = 0, child; child = children[i]; i++) {
    var element = child.getRowElement();
    if (element) {
      var border = '8px solid ' + (child.hexColour || '#ddd');
      if (this.workspace_.RTL) {
        element.style.borderRight = border;
      } else {
        element.style.borderLeft = border;
      }
    }
    this.addColour_(child);
  }
};


Blockly.Toolbox.prototype.clearSelection = function() {
  this.tree_.setSelectedItem(null);
};


Blockly.Toolbox.prototype.getRect = function() {
  // BIG_NUM is offscreen padding so that blocks dragged beyond the toolbox
  // area are still deleted.  Must be smaller than Infinity, but larger than
  // the largest screen size.
  var BIG_NUM = 10000000;
  // Assumes that the toolbox is on the SVG edge.  If this changes
  // (e.g. toolboxes in mutators) then this code will need to be more complex.
  if (this.workspace_.RTL) {
    var svgSize = Blockly.svgSize(this.workspace_.options.svg);
    var x = svgSize.width - this.width;
  } else {
    var x = -BIG_NUM;
  }
  return new goog.math.Rect(x, -BIG_NUM, BIG_NUM + this.width, 2 * BIG_NUM);
};

// Extending Closure's Tree UI.


Blockly.Toolbox.TreeControl = function(toolbox, config) {
  this.toolbox_ = toolbox;
  goog.ui.tree.TreeControl.call(this, goog.html.SafeHtml.EMPTY, config);
};
goog.inherits(Blockly.Toolbox.TreeControl, goog.ui.tree.TreeControl);


Blockly.Toolbox.TreeControl.prototype.enterDocument = function() {
  Blockly.Toolbox.TreeControl.superClass_.enterDocument.call(this);

  // Add touch handler.
  if (goog.events.BrowserFeature.TOUCH_ENABLED) {
    var el = this.getElement();
    Blockly.bindEvent_(el, goog.events.EventType.TOUCHSTART, this,
        this.handleTouchEvent_);
  }
};

Blockly.Toolbox.TreeControl.prototype.handleTouchEvent_ = function(e) {
  e.preventDefault();
  var node = this.getNodeFromEvent_(e);
  if (node && e.type === goog.events.EventType.TOUCHSTART) {
    // Fire asynchronously since onMouseDown takes long enough that the browser
    // would fire the default mouse event before this method returns.
    setTimeout(function() {
      node.onMouseDown(e);  // Same behaviour for click and touch.
    }, 1);
  }
};


Blockly.Toolbox.TreeControl.prototype.createNode = function(opt_html) {
  return new Blockly.Toolbox.TreeNode(this.toolbox_, opt_html ?
      goog.html.SafeHtml.htmlEscape(opt_html) : goog.html.SafeHtml.EMPTY,
      this.getConfig(), this.getDomHelper());
};


Blockly.Toolbox.TreeControl.prototype.setSelectedItem = function(node) {
  Blockly.removeAllRanges();
  var toolbox = this.toolbox_;
  if (node == this.selectedItem_ || node == toolbox.tree_) {
    return;
  }
  if (toolbox.lastCategory_) {
    toolbox.lastCategory_.getRowElement().style.backgroundColor = '';
  }
  if (node) {
    var hexColour = node.hexColour || '#57e';
    node.getRowElement().style.backgroundColor = hexColour;
    // Add colours to child nodes which may have been collapsed and thus
    // not rendered.
    toolbox.addColour_(node);
  }
  goog.ui.tree.TreeControl.prototype.setSelectedItem.call(this, node);
  if (node && node.blocks && node.blocks.length) {
    toolbox.flyout_.show(node.blocks);
    // Scroll the flyout to the top if the category has changed.
    if (toolbox.lastCategory_ != node) {
      toolbox.flyout_.scrollToTop();
    }
  } else {
    // Hide the flyout.
    toolbox.flyout_.hide();
  }
  if (node) {
    toolbox.lastCategory_ = node;
  }
};


Blockly.Toolbox.TreeNode = function(toolbox, html, opt_config, opt_domHelper) {
  goog.ui.tree.TreeNode.call(this, html, opt_config, opt_domHelper);
  if (toolbox) {
    var resize = function() {
      Blockly.fireUiEvent(window, 'resize');
    };
    // Fire a resize event since the toolbox may have changed width.
    goog.events.listen(toolbox.tree_,
        goog.ui.tree.BaseNode.EventType.EXPAND, resize);
    goog.events.listen(toolbox.tree_,
        goog.ui.tree.BaseNode.EventType.COLLAPSE, resize);
  }
};
goog.inherits(Blockly.Toolbox.TreeNode, goog.ui.tree.TreeNode);


Blockly.Toolbox.TreeNode.prototype.getExpandIconSafeHtml = function() {
  return goog.html.SafeHtml.create('span');
};


Blockly.Toolbox.TreeNode.prototype.onMouseDown = function(e) {
  // Expand icon.
  if (this.hasChildren() && this.isUserCollapsible_) {
    this.toggle();
    this.select();
  } else if (this.isSelected()) {
    this.getTree().setSelectedItem(null);
  } else {
    this.select();
  }
  this.updateRow();
};


Blockly.Toolbox.TreeNode.prototype.onDoubleClick_ = function(e) {
  // NOP.
};


Blockly.Toolbox.TreeSeparator = function() {
  Blockly.Toolbox.TreeNode.call(this, null, '',
      Blockly.Toolbox.TreeSeparator.CONFIG_);
};
goog.inherits(Blockly.Toolbox.TreeSeparator, Blockly.Toolbox.TreeNode);


Blockly.Toolbox.TreeSeparator.CONFIG_ = {
  cssTreeRow: 'blocklyTreeSeparator'
};
