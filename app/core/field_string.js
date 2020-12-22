
'use strict';

goog.provide('Blockly.FieldString');

goog.require('Blockly.FieldDropdown');
goog.require('Blockly.Msg');
goog.require('Blockly.String');
goog.require('goog.string');



Blockly.FieldString = function(varname, opt_changeHandler) {
  Blockly.FieldString.superClass_.constructor.call(this,
      Blockly.FieldString.dropdownCreate, null);
  this.setChangeHandler(opt_changeHandler);
  this.setValue(varname || '');
};
goog.inherits(Blockly.FieldString, Blockly.FieldDropdown);


Blockly.FieldString.prototype.setChangeHandler = function(handler) {
  var wrappedHandler;
  if (handler) {
    // Wrap the user's change handler together with the variable rename handler.
    wrappedHandler = function(value) {
      var v1 = handler.call(this, value);
      if (v1 === null) {
        var v2 = v1;
      } else {
        if (v1 === undefined) {
          v1 = value;
        }
        var v2 = Blockly.FieldString.dropdownChange.call(this, v1);
        if (v2 !== undefined) {
          v2 = v1;
        }
      }
      return v2 === value ? undefined : v2;
    };
  } else {
    wrappedHandler = Blockly.FieldString.dropdownChange;
  }
  Blockly.FieldString.superClass_.setChangeHandler.call(this, wrappedHandler);
};


Blockly.FieldString.prototype.init = function(block) {
  if (this.sourceBlock_) {
    // Dropdown has already been initialized once.
    return;
  }

  if (!this.getValue()) {
    // Variables without names get uniquely named for this workspace.
    if (block.isInFlyout) {
      var workspace = block.workspace.targetWorkspace;
    } else {
      var workspace = block.workspace;
    }
    this.setValue(Blockly.String.generateUniqueName(workspace));
  }
  Blockly.FieldString.superClass_.init.call(this, block);
};


Blockly.FieldString.prototype.getValue = function() {
  return this.getText();
};


Blockly.FieldString.prototype.setValue = function(text) {
  this.value_ = text;
  this.setText(text);
};


Blockly.FieldString.dropdownCreate = function() {
  if (this.sourceBlock_ && this.sourceBlock_.workspace) {
    var stringList =
        Blockly.String.allString(this.sourceBlock_.workspace);
  } else {
    var stringList = [];
  }
  // Ensure that the currently selected variable is an option.
  var name = this.getText();
  if (name && stringList.indexOf(name) == -1) {
    stringList.push(name);
  }
  stringList.sort(goog.string.caseInsensitiveCompare);
  stringList.push(Blockly.Msg.RENAME_VARIABLE);
  stringList.push(Blockly.Msg.NEW_VARIABLE);
  // Variables are not language-specific, use the name as both the user-facing
  // text and the internal representation.
  var options = [];
  for (var x = 0; x < stringList.length; x++) {
    options[x] = [stringList[x], stringList[x]];
  }
  return options;
};


Blockly.FieldString.dropdownChange = function(text) {
  function promptName(promptText, defaultText) {
    Blockly.hideChaff();
    var newVar = window.prompt(promptText, defaultText);
    // Merge runs of whitespace.  Strip leading and trailing whitespace.
    // Beyond this, all names are legal.
    if (newVar) {
      newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
      if (newVar == Blockly.Msg.RENAME_VARIABLE ||
          newVar == Blockly.Msg.NEW_VARIABLE) {
        // Ok, not ALL names are legal...
        newVar = null;
      }
    }
    return newVar;
  }
  var workspace = this.sourceBlock_.workspace;
  if (text == Blockly.Msg.RENAME_VARIABLE) {
    var oldVar = this.getText();
    text = promptName(Blockly.Msg.RENAME_VARIABLE_TITLE.replace('%1', oldVar),
                      oldVar);
    if (text) {
      Blockly.String.renameString(oldVar, text, workspace);
    }
    return null;
  } else if (text == Blockly.Msg.NEW_VARIABLE) {
    text = promptName(Blockly.Msg.NEW_VARIABLE_TITLE, '');
    // Since variables are case-insensitive, ensure that if the new variable
    // matches with an existing variable, the new case prevails throughout.
    if (text) {
      Blockly.String.renameString(text, text, workspace);
      return text;
    }
    return null;
  }
  return undefined;
};
