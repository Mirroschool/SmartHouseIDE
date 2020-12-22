/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.NRF24L01');

goog.require('Blockly.Blocks');

Blockly.Arduino['nrf24l01_init'] = function(block) {

   var pin_CE = block.getFieldValue('PIN_CE');  
   var pin_CS = block.getFieldValue('PIN_CS'); 
    
   Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>\n';
   Blockly.Arduino.definitions_['define_RF24L01'] = '#include <nRF24L01.h>\n';
   Blockly.Arduino.definitions_['define_RF24'] = '#include <RF24.h>\n';
 
   Blockly.Arduino.definitions_['define_var_NRF24L01'] = 'RF24 radio('+pin_CE+','+pin_CS+');\n';
 
   Blockly.Arduino.setups_['nrf24l01_begin']='radio.begin();\n'
 
   var code = '';
   return code;
};

Blockly.Arduino['nrf24l01_s'] = function(block) {

   var nrfTEXT1 = block.getFieldValue('nrfTEXT1');  
   var nrf_OPERATION1 = block.getFieldValue('nrf_OPERATION1'); 
   var nrf_OPERATION2 = block.getFieldValue('nrf_OPERATION2'); 
	var nrfTEXT2 = block.getFieldValue('nrfTEXT2');    

   Blockly.Arduino.setups_['nrf24l01_s']=' radio.setChannel('+nrfTEXT1+');  \n  radio.setDataRate (RF24_'+nrf_OPERATION1+'); \n radio.setPALevel(RF24_PA_'+nrf_OPERATION2+'); \n radio.openWritingPipe('+nrfTEXT2+'); \n'
//   radio.setChannel(100);                // Указываем канал передачи (от 0 до 126)
//  radio.setDataRate (RF24_1MBPS);       // Указываем скорость передачи (250KBPS, 1MBPS, 2MBPS)
//  radio.setPALevel(RF24_PA_HIGH);       // Указываем мощность передатчика (MIN=-18dBm, LOW=-12dBm, HIGH=-6dBm, MAX=0dBm)
//  radio.openWritingPipe(0x0123456789LL);// Задаем идентификатором 0x0123456789LL для передачи данных данных 

  
  
   var code = '';
   return code;
};


Blockly.Arduino['nrf24l01_writepipe'] = function(block) {
  
  var writepipe = Blockly.Arduino.valueToCode(block, 'writepipe', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_var_writepipe'] = 'const byte address_write[6] = '+writepipe+';\n';
  
  Blockly.Arduino.setups_['nrf24l01_writepipe']='radio.openWritingPipe(address_write);\n'
  
  var code = '';
  return code;
};

Blockly.Arduino['nrf24l01_readpipe'] = function(block) {
  
  var readpipe = Blockly.Arduino.valueToCode(block, 'readpipe', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_var_readpipe'] = 'const byte address_read[6] = '+readpipe+';\n';
  
  Blockly.Arduino.setups_['nrf24l01_readpipe']='radio.openReadingPipe(1,address_read);\n'
  
  var code = '';
  return code;
};

Blockly.Arduino['nrf24l01_startlistening'] = function(block) {
  
  var code = 'radio.startListening();\n';
  return code;
};

Blockly.Arduino['nrf24l01_stoplistening'] = function(block) {
  
  var code = 'radio.stopListening();\n';
  return code;
};

Blockly.Arduino['nrf24l01_sendvar'] = function(block) {

  var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
  var code = ' radio.write(&'+variable+',sizeof('+variable+'));\n';
 
  return code;
};

Blockly.Arduino['nrf24l01_recvvar'] = function(block) {

  var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
  var code = ' radio.read(&'+variable+',sizeof('+variable+'));\n';
 
  return code;
};



Blockly.Arduino['nrf24l01_recv_available'] = function(block) {
	
   
  var code = 'radio.available()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

