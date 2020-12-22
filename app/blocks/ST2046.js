

'use strict';

goog.provide('Blockly.Blocks.ST2046');

goog.require('Blockly.Blocks');


Blockly.Blocks['st2046_init'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/2n4tft.png",53,38))
        .appendField(Blockly.Msg.ST2046_init)
		.appendField(Blockly.Msg.ST2046_init2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};

Blockly.Blocks['st2046_backgroundcolor'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/2n4tft.png",35,25))
        .appendField(Blockly.Msg.ST2046_name)
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST2046_FILLBACKGROUND)
		.appendField(new Blockly.FieldDropdown([["WHITE","WHITE"],["BLACK", "BLACK"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "COLOR")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};


 
Blockly.Blocks['st2046_printTextln'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/2n4tft.png",35,25))
        .appendField(Blockly.Msg.ST2046_name)
		
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Y0)
	this.appendValueInput("text_to_print")
	    .appendField(Blockly.Msg.ST2046_PrintTextLN)
        .setCheck("String")
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST2046_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["BLACK","BLACK"],["WHITE", "WHITE"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "COLOR")
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST2046_font)
		.appendField(new Blockly.FieldDropdown([["12","1206"],["16", "1608"]]), "FONT")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};

Blockly.Blocks['st2046_printTextlnv'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/2n4tft.png",35,25))
        .appendField(Blockly.Msg.ST2046_name)
		
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Y0);
	this.appendValueInput("text_to_print")
	    .appendField(Blockly.Msg.ST2046_PrintTextLN1)
        .setCheck("String")
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST2046_TEXTCOLOR2)
		.appendField(new Blockly.FieldDropdown([["BLACK","BLACK"],["WHITE", "WHITE"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "COLOR")
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST2046_font)
		.appendField(new Blockly.FieldDropdown([["12","12"],["16", "16"]]), "FONT")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};

Blockly.Blocks['st2046_drawpixel'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/2n4tft.png",35,25))
        .appendField(Blockly.Msg.ST2046_name)
		.appendField(Blockly.Msg.ST2046_DrawPixel)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Y0);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST2046_TEXTCOLOR2)
			.appendField(new Blockly.FieldDropdown([["BLACK","BLACK"],["WHITE", "WHITE"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "COLOR")
this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};

Blockly.Blocks['st2046_drawline'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/2n4tft.png",35,25))
        .appendField(Blockly.Msg.ST2046_name)
		.appendField(Blockly.Msg.ST2046_Drawlinefrom)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Y0);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.ST2046_Drawlineto)
	this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_X1);
	this.appendValueInput("y1")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Y1);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST2046_TEXTCOLOR2)
			.appendField(new Blockly.FieldDropdown([["BLACK","BLACK"],["WHITE", "WHITE"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "COLOR")
this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};

Blockly.Blocks['st2046_drawrectangle'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/2n4tft.png",35,25))
        .appendField(Blockly.Msg.ST2046_name)
		.appendField(Blockly.Msg.ST2046_Drawrectangle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Y0);
	this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Drawrectanglewidth);
	this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Drawrectangleheight);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST2046_TEXTCOLOR2)
			.appendField(new Blockly.FieldDropdown([["BLACK","BLACK"],["WHITE", "WHITE"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "COLOR")
this.appendDummyInput()
	    .appendField(Blockly.Msg.ST2046_Drawfill)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   // this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
   this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};

 

Blockly.Blocks['st2046_drawcircle'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/2n4tft.png",35,25))
        .appendField(Blockly.Msg.ST2046_name)
		.appendField(Blockly.Msg.ST2046_Drawcircle)
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_X0);
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Y0);
	this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_Drawcircleradius);
	this.appendDummyInput()	
        .appendField(Blockly.Msg.ST2046_TEXTCOLOR2)
			.appendField(new Blockly.FieldDropdown([["BLACK","BLACK"],["WHITE", "WHITE"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "COLOR")
 
     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};

 Blockly.Blocks['st2046_inittah'] = {
   init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tfttah.png",53,38))
        .appendField(Blockly.Msg.ST2046_initth)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};

Blockly.Blocks['st2046_properties'] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi'),
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tfttah.png",35,25))
		.appendField(Blockly.Msg.ST2046_initth)
	this.appendDummyInput()
		.appendField(Blockly.Msg.ST2046_properties)
        .appendField(new Blockly.FieldDropdown([["PosX", "1"], ["PosY", "2"]]), "Property")   
	this.setOutput(true, 'Number');
	this.appendDummyInput()
	this.setInputsInline(true);
    this.setTooltip('');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};

 
 Blockly.Blocks['ST2046_bottom'] = {
   init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tfttah.png",35,25))
        .appendField(Blockly.Msg.ST2046_bottom)
	this.appendValueInput("ty")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_ty);
	this.appendValueInput("by")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_by);
	this.appendValueInput("tx")
        .setCheck("Number")
        .appendField(Blockly.Msg.ST2046_tx);
	this.appendValueInput("bx")
        .setCheck("Number")
		.appendField(Blockly.Msg.ST2046_bx);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};
 Blockly.Blocks['ST2046_bottoms'] = {
   init: function() {
    this.setColour(220);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("images/tfttah.png",35,25))
        .appendField(Blockly.Msg.ST2046_bottoms)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-displeya-tft-st2046-128h128-spi');
	this.setHelpUrl(Blockly.Msg.ST2046_Url_1);
  }
};
