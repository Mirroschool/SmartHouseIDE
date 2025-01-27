/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/
goog.provide('Blockly.Blocks.DisplayTM1637');

goog.require('Blockly.Blocks');

Blockly.Arduino['DisplayTM1637_init'] = function(block) {
	
  var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 	
  var pin_clk = this.getFieldValue('PIN_CLK');
  var pin_dio = this.getFieldValue('PIN_DIO');
  var britghness = Blockly.Arduino.valueToCode(this, 'Britghness', Blockly.Arduino.ORDER_ATOMIC);
  
  
 Blockly.Arduino.definitions_['define_TM1637_library'] = '#include "TM1637.h"';
 Blockly.Arduino.definitions_['define_TM1637_' + numberdisplay] = 'TM1637 tm1637('+pin_clk+','+pin_dio+');\n';
  
  var code='tm1637.init();\n  tm1637.set(BRIGHT_TYPICAL);\n';
  
  return code;
   
};
/*
Blockly.Arduino['DisplayTM1637_activate'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 		
 var power = this.getFieldValue('TM1637_POWER'); 	
  
 if (power==1) 
    var code = 'tm1637_'+numberdisplay+'.activar();\n';
 else
	var code = 'tm1637_'+numberdisplay+'.desactivar();\n';
 
  return code;
};

Blockly.Arduino['DisplayTM1637_clear'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 		

  var code = 'tm1637_'+numberdisplay+'.borrar();\n';
  return code;
};


Blockly.Arduino['DisplayTM1637_setBrightness'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 		
  var britghness = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'tm1637_'+numberdisplay+'.cambiar_brillo('+britghness+');\n';
  return code;
};

Blockly.Arduino['DisplayTM1637_set_segment'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 		
 var value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
 var digit = Blockly.Arduino.valueToCode(this, 'Digit', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'tm1637_'+numberdisplay+'.escribir_segmento('+digit+','+value+');\n';
  return code;
};
*/
Blockly.Arduino['DisplayTM1637_set_digit'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 	
 var value = Blockly.Arduino.valueToCode(this, 'valuenumber', Blockly.Arduino.ORDER_ATOMIC);
 var digit = Blockly.Arduino.valueToCode(this, 'Digit', Blockly.Arduino.ORDER_ATOMIC);
 var dp = this.getFieldValue('TM1637_POINT'); 	
 //tm1637.display(3,15);
  var code = 'tm1637.display('+digit+','+value+');\n';
 
 return code;
};


Blockly.Arduino['DisplayTM1637_set_completenumber'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 	
 var value = Blockly.Arduino.valueToCode(this, 'completenumber', Blockly.Arduino.ORDER_ATOMIC);
// tm1637.display(1234);
  
  var code = 'tm1637.display('+value+');\n';
 
 return code;
};

Blockly.Arduino['DisplayTM1637_set_hourmin'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 	
 var hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
 var min = Blockly.Arduino.valueToCode(this, 'min', Blockly.Arduino.ORDER_ATOMIC);
 var dp = this.getFieldValue('TM1637_POINT'); 	
  //tm1637.point(POINT_ON); tm1637.point(POINT_OFF);
  var code = 'tm1637.point('+dp+');\n';
 
 return code;
};


/*
Blockly.Arduino['DisplayTM1637_set_minsecond'] = function(block) {
 var numberdisplay = this.getFieldValue('TM1637_NUMBER'); 	
 var sec = Blockly.Arduino.valueToCode(this, 'second', Blockly.Arduino.ORDER_ATOMIC);
 var min = Blockly.Arduino.valueToCode(this, 'min', Blockly.Arduino.ORDER_ATOMIC);
 var dp = this.getFieldValue('TM1637_POINT'); 	
  
  var code = 'tm1637_'+numberdisplay+'.escribir_horas_minutos('+min+','+sec+','+dp+');\n';
 
 return code;
};


*/
