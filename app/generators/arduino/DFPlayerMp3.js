/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/
goog.provide('Blockly.Blocks.DFPlayerMP3');

goog.require('Blockly.Blocks');
/*
Blockly.Arduino['DFPplayerMp3_init_ss'] = function(block) {
	
 var dropdown_pin1 = this.getFieldValue('PIN1');
 var dropdown_pin2 = this.getFieldValue('PIN2');
  
 Blockly.Arduino.definitions_['define_softwareserial_library'] = '#include <SoftwareSerial.h>';
 Blockly.Arduino.definitions_['define_dfplayermp3_library'] = '#include <DFRobotDFPlayerMini.h>';
 Blockly.Arduino.definitions_['define_softwareserial_mp3'] = 'SoftwareSerial mySoftwareSerialmp3('+dropdown_pin1+','+dropdown_pin2+');\n';
 Blockly.Arduino.definitions_['define_DFPlayerMP3'] = 'DFRobotDFPlayerMini myDFPlayer;\n';
 
 Blockly.Arduino.setups_['setup_sserial_baudios'] = 'mySoftwareSerialmp3.begin(9600);\n';
 Blockly.Arduino.setups_['setup_dfplayermp3'] = 'myDFPlayer.begin(mySoftwareSerialmp3);\n  myDFPlayer.setTimeOut(500);\n  myDFPlayer.outputDevice(DFPLAYER_DEVICE_SD);\n';

  
  var code='';
  return code;
   
};*/

Blockly.Arduino['DFPplayerMp3_init_serial1'] = function(block) {
	

 Blockly.Arduino.definitions_['define_dfplayermp3_library'] = '#include <SoftwareSerial.h> \n #include <DFPlayer_Mini_Mp3.h>';
 //Blockly.Arduino.definitions_['define_DFPlayerMP3'] = 'DFRobotDFPlayerMini myDFPlayer;\n';
 
 Blockly.Arduino.setups_['setup_serial1_baudios'] = 'Serial.begin (9600); \n';
 Blockly.Arduino.setups_['setup_dfplayermp3'] = 'mp3_set_serial (Serial); \n';

  
  var code='';
  return code;
   
};
/*
Blockly.Arduino['DFPplayerMp3_set_equalizator'] = function(block) {
 		
  var eq = this.getFieldValue('MP3_EQ'); 	
  
  var code = 'myDFPlayer.EQ('+eq+');\n';
 
  return code;
};*/

Blockly.Arduino['DFPplayerMp3_set_volumen'] = function(block) {
 		
 var volumen = Blockly.Arduino.valueToCode(this, 'Volumen', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3_set_volume ('+volumen+');\n';
 
  return code;
};
Blockly.Arduino['DFPplayerMp3_playsong'] = function(block) {
 		
 var volumen = Blockly.Arduino.valueToCode(this, 'Volumen', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'mp3_play ('+volumen+');\n';
 
  return code;
};
/*
Blockly.Arduino['DFPplayerMp3_get_values'] = function(block) {
 		
 var parameter = this.getFieldValue('MP3_PROPERTY'); 	
 
 
 if (parameter==0) 
    var code = 'myDFPlayer.readVolume()';
	else if (parameter==1) 
		var code = 'myDFPlayer.readEQ()';
		else 
			var code = 'myDFPlayer.readState()';
 
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};*/

Blockly.Arduino['DFPplayerMp3_operation'] = function(block) {
 		
 var mp3_operation = this.getFieldValue('MP3_OPERATION'); 	
 
 //['play','0'],['next','1'],['prev','2'],['pause','3'],['stop','4']
 if (mp3_operation==0) 
    var code = 'mp3_play ();\n';
	else if (mp3_operation==1) 
		var code = 'mp3_next ();\n';
		else if (mp3_operation==2) 
			 var code = 'mp3_prev ();\n';
			 else if (mp3_operation==3) 
				  var code = 'mp3_pause ();\n';
				  else if (mp3_operation==4) 
						var code = 'mp3_stop ();\n';
						
 
   return code;
};
/*
Blockly.Arduino['DFPplayerMp3_repeatoperation'] = function(block) {
 		
 var mp3_repeatoperation = this.getFieldValue('MP3_REPEATOPERATION'); 	
 
 
 if (mp3_repeatoperation==1) 
    var code = 'myDFPlayer.enableLoop();\n';
	else if (mp3_repeatoperation==2) 
		var code = 'myDFPlayer.disableLoop();\n';
		else if (mp3_repeatoperation==3) 
			 var code = 'myDFPlayer.enableLoopAll();\n';
			 else 
			  var code = 'myDFPlayer.disableLoopAll();\n';
 
   return code;
};

Blockly.Arduino['DFPplayerMp3_playsong'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'myDFPlayer.play('+song+');\n';
 
  return code;
};*/
/*
Blockly.Arduino['DFPplayerMp3_playsongdirectiry'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 
 var directory = Blockly.Arduino.valueToCode(this, 'Directory', Blockly.Arduino.ORDER_ATOMIC); 
  
  var code = 'myDFPlayer.playFolder('+directory+','+song+');\n';
 
  return code;
};

Blockly.Arduino['DFPplayerMp3_repeatsong'] = function(block) {
 		
 var song = Blockly.Arduino.valueToCode(this, 'Song', Blockly.Arduino.ORDER_ATOMIC); 	
  
  var code = 'myDFPlayer.loop('+song+');\n';
 
  return code;
};
*/

