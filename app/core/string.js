
'use strict';

goog.provide('Blockly.String');

// TODO(scr): Fix circular dependencies
// goog.require('Blockly.Block');
goog.require('Blockly.Workspace');
goog.require('goog.string');



Blockly.String.NAME_TYPE = 'STRING';


Blockly.String.allString = function(root) {
  var blocks;
  if (root.getDescendants) {
    // Root is Block.
    blocks = root.getDescendants();
  } else if (root.getAllBlocks) {
    // Root is Workspace.
    blocks = root.getAllBlocks();
  } else {
    throw 'Not Block or Workspace: ' + root;
  }
  var variableHash = Object.create(null);
  // Iterate through every block and add each variable to the hash.
  for (var x = 0; x < blocks.length; x++) {
    if (blocks[x].getString) {
      var blockString = blocks[x].getString();
      for (var y = 0; y < blockString.length; y++) {
        var varName = blockString[y];
        // Variable name may be null if the block is only half-built.
        if (varName) {
          variableHash[varName.toLowerCase()] = varName;
        }
      }
    }
  }
  // Flatten the hash into a list.
  var stringList = [];
  for (var name in variableHash) {
    stringList.push(variableHash[name]);
  }
  return stringList;
};


Blockly.String.renameString = function(oldName, newName, workspace) {
  var blocks = workspace.getAllBlocks();
  // Iterate through every block.
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].renameString) {
      blocks[i].renameString(oldName, newName);
    }
  }
};


Blockly.String.flyoutCategory = function(workspace) {

  var stringList = Blockly.String.allString(workspace);
  stringList.sort(goog.string.caseInsensitiveCompare);
  // In addition to the user's variables, we also want to display the default
  // variable name at the top.  We also don't want this duplicated if the
  // user has created a variable of the same name.
  goog.array.remove(stringList, Blockly.Msg.VARIABLES_DEFAULT_NAME);
  stringList.unshift(Blockly.Msg.VARIABLES_DEFAULT_NAME);

  var xmlList = [];
  
    //
      if (Blockly.Blocks['string_declare']) {
      // <block type="variables_set" gap="8">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'string_declare');
      xmlList.push(block);
    }
  //
  
  //OSCAR -->> Cuidado!!
  //Para que no liste por cada string lo mismo, ya que dentro lleva el menu
  
  var loop;
  if (stringList.length>2)
   loop =2;
 else
   loop=stringList.length

 //for (var i = 1; i < stringList.length; i++) {
  for (var i = 1; i < loop; i++) {
    if (Blockly.Blocks['string_set']) {
      // <block type="variables_set" gap="8">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'string_set');
      if (Blockly.Blocks['string_get']) {
        block.setAttribute('gap',8);
      }
      var field = goog.dom.createDom('field', null, stringList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
	
	
    if (Blockly.Blocks['string_get']) {
      // <block type="variables_get" gap="24">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'string_get');
      if (Blockly.Blocks['string_set']) {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, stringList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    //
     if (Blockly.Blocks['string_charat']) {
      // <block type="variables_get" gap="24">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'string_charat');
      if (Blockly.Blocks['string_charat']) {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, stringList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    //
    //
     if (Blockly.Blocks['string_compareto']) {
      // <block type="variables_get" gap="24">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'string_compareto');
      if (Blockly.Blocks['string_compareto']) {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, stringList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    //
    //
     if (Blockly.Blocks['string_concat']) {
      // <block type="variables_get" gap="24">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'string_concat');
      if (Blockly.Blocks['string_concat']) {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, stringList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    //
    //
     if (Blockly.Blocks['string_lengthof']) {
      // <block type="variables_get" gap="24">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'string_lengthof');
      if (Blockly.Blocks['string_lengthof']) {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, stringList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    //    

    //
     if (Blockly.Blocks['string_endswith']) {
      // <block type="variables_get" gap="24">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'string_endswith');
      if (Blockly.Blocks['string_endswith']) {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, stringList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    //    

    //
     if (Blockly.Blocks['string_equalto']) {
      // <block type="variables_get" gap="24">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'string_equalto');
      if (Blockly.Blocks['string_equalto']) {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, stringList[i]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    //    
        
        
    
  }
  return xmlList;
};


Blockly.String.generateUniqueName = function(workspace) {
  var stringList = Blockly.String.allString(workspace);
  var newName = '';
  if (stringList.length) {
    var nameSuffix = 1;
  //  var letters = 'ijkmnopqrstuvwxyzabcdefgh';  // No 'l'.
	var letters = 'abcdefgh';  // No 'l'.
    var letterIndex = 0;
    var potName = letters.charAt(letterIndex);
    while (!newName) {
      var inUse = false;
      for (var i = 0; i < stringList.length; i++) {
        if (stringList[i].toLowerCase() == potName) {
          // This potential name is already used.
          inUse = true;
          break;
        }
      }
      if (inUse) {
        // Try the next potential name.
        letterIndex++;
        if (letterIndex == letters.length) {
          // Reached the end of the character sequence so back to 'i'.
          // a new suffix.
          letterIndex = 0;
          nameSuffix++;
        }
        potName = letters.charAt(letterIndex);
        if (nameSuffix > 1) {
          potName += nameSuffix;
        }
      } else {
        // We can use the current potential name.
        newName = potName;
      }
    }
  } else {
    newName = 'a';
  }
  return newName;
};
