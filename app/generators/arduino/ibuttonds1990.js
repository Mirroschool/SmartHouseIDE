/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.RotaryEncoder');

goog.require('Blockly.Blocks');



Blockly.Arduino['ds1990_Write'] = function(block) {
  
  var number = this.getFieldValue('RE_NUMBER');
  var writenumber1 =Blockly.Arduino.valueToCode(this, 'Writecounter', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber2 =Blockly.Arduino.valueToCode(this, 'Writecounter1', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber3 =Blockly.Arduino.valueToCode(this, 'Writecounter2', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber4 =Blockly.Arduino.valueToCode(this, 'Writecounter3', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber5 =Blockly.Arduino.valueToCode(this, 'Writecounter4', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber6 =Blockly.Arduino.valueToCode(this, 'Writecounter5', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber7 =Blockly.Arduino.valueToCode(this, 'Writecounter6', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber8 =Blockly.Arduino.valueToCode(this, 'Writecounter7', Blockly.Arduino.ORDER_ATOMIC);
  
Blockly.Arduino.definitions_['include_ds1990_Write'] = '#include <OneWire.h> \n #define pin '+number+'    \n OneWire ibutton (pin);  \n byte addr[8];  \n int writeByte(byte data){ \n  int data_bit; \n for(data_bit=0; data_bit<8; data_bit++){ \n  if (data & 1){ \n     digitalWrite(pin, LOW); pinMode(pin, OUTPUT); \n     delayMicroseconds(60); \n     pinMode(pin, INPUT); digitalWrite(pin, HIGH); \n    delay(10);  \n   } else { \n     digitalWrite(pin, LOW); pinMode(pin, OUTPUT); \n      pinMode(pin, INPUT); digitalWrite(pin, HIGH); \n      delay(10); \n   } \n   data = data >> 1; \n } \n  return 0; \n} \n';
Blockly.Arduino.setups_['setup_include_ds1990']='Serial.begin(9600);\n';
var code = 'ibutton.skip(); \n ibutton.reset(); \n ibutton.write(0x33); \n     ibutton.skip(); \n     ibutton.reset(); \n     ibutton.write(0xD1); \n     digitalWrite(pin, LOW);  \n     pinMode(pin, OUTPUT);  \n     delayMicroseconds(60); \n     pinMode(pin, INPUT);  \n     digitalWrite(pin, HIGH);  \n     delay(10); \n     byte newID[8] = {0x44, 0x0F, 0xC8, 0x0B, 0x00, 0x00, 0x00, 0x2C}; \n  newID[0] = '+writenumber1+'; \n  newID[1] = '+writenumber2+'; \n  newID[2] = '+writenumber3+'; \n  newID[3] = '+writenumber4+'; \n  newID[4] = '+writenumber5+'; \n  newID[5] = '+writenumber6+'; \n  newID[6] = '+writenumber7+'; \n  newID[7] = '+writenumber8+'; \n    Serial.println();  \n     ibutton.skip(); \n     ibutton.reset(); \n     ibutton.write(0xD5); \n     for (byte x = 0; x<8; x++){ \n       writeByte(newID[x]); \n       Serial.print("*"); \n     } \n     ibutton.reset(); \n     ibutton.write(0xD1); \n     digitalWrite(pin, LOW);  \n     pinMode(pin, OUTPUT);  \n     delayMicroseconds(10); \n     pinMode(pin, INPUT);  \n     digitalWrite(pin, HIGH);  \n     delay(10); \n Serial.print(" "); \n   ibutton.skip();ibutton.reset();ibutton.write(0x33); \n Serial.print("Code recorded:"); \n     for (byte x=0; x<8; x++){ \n       Serial.print(" "); \n     Serial.print(ibutton.read()); \n    } \n   Serial.println(" ok"); \n delay(2000); \n  \n';
return code;
};

Blockly.Arduino['ds1990_Read'] = function(block) {
  
  var code = '  if ( !ibutton.search(addr) ) { \n return; \n } \n';
   
  return code;
};

Blockly.Arduino['ds1990_Read1'] = function(block) {
   
   var number = this.getFieldValue('RE_NUMBER');  
   var numberpin = this.getFieldValue('NUMBER'); 
   Blockly.Arduino.definitions_['include_ds1990_Write'] = '#include <OneWire.h> \n #define pin '+numberpin+'    \n OneWire ibutton (pin);  \n byte addr[8];  \n int writeByte(byte data){ \n  int data_bit; \n for(data_bit=0; data_bit<8; data_bit++){ \n  if (data & 1){ \n     digitalWrite(pin, LOW); pinMode(pin, OUTPUT); \n     delayMicroseconds(60); \n     pinMode(pin, INPUT); digitalWrite(pin, HIGH); \n    delay(10);  \n   } else { \n     digitalWrite(pin, LOW); pinMode(pin, OUTPUT); \n      pinMode(pin, INPUT); digitalWrite(pin, HIGH); \n      delay(10); \n   } \n   data = data >> 1; \n } \n  return 0; \n} \n';

   var code = 'addr['+number+']';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

 