/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.motorMRT');

goog.require('Blockly.Blocks');

Blockly.Arduino['motor_run'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
 // Blockly.Arduino.definitions_['define_pwmsoft'] = '#include <SoftPWM.h>\n';
 // Blockly.Arduino.setups_['setup_pwminit'] = 'SoftPWMBegin();';
  
  if(motor_pin == 'ML1')
  {
	   //Blockly.Arduino.setups_['setup_output'] = 'pinMode(3,OUTPUT);';
	   Blockly.Arduino.setups_['setup_output1'] = 'pinMode(5,OUTPUT);'; // 7-5
	   
	//   if (motor_direction == 'STOP') 
	//	   var code = 'pinMode(3,OUTPUT);\ndigitalWrite(3,LOW);\n'+'analogWrite(7,0);\n';
	//   else
	       var code = 'pinMode(4,OUTPUT);\ndigitalWrite(4,'+motor_direction+');\n'+'analogWrite(5,'+motor_speed+');\n'; //3-4 7-5
  }
  else
   if(motor_pin == 'ML2')
    {
	   //Blockly.Arduino.setups_['setup_output2'] = 'pinMode(1,OUTPUT);';
	   Blockly.Arduino.setups_['setup_output3'] = 'pinMode(10,OUTPUT);'; //8-10
	   
	  // if (motor_direction == 'STOP') 
	//	   var code = 'pinMode(1,OUTPUT);\ndigitalWrite(1,LOW);\n'+'analogWrite(8,0);\n';
	//   else
	       var code = 'pinMode(9,OUTPUT);\ndigitalWrite(9,'+motor_direction+');\n'+'analogWrite(10,'+motor_speed+');\n'; //1-9 8-10
    }
	else
	  if(motor_pin == 'MR1')
		{
			//Blockly.Arduino.setups_['setup_output4'] = 'pinMode(2,OUTPUT);';
			Blockly.Arduino.setups_['setup_output5'] = 'pinMode(6,OUTPUT);'; //4-6
	   
		//	if (motor_direction == 'STOP') 
		//	   var code = 'pinMode(2,OUTPUT);\ndigitalWrite(2,LOW);\n'+'analogWrite(4,0);\n';
		//	else
			   var code = 'pinMode(7,OUTPUT);\ndigitalWrite(7,'+motor_direction+');\n'+'analogWrite(6,'+motor_speed+');\n'; //2-7 4-6
		}
		else
			if(motor_pin == 'MR2')
				{
					//Blockly.Arduino.setups_['setup_outpu6'] = 'pinMode(0,OUTPUT);';
					Blockly.Arduino.setups_['setup_output7'] = 'pinMode(11,OUTPUT);'; //6-11 
	   
				//	if (motor_direction == 'STOP') 
				//		var code = 'pinMode(0,OUTPUT);\ndigitalWrite(0,LOW);\n'+'analogWrite(6,0);\n';
				//	else
						var code = 'pinMode(12,OUTPUT);\ndigitalWrite(12,'+motor_direction+');\n'+'analogWrite(11,'+motor_speed+');\n'; //0-12  6-11
				}
			else
				var code = '';
 
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Arduino['motor_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
 
 //Blockly.Arduino.definitions_['define_pwmsoft'] = '#include <SoftPWM.h>\n';
 // Blockly.Arduino.setups_['setup_pwminit'] = 'SoftPWMBegin();';
  
  if(motor_pin == 'ML1')
  {
	   //Blockly.Arduino.setups_['setup_output'] = 'pinMode(3,OUTPUT);';
	   Blockly.Arduino.setups_['setup_output1'] = 'pinMode(5,OUTPUT);'; //7-5
	   
	   var code = 'pinMode(4,OUTPUT);\ndigitalWrite(4,LOW);\n'+'analogWrite(5,0);\n';//3-4 7-5
	  
  }
  else
   if(motor_pin == 'ML2')
    {
	   //Blockly.Arduino.setups_['setup_output2'] = 'pinMode(1,OUTPUT);';
	   Blockly.Arduino.setups_['setup_output3'] = 'pinMode(10,OUTPUT);'; //8-10
	   var code = 'pinMode(9,OUTPUT);\ndigitalWrite(9,LOW);\n'+'analogWrite(10,0);\n'; //8-10 1-9
	  
    }
	else
	  if(motor_pin == 'MR1')
		{
			//Blockly.Arduino.setups_['setup_output4'] = 'pinMode(2,OUTPUT);';
			Blockly.Arduino.setups_['setup_output5'] = 'pinMode(6,OUTPUT);'; //4-6
	   
			var code = 'pinMode(7,OUTPUT);\ndigitalWrite(7,LOW);\n'+'analogWrite(6,0);\n';//4-6 2-7
			
		}
		else
			if(motor_pin == 'MR2')
				{
					//Blockly.Arduino.setups_['setup_outpu6'] = 'pinMode(0,OUTPUT);';
					Blockly.Arduino.setups_['setup_output7'] = 'pinMode(11,OUTPUT);'; //6-11
	   
					var code = 'pinMode(12,OUTPUT);\ndigitalWrite(12,LOW);\n'+'analogWrite(11,0);\n';//6-11 0-12
					
				}
			else
				var code = '';
   
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

 
 
 
 
 Blockly.Arduino['l298nmotor_run'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
 // Blockly.Arduino.definitions_['define_pwmsoft'] = '#include <SoftPWM.h>\n';
//  Blockly.Arduino.setups_['setup_pwminit'] = 'SoftPWMBegin();';
  
  if(motor_pin == 'MotorA')
  {
	    if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output1'] = 'pinMode(10,OUTPUT); \n pinMode(12,OUTPUT);';  
	    var code = 'analogWrite(10,'+motor_speed+');\n digitalWrite(12,1);\n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output1'] = 'pinMode(10,OUTPUT); \n pinMode(12,OUTPUT);';  
	    var code = 'analogWrite(10,'+motor_speed+');\n digitalWrite(12,0);\n'; 
		}
	    
  }
  else
   if(motor_pin == 'MotorB')
    {
	   
	    if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output2'] = 'pinMode(11,OUTPUT); \n pinMode(13,OUTPUT);';  
	    var code = 'analogWrite(11,'+motor_speed+');\n digitalWrite(13,1);\n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output2'] = 'pinMode(11,OUTPUT); \n pinMode(13,OUTPUT);';  
	    var code = 'analogWrite(11,'+motor_speed+');\n digitalWrite(13,0);\n'; 
		} 
    }
	 
	 
			else
				var code = '';
 
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Arduino['l298nmotor_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
 
 // Blockly.Arduino.definitions_['define_pwmsoft'] = ' \n';
 // Blockly.Arduino.setups_['setup_pwminit'] = ' ';
  
  if(motor_pin == 'MotorA')
  {
	  
	  var code = 'digitalWrite(10,0);\n digitalWrite(12,0);\n'; 
	  
  }
  else
   if(motor_pin == 'MotorB')
    {
	    
	   var code = 'digitalWrite(11,0);\n digitalWrite(13,0);\n'; 
	  
    }
	
			else
				var code = '';
   
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};







Blockly.Arduino['l298motor_run'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
 // Blockly.Arduino.definitions_['define_pwmsoft'] = '#include <SoftPWM.h>\n';
//  Blockly.Arduino.setups_['setup_pwminit'] = 'SoftPWMBegin();';
  
  if(motor_pin == 'ML')
  {
	    if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output1'] = 'pinMode(9,OUTPUT); \n pinMode(10,OUTPUT);';  
	    var code = 'analogWrite(9,'+motor_speed+');\n analogWrite(10,0);\n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output1'] = 'pinMode(9,OUTPUT); \n pinMode(10,OUTPUT);';  
	     var code = 'analogWrite(10,'+motor_speed+');\n analogWrite(9,0);\n'; 
		}
	    
  }
  else
   if(motor_pin == 'MR')
    {
	   
	    if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output2'] = 'pinMode(6,OUTPUT); \n pinMode(5,OUTPUT);';  
	    var code = 'analogWrite(6,'+motor_speed+');\n analogWrite(5,0);\n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output2'] = 'pinMode(6,OUTPUT); \n pinMode(5,OUTPUT);';  
	     var code = 'analogWrite(5,'+motor_speed+');\n analogWrite(6,0);\n'; 
		} 
    }
	 
	 
			else
				var code = '';
 
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Arduino['l298motor_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
 
 // Blockly.Arduino.definitions_['define_pwmsoft'] = ' \n';
 // Blockly.Arduino.setups_['setup_pwminit'] = ' ';
  
  if(motor_pin == 'ML')
  {
	  
	  var code = 'analogWrite(9,0);\n analogWrite(10,0);\n'; 
	  
  }
  else
   if(motor_pin == 'MR')
    {
	    
	   var code = 'analogWrite(5,0);\n analogWrite(6,0);\n'; 
	  
    }
	
			else
				var code = '';
   
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Arduino['l9110motor_run'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
 // Blockly.Arduino.definitions_['define_pwmsoft'] = '#include <SoftPWM.h>\n';
//  Blockly.Arduino.setups_['setup_pwminit'] = 'SoftPWMBegin();';
  
  if(motor_pin == 'MotorB')
  {
	    if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output1'] = 'pinMode(9,OUTPUT); \n pinMode(10,OUTPUT);';  
	    var code = 'analogWrite(10,'+motor_speed+');\n analogWrite(9,0);\n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output1'] = 'pinMode(9,OUTPUT); \n pinMode(10,OUTPUT);';  
	     var code = 'analogWrite(9,'+motor_speed+');\n analogWrite(10,0);\n'; 
		}
	    
  }
  else
   if(motor_pin == 'MotorA')
    {
	   
	    if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output2'] = 'pinMode(6,OUTPUT); \n pinMode(5,OUTPUT);';  
	    var code = 'analogWrite(5,'+motor_speed+');\n analogWrite(6,0);\n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output2'] = 'pinMode(6,OUTPUT); \n pinMode(5,OUTPUT);';  
	     var code = 'analogWrite(6,'+motor_speed+');\n analogWrite(5,0);\n'; 
		} 
    }
	 
	 
			else
				var code = '';
 
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Arduino['l9110motor_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
 
 // Blockly.Arduino.definitions_['define_pwmsoft'] = ' \n';
 // Blockly.Arduino.setups_['setup_pwminit'] = ' ';
  
  if(motor_pin == 'MotorB')
  {
	  
	  var code = 'analogWrite(9,0);\n analogWrite(10,0);\n'; 
	  
  }
  else
   if(motor_pin == 'MotorA')
    {
	    
	   var code = 'analogWrite(5,0);\n analogWrite(6,0);\n'; 
	  
    }
	
			else
				var code = '';
   
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};







 Blockly.Arduino['l298nmotor_runp'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);

  
  if(motor_pin == 'MotorA')
  {
	    if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output1'] = ' pinMode(3,OUTPUT); \n pinMode(9,OUTPUT); \n pinMode(12,OUTPUT); \n ';  
	    var code = 'analogWrite(3,'+motor_speed+'); \n digitalWrite(9,0); \n digitalWrite(12,1);\n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output1'] = ' pinMode(3,OUTPUT); \n pinMode(9,OUTPUT); \n pinMode(12,OUTPUT); \n ';  
	    var code = 'analogWrite(3,'+motor_speed+'); \n digitalWrite(9,0); \n digitalWrite(12,0);\n'; 
		}
	    
  }
  else
   if(motor_pin == 'MotorB')
    {
	   
	    if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output2'] = ' pinMode(11,OUTPUT); \n pinMode(8,OUTPUT); \n pinMode(13,OUTPUT); \n ';  
	    var code = 'analogWrite(11,'+motor_speed+'); \n digitalWrite(8,0); \n digitalWrite(13,1); \n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output2'] = ' pinMode(11,OUTPUT); \n pinMode(8,OUTPUT); \n pinMode(13,OUTPUT); \n ';  
	    var code = 'analogWrite(11,'+motor_speed+'); \n digitalWrite(8,0); \n digitalWrite(13,0); \n'; 
		} 
    }
	 
	 
			else
				var code = '';
 
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Arduino['l298nmotor_stopp'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin = this.getFieldValue('MOTOR_CON');
 
 // Blockly.Arduino.definitions_['define_pwmsoft'] = ' \n';
 // Blockly.Arduino.setups_['setup_pwminit'] = ' ';
  
  if(motor_pin == 'MotorA')
  {
	  
	  var code = 'digitalWrite(9,1); \n analogWrite(3,0); \n'; 
	  
  }
  else
   if(motor_pin == 'MotorB')
    {
	    
	   var code = 'digitalWrite(8,1); \n analogWrite(11,0); \n'; 
	  
    }
	
			else
				var code = '';
   
  
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};




 Blockly.Arduino['motor_autoR'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin1 = this.getFieldValue('PIN_RM1');
  var motor_pin2 = this.getFieldValue('PIN_RM2');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);

  
Blockly.Arduino.setups_['setup_output1'] = ' pinMode('+motor_pin1+',OUTPUT); \n pinMode('+motor_pin2+',OUTPUT); \n  ';  
var code = ' digitalWrite('+motor_pin1+','+motor_direction+');\n	analogWrite('+motor_pin2+','+motor_speed+'); \n  '; 



  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


 Blockly.Arduino['motor_autoL'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin1 = this.getFieldValue('PIN_RM1');
  var motor_pin2 = this.getFieldValue('PIN_RM2');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);

  
Blockly.Arduino.setups_['setup_output2'] = ' pinMode('+motor_pin1+',OUTPUT); \n pinMode('+motor_pin2+',OUTPUT); \n  ';  
var code = ' digitalWrite('+motor_pin1+','+motor_direction+');\n	analogWrite('+motor_pin2+','+motor_speed+'); \n  '; 



  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

 Blockly.Arduino['motor_auto1'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin1 = this.getFieldValue('PIN_RM1');
  var motor_pin2 = this.getFieldValue('PIN_RM2');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);

		if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output1'] = '	pinMode('+motor_pin1+',OUTPUT); \n 	pinMode('+motor_pin2+',OUTPUT);';  
	    var code = '	analogWrite('+motor_pin1+','+motor_speed+');\n 	analogWrite('+motor_pin2+',0);\n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output1'] = '	pinMode('+motor_pin1+',OUTPUT); \n 	pinMode('+motor_pin2+',OUTPUT);';  
	    var code = '	analogWrite('+motor_pin1+',0);\n 	analogWrite('+motor_pin2+','+motor_speed+');\n';
		}
		



  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

 Blockly.Arduino['motor_auto2'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin1 = this.getFieldValue('PIN_RM1');
  var motor_pin2 = this.getFieldValue('PIN_RM2');
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);

  
		if(motor_direction == '1'){
		Blockly.Arduino.setups_['setup_output2'] = '	pinMode('+motor_pin1+',OUTPUT); \n 	pinMode('+motor_pin2+',OUTPUT);';  
	    var code = '	analogWrite('+motor_pin1+','+motor_speed+');\n 	analogWrite('+motor_pin2+',0);\n'; 
		}
		if(motor_direction == '0'){
		Blockly.Arduino.setups_['setup_output2'] = '	pinMode('+motor_pin1+',OUTPUT); \n 	pinMode('+motor_pin2+',OUTPUT);';  
	    var code = '	analogWrite('+motor_pin1+',0);\n 	analogWrite('+motor_pin2+','+motor_speed+');\n';
		}
	

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};