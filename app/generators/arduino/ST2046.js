/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ST2046');

goog.require('Blockly.Blocks');

Blockly.Arduino['st2046_init'] = function(block) {


   Blockly.Arduino.definitions_['define_Adafruit_ST2046'] = '#include <stdint.h> \n #include <LCD.h> \n #include <SPI.h> \n #include <XPT2046.h> \n #include <Touch.h> \n #include <EEPROM.h> \n';
    
   Blockly.Arduino.definitions_['define_st2046'] = ' \n';
 
   Blockly.Arduino.setups_['setup_st2046']='SPI.setDataMode(SPI_MODE3); \n SPI.setBitOrder(MSBFIRST); \n  SPI.setClockDivider(SPI_CLOCK_DIV4); \n   SPI.begin(); \n  Tft.lcd_init(); \n'

  var code = '';
  return code;
};

Blockly.Arduino['st2046_backgroundcolor'] = function(block) {

  var Color = block.getFieldValue('COLOR');
	   
  var code = 'Tft.lcd_clear_screen('+Color+');\n';
  return code;
};
 
 
 

Blockly.Arduino['st2046_printTextln'] = function(block) {

  var texttoprint = Blockly.Arduino.valueToCode(block, 'text_to_print', Blockly.Arduino.ORDER_ATOMIC);
  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
  var Font = block.getFieldValue('FONT');

     var code = ' Tft.lcd_display_string('+x0+', '+y0+', (const uint8_t *)'+texttoprint+', FONT_'+Font+', '+Color+'); \n';
	   
 
  return code;
};

Blockly.Arduino['st2046_printTextlnv'] = function(block) {

  var texttoprint = Blockly.Arduino.valueToCode(block, 'text_to_print', Blockly.Arduino.ORDER_ATOMIC);
  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
  var Font = block.getFieldValue('FONT');
 
	 var code = ' Tft.lcd_display_num('+x0+', '+y0+', '+texttoprint+', 4, '+Font+', '+Color+'); \n';
 
  return code;
};

Blockly.Arduino['st2046_drawpixel'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
	   
  var code = 'Tft.lcd_draw_point('+x0+','+y0+','+Color+');\n'; 
  return code;
};


Blockly.Arduino['st2046_drawline'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var x1 = Blockly.Arduino.valueToCode(this, 'x1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y1 = Blockly.Arduino.valueToCode(this, 'y1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
	   
  var code = 'Tft.lcd_draw_line('+x0+','+y0+','+x1+','+y1+','+Color+');\n';
  return code;
};
 
Blockly.Arduino['st2046_drawrectangle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');

	var logic = this.getFieldValue('LOGIC');
  
   if(logic=='TRUE')
    var code = 'Tft.lcd_fill_rect('+x0+','+y0+','+width+','+height+','+Color+');\n';
  else
     var code = 'Tft.lcd_draw_rect('+x0+','+y0+','+width+','+height+','+Color+');\n';
 
  return code;
};

 

Blockly.Arduino['st2046_drawcircle'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var radius = Blockly.Arduino.valueToCode(this, 'radius', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var Color = block.getFieldValue('COLOR');
 
    var code = 'Tft.lcd_draw_circle('+x0+','+y0+','+radius+','+Color+');\n';
      
	   
  return code;
};

 Blockly.Arduino['st2046_inittah'] = function(block) {


  
    
  Blockly.Arduino.setups_['setup_st2046tah'] = ' Tp.tp_init(); \n Tp.tp_adjust(); \n Tp.tp_dialog(); \n';
 
 
  var code = ' int hwXpos = EEPROM.read(250) * 2; \n int hwYpos = EEPROM.read(251) * 2; \n Tp.tp_draw_board(); \n';
  return code;
};


Blockly.Arduino['st2046_properties'] = function(block) {
	
	var property = block.getFieldValue('Property');  
	
  if (property==1)	
	var code = 'hwXpos';  
	else if (property==2)
		var code = 'hwYpos';		
				 else
					var code = ' ';
				
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

 
 Blockly.Arduino['ST2046_bottom'] = function(block) {

  var x = Blockly.Arduino.valueToCode(this, 'ty', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y = Blockly.Arduino.valueToCode(this, 'by', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var mx = Blockly.Arduino.valueToCode(this, 'tx', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var my = Blockly.Arduino.valueToCode(this, 'bx', Blockly.Arduino.ORDER_ATOMIC) || '0';
 
  var code = ' if(hwYpos > '+x+' && hwYpos < '+mx+' && hwXpos > '+y+' && hwXpos < '+my+'){ \n ';
  return code;
};
Blockly.Arduino['ST2046_bottoms'] = function(block) {

    var code = 'EEPROM.write(250, 0); \n EEPROM.write(251, 0); \n } \n';
         
  return code;
};