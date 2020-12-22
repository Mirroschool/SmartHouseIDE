
'use strict';

goog.provide('Blockly.Blocks.seriallcd');

goog.require('Blockly.Blocks');


Blockly.Blocks['grove_serial_lcd_print'] = {
  helpUrl: ' ',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_Serial)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("TEXT", 'String')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LCD_Print_Line1);
    this.appendValueInput("TEXT2", 'String')
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LCD_Print_Line2);
    this.appendValueInput("DELAY_TIME", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Delay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

//grove lcd power on/off
Blockly.Blocks['grove_serial_lcd_power'] = {
  helpUrl: ' ',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_Serial)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Power)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ONN, "ON"], [Blockly.Msg.OFFF, "OFF"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

//scroll left/right/no scroll/blink/noblink
Blockly.Blocks['grove_serial_lcd_effect'] = {
  helpUrl: ' ',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_Serial)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LCD_Effect)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LCD_Scroll_Left, "LEFT"], [Blockly.Msg.LCD_Scroll_Right, "RIGHT"], [Blockly.Msg.LCD_Scroll_Auto, "AUTO"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['lcd_setup'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Setup)
        .appendField(Blockly.Msg.LCDP_RS)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "RSPIN")
        .appendField(Blockly.Msg.LCDP_Enabled)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "EPIN")
        .appendField(Blockly.Msg.LCDP_D4)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "D4PIN")
        .appendField(Blockly.Msg.LCDP_D5)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "D5PIN")
        .appendField(Blockly.Msg.LCDP_D6)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "D6PIN")
        .appendField(Blockly.Msg.LCDP_D7)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "D7PIN");
    this.appendValueInput("COLUMNS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column);
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row);
    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lcd_print'] = {
  init: function() {
    this.setColour(125);
    this.appendValueInput("texttoprint")
        .setCheck(null)
        .appendField(Blockly.Msg.LCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lcd_clear'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lcd_home'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Home);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lcd_setcursor'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_SetCursor);
    this.appendValueInput("column")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Column);
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCDP_Row);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lcd_display'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Display);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lcd_nodisplay'] = {
  init: function() {
    this.setColour(125);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_noDiplay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};