/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.remoteControlMRT');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_remotecontrolMRT'] = function(block) {
   
  var Channel = this.getFieldValue('CHANNEL');
  
  Blockly.Arduino.definitions_['include_enableinterrupt'] = '#include <IRremote.h>  \n IRsend irsend; \n';
  
  var code = 'irsend.sendRC6('+Channel+',8); \n';  
  return code;
};

Blockly.Arduino['Init_remotecontrolMRT_pindedicated'] = function(block) {
  
  Blockly.Arduino.definitions_['include_mrtremote'] = '#include <MrtDuino.h>\n';
  Blockly.Arduino.definitions_['mrtremote_variables'] = 'IRrecv irrecv1(10);\n' +
'int ir_id;\n' +
'int remote_button;\n';

Blockly.Arduino.definitions_['mrtremote_ir_id_set'] = 'MrtIdSetting ir_id_set;\n';
	
Blockly.Arduino.setups_['setup_mrtremote'] = 'irrecv1.enableIRIn();\n';	
		
	 var code ='';	
  return code;
};

Blockly.Arduino['Read_remotecontrolMRT_pindedicated'] = function(block) {
  
  	 
  var code = 'ir_id = ir_id_set.ReadId(5);\n'+
  'remote_button = irrecv1.mrtRemoteLoop(ir_id);\n';
  
  
  return code;
};



Blockly.Arduino['IR_Remote_Key'] = function(block) {
  var key_detected = this.getFieldValue('KEY');
    
  var code = 'RC('+key_detected+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['IR_Remote_Key_pindedicated'] = function(block) {
  var key_detected = this.getFieldValue('KEY');
    
  var code = 'irrecv1.mrtRemoteStateCheck(remote_button, '+key_detected+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




Blockly.Arduino['Init_generalremotecontrol'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
   
  Blockly.Arduino.definitions_['include_IRremote'] = '#include <IRremote.h>\n';
  Blockly.Arduino.definitions_['reception_function'] = 'IRrecv ir_rx('+dropdown_pin+');\n'+
'decode_results ir_rx_results;\n'+
'\n'+
'unsigned long fnc_ir_rx_decode()\n'+
' {\n'+
'  bool decoded=false;\n'+
'  if( ir_rx.decode(&ir_rx_results))\n'+
'	{\n'+
'		decoded=true;\n'+
'		ir_rx.resume();\n'+
'	}\n'+
'	if(decoded) \n'+
'		return ir_rx_results.value; \n'+
'	else \n'+
'		return 0;\n'+
' }\n';
  
  
  Blockly.Arduino.setups_['setup_genericRC'] = 'ir_rx.enableIRIn();\n';
  	 	 
  var code='(unsigned long)fnc_ir_rx_decode()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



