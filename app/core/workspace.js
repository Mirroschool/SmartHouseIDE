
'use strict';

goog.provide('Blockly.Workspace');

goog.require('goog.math');



Blockly.Workspace = function(opt_options) {
  
  this.options = opt_options || {};
  
  this.RTL = !!this.options.RTL;
 
  this.topBlocks_ = [];
};


Blockly.Workspace.prototype.rendered = false;


Blockly.Workspace.prototype.dispose = function() {
  this.clear();
};


Blockly.Workspace.SCAN_ANGLE = 3;


Blockly.Workspace.prototype.addTopBlock = function(block) {
  this.topBlocks_.push(block);
  this.fireChangeEvent();
};


Blockly.Workspace.prototype.removeTopBlock = function(block) {
  var found = false;
  for (var child, i = 0; child = this.topBlocks_[i]; i++) {
    if (child == block) {
      this.topBlocks_.splice(i, 1);
      found = true;
      break;
    }
  }
  if (!found) {
    throw 'Block not present in workspace\'s list of top-most blocks.';
  }
  this.fireChangeEvent();
};


Blockly.Workspace.prototype.getTopBlocks = function(ordered) {
  // Copy the topBlocks_ list.
  var blocks = [].concat(this.topBlocks_);
  if (ordered && blocks.length > 1) {
    var offset = Math.sin(goog.math.toRadians(Blockly.Workspace.SCAN_ANGLE));
    if (this.RTL) {
      offset *= -1;
    }
    blocks.sort(function(a, b) {
      var aXY = a.getRelativeToSurfaceXY();
      var bXY = b.getRelativeToSurfaceXY();
      return (aXY.y + offset * aXY.x) - (bXY.y + offset * bXY.x);
    });
  }
  return blocks;
};


Blockly.Workspace.prototype.getAllBlocks = function() {
     var blocks = this.getTopBlocks(false);
  for (var i = 0; i < blocks.length; i++) {
      
    blocks.push.apply(blocks, blocks[i].getChildren());
  }
  return blocks;
};


Blockly.Workspace.prototype.getAllBlocksADEL = function() {
     var blocks = this.getTopBlocks(false);
  for (var i = 0; i < blocks.length; i++) {
      
    //blocks.push.apply(blocks, blocks[i].getChildren());
  }
  return blocks;
};


Blockly.Workspace.prototype.clear = function() {
  while (this.topBlocks_.length) {
    this.topBlocks_[0].dispose();
  }
};


Blockly.Workspace.prototype.getWidth = function() {
  return 0;
};


Blockly.Workspace.prototype.getBlockById = function(id) {
  // If this O(n) function fails to scale well, maintain a hash table of IDs.
  //ADEL
     
  var blocks = this.getAllBlocks();
  for (var i = 0, block; block = blocks[i]; i++) {
      
    if (block.id == id) {
      return block;
    }
  }
  return null;
};


Blockly.Workspace.prototype.remainingCapacity = function() {
  if (isNaN(this.options.maxBlocks)) {
    return Infinity;
  }
  return this.options.maxBlocks - this.getAllBlocks().length;
};


Blockly.Workspace.prototype.fireChangeEvent = function() {
  // NOP.
};

// Export symbols that would otherwise be renamed by Closure compiler.
Blockly.Workspace.prototype['clear'] = Blockly.Workspace.prototype.clear;
