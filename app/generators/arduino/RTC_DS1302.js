/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.RTC_DS1302');

goog.require('Blockly.Blocks');

Blockly.Arduino['Init_RTC_ds1302'] = function(block) {
  var pin_rst = this.getFieldValue('PIN_RST');
  var pin_dat = this.getFieldValue('PIN_DAT');
  var pin_clk = this.getFieldValue('PIN_CLK'); 
  
  Blockly.Arduino.definitions_['include_DS1302'] = '#include <iarduino_RTC.h>\n';
  
  Blockly.Arduino.definitions_['init_ds1302'] = 'iarduino_RTC time(RTC_DS1302, '+pin_rst+','+pin_clk+','+pin_dat+');\n'+
  ' ';
    
 // Blockly.Arduino.setups_['setup_ds1302'] = 'rtc.halt(false);\nrtc.writeProtect(false);\n';
  
//#include <iarduino_RTC.h>
 // iarduino_RTC time(RTC_DS1302, 8, 6, 7);

  
  var code=' time.begin();\n';
  return code;
};

Blockly.Arduino['DateTime_RTC_ds1302'] = function(block) {
	
	
  var day = Blockly.Arduino.valueToCode(this, 'DS1302_DAY', Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(this, 'DS1302_MONTH', Blockly.Arduino.ORDER_ATOMIC);
  var year = Blockly.Arduino.valueToCode(this, 'DS1302_YEAR', Blockly.Arduino.ORDER_ATOMIC);
  var hour = Blockly.Arduino.valueToCode(this, 'DS1302_HOUR', Blockly.Arduino.ORDER_ATOMIC); 
  var min = Blockly.Arduino.valueToCode(this, 'DS1302_MINUTE', Blockly.Arduino.ORDER_ATOMIC);
  var sec = Blockly.Arduino.valueToCode(this, 'DS1302_SECOND', Blockly.Arduino.ORDER_ATOMIC);
  
  var DayOfWeek = this.getFieldValue('OUTPUT_VALUE'); 	
   
   var code='time.settime('+sec+','+min+','+hour+','+day+','+month+','+year+','+DayOfWeek+');\n'
 //  rtc.setTime('+hour+','+min+','+sec+');\n'+
 //  'rtc.setDate('+year+','+month+','+day+');\n'+
 //  'rtc.setDOW('+DayOfWeek+');\n';
   // time.settime(0,51,21,27,10,15,2);  // 0  сек, 51 мин, 21 час, 27, октября, 2015 года, вторник
  return code;
};


Blockly.Arduino['order_read_rtc_ds1302'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var code = 't=rtc.getTime();\n'
   
  return code;
};


Blockly.Arduino['values_ds1302'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==5)
	  var code = 'time.gettime("s")';
  else if (Output_Value==4)
		var code = 'time.gettime("i")';
   else if (Output_Value==3)
			var code = 'time.gettime("H")';
    else if (Output_Value==2)
				var code = 'time.gettime("d")';
	 else if (Output_Value==1)
				var code = 'time.gettime("m")';
			else
					var code = 'time.gettime("Y")';
    
 // 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['values_text_ds1302'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==1)
	  var code = 'time.gettime("M")';
   else if (Output_Value==0)
	   var code = 'time.gettime("D")';
    else if (Output_Value==2)
	    var code = 'time.gettime("d-m-Y")';
     else 
	    var code = 'time.gettime("H:i:s")';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
