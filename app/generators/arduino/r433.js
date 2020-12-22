/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.catr433');

goog.require('Blockly.Blocks');

 

 

Blockly.Arduino['catr433_sendvar'] = function(block) {
var dropdown_pin = this.getFieldValue('PIN');
var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
    Blockly.Arduino.definitions_['define_sendvar'] = '  #include <VirtualWire.h> \n char msg[3] = { }; \n const int transmit_pin = '+dropdown_pin+'; \n int i = 0; \n  ';
  
    Blockly.Arduino.setups_['catr433_sendvar'] = ' vw_set_tx_pin(transmit_pin); \n    vw_set_ptt_inverted(true); \n    vw_setup(2000);  \n  '  ;

	var code = 'vw_send((uint8_t *)msg, '+variable+'+1); \n vw_wait_tx(); \n';
  
return code;
};

Blockly.Arduino['catr433_recvvar'] = function(block) {
var dropdown_pin = this.getFieldValue('PIN');
var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
    Blockly.Arduino.definitions_['define_sendvar'] = ' #include <VirtualWire.h> \n const int receive_pin = '+dropdown_pin+'; \n int ivins; \n  ';
  
    Blockly.Arduino.setups_['catr433_sendvar'] = '    vw_set_rx_pin(receive_pin); \n vw_set_ptt_inverted(true);  \n     vw_setup(2000);  \n    vw_rx_start();   \n  '  ;

	var code = ' uint8_t buf[VW_MAX_MESSAGE_LEN]; \n  uint8_t buflen = VW_MAX_MESSAGE_LEN; \n  if (vw_get_message(buf, &buflen)) \n { \n for (ivins = 0; ivins < buflen-1; ivins++) \n { \n  } \n } \n  '+variable+' = ivins;  \n';
 
return code;
};

 