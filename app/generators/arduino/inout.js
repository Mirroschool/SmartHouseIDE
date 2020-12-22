goog.provide('Blockly.Blocks.inout');

goog.require('Blockly.Blocks');


Blockly.Arduino['inout_highlow'] = function(block) {
  // Boolean values HIGH and LOW.
  var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['inout_digital_write'] = function(block) {
    
    //   var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
    return code;
};



 Blockly.Arduino['inout_digital_read'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['inout_analog_read'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['inout_analog_write'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  // TODO: Assemble JavaScript into code variable.
  var code = 'analogWrite('+dropdown_pin+','+value+');\n';
  return code;
};

Blockly.Arduino['inout_buildin_led'] = function(block) {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_13'] = 'pinMode(13, OUTPUT);';
  var code = 'digitalWrite(13,'+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino['advanced_pulsein'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'pulseIn('+dropdown_pin+','+dropdown_stat+ ');';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['inout_analog_write_variable'] = function(block) {
  var dropdown_pinv = block.getFieldValue('STATv');
  var value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
//Blockly.Arduino.setups_['setup_output_'] = 'pinMode(2, OUTPUT);\n pinMode(3, OUTPUT);\n pinMode(4, OUTPUT);\n pinMode(5, OUTPUT);\n pinMode(6, OUTPUT);\n pinMode(7, OUTPUT);\n pinMode(8, OUTPUT);\n pinMode(9, OUTPUT);\n pinMode(10, OUTPUT);\n pinMode(11, OUTPUT);\n pinMode(12, OUTPUT);\n pinMode(13, OUTPUT);\n  ';
  // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode('+value+', OUTPUT);\n digitalWrite('+value+','+dropdown_pinv+');\n';
  return code;
};


Blockly.Arduino['inout_analog_reference'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');

  Blockly.Arduino.definitions_['include_analog_reference'] = 'uint16_t raw_bandgap = 0; \n float volt_battery = 0.0; \n';
  
  if (dropdown_pin==0)
	  Blockly.Arduino.setups_['include_analog_analogReference'] = 'analogReference(DEFAULT); \n';
	  var code = 'analogRead(14)';
if (dropdown_pin==1)
Blockly.Arduino.setups_['include_analog_analogReference'] = 'analogReference(INTERNAL); \n';
	  var code = 'analogRead(14)';
if (dropdown_pin==2)
Blockly.Arduino.setups_['include_analog_analogReference'] = 'analogReference(INTERNAL1V1); \n';
	  var code = 'analogRead(14)';
if (dropdown_pin==3)
Blockly.Arduino.setups_['include_analog_analogReference'] = 'analogReference(INTERNAL2V56); \n';
	  var code = 'analogRead(14)';
if (dropdown_pin==4)
Blockly.Arduino.setups_['include_analog_analogReference'] = 'analogReference(EXTERNAL); \n';
	  var code = 'analogRead(14)';
	  
//uint16_t raw_bandgap = 0;      
//float volt_battery = 0.0;
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
//  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};