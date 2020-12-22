/***************************************************************
 *
 *  This module was created by Oscar Ferruz. ardublock.ru
 *
 ****************************************************************/

goog.provide('Blockly.Blocks.ADXL345');

goog.require('Blockly.Blocks');

Blockly.Arduino['Initread_fingerprinting'] = function(block) {
   
  Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = '#include <Adafruit_Fingerprint.h> \n SoftwareSerial mySerial(2, 3);   \n  Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial); \n ';
   	 
  var code='   ';
  return code;
};

Blockly.Arduino['Init_fingerprinting'] = function(block) {
   
 
  Blockly.Arduino.definitions_['include_Adafruit_Sensornn'] = ' \n uint8_t id; \n   uint8_t readnumber(void) { \n   uint8_t num = 0; \n   while (num == 0) { \n   while (! Serial.available()); \n    num = Serial.parseInt(); \n  } \n  return num; \n  } \n ';
  Blockly.Arduino.setups_['include_Adafruit_Sensor'] = ' Serial.begin(9600); \n  while (!Serial);  \n  delay(100); \n  Serial.println("ArduBlock.ru"); \n Serial.println("Adafruit Fingerprint sensor enrollment"); \n  finger.begin(57600); \n if (finger.verifyPassword()) { \n    Serial.println("Found fingerprint sensor!"); \n } else { \n   Serial.println("Did not find fingerprint sensor :("); \n   while (1) { delay(1); } \n } \n ';
  	 	 
  var code=' Serial.println("Ready to enroll a fingerprint!"); \n    Serial.println("Please type in the ID # (from 1 to 127) you want to save this finger as..."); \n   id = readnumber(); \n    if (id == 0) { \n      return; \n    } \n    Serial.print("Enrolling ID #"); \n    Serial.println(id); \n   while (!  getFingerprintEnroll() ); \n  } \n uint8_t getFingerprintEnroll() { \n    int p = -1; \n    Serial.print("Waiting for valid finger to enroll as #"); Serial.println(id); \n   while (p != FINGERPRINT_OK) { \n     p = finger.getImage(); \n     switch (p) { \n     case FINGERPRINT_OK: \n      Serial.println("Image taken"); \n       break; \n     case FINGERPRINT_NOFINGER: \n       Serial.println("."); \n        break; \n      case FINGERPRINT_PACKETRECIEVEERR: \n        Serial.println("Communication error"); \n        break; \n      case FINGERPRINT_IMAGEFAIL: \n        Serial.println("Imaging error"); \n        break; \n     default: \n       Serial.println("Unknown error"); \n       break; \n      }\n }\n p = finger.image2Tz(1); \n   switch (p) { \n     case FINGERPRINT_OK: \n        Serial.println("Image converted"); \n        break; \n     case FINGERPRINT_IMAGEMESS: \n       Serial.println("Image too messy"); \n       return p; \n     case FINGERPRINT_PACKETRECIEVEERR: \n       Serial.println("Communication error"); \n       return p; \n     case FINGERPRINT_FEATUREFAIL: \n       Serial.println("Could not find fingerprint features"); \n       return p; \n    case FINGERPRINT_INVALIDIMAGE: \n      Serial.println("Could not find fingerprint features"); \n       return p; \n     default: \n        Serial.println("Unknown error"); \n        return p; \n    } \n    Serial.println("Remove finger"); \n   delay(2000); \n   p = 0; \n   while (p != FINGERPRINT_NOFINGER) { \n     p = finger.getImage(); \n   } \n    Serial.print("ID "); Serial.println(id); \n    p = -1; \n    Serial.println("Place same finger again"); \n   while (p != FINGERPRINT_OK) { \n    p = finger.getImage(); \n    switch (p) { \n    case FINGERPRINT_OK: \n       Serial.println("Image taken"); \n       break; \n    case FINGERPRINT_NOFINGER: \n      Serial.print("."); \n       break; \n     case FINGERPRINT_PACKETRECIEVEERR: \n      Serial.println("Communication error"); \n        break; \n     case FINGERPRINT_IMAGEFAIL: \n       Serial.println("Imaging error"); \n       break; \n    default: \n       Serial.println("Unknown error"); \n       break; \n     } \n    } \n    p = finger.image2Tz(2); \n   switch (p) { \n     case FINGERPRINT_OK: \n      Serial.println("Image converted"); \n      break; \n    case FINGERPRINT_IMAGEMESS: \n       Serial.println("Image too messy"); \n       return p; \n     case FINGERPRINT_PACKETRECIEVEERR: \n        Serial.println("Communication error"); \n        return p; \n     case FINGERPRINT_FEATUREFAIL: \n       Serial.println("Could not find fingerprint features"); \n      return p; \n    case FINGERPRINT_INVALIDIMAGE: \n      Serial.println("Could not find fingerprint features"); \n      return p; \n     default: \n       Serial.println("Unknown error"); \n        return p; \n    } \n    Serial.print("Creating model for #");  Serial.println(id); \n     p = finger.createModel(); \n    if (p == FINGERPRINT_OK) { \n      Serial.println("Prints matched!"); \n    } else if (p == FINGERPRINT_PACKETRECIEVEERR) { \n      Serial.println("Communication error"); \n      return p; \n    } else if (p == FINGERPRINT_ENROLLMISMATCH) { \n      Serial.println("Fingerprints did not match"); \n     return p; \n    } else { \n      Serial.println("Unknown error"); \n      return p; \n   }    \n     Serial.print("ID "); Serial.println(id); \n    p = finger.storeModel(id); \n    if (p == FINGERPRINT_OK) { \n      Serial.println("Stored!"); \n   } else if (p == FINGERPRINT_PACKETRECIEVEERR) { \n      Serial.println("Communication error"); \n     return p; \n    } else if (p == FINGERPRINT_BADLOCATION) { \n      Serial.println("Could not store in that location"); \n      return p; \n    } else if (p == FINGERPRINT_FLASHERR) { \n      Serial.println("Error writing to flash"); \n      return p; \n    } else { \n      Serial.println("Unknown error"); \n      return p; \n    }    \n    ';
  return code;
};

Blockly.Arduino['read_fingerprinting'] = function(block) {
   
  Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = '#include <Adafruit_Fingerprint.h> \n SoftwareSerial mySerial(2, 3);   \n  Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial); \n ';
  
  Blockly.Arduino.setups_['include_Adafruit_Sensor'] = ' finger.begin(57600); \n delay(5); \n   finger.getTemplateCount(); \n';
  	 	 
  var code='  uint8_t p = finger.getImage(); \n  if (p != FINGERPRINT_OK)  return -1; \n   p = finger.image2Tz(); \n   if (p != FINGERPRINT_OK)  return -1; \n   p = finger.fingerFastSearch(); \n  if (p != FINGERPRINT_OK)  return -1; \n    ';
  return code;
};

Blockly.Arduino['values_fingerprinting'] = function(block) {
  
  var typeMag = this.getFieldValue('TypeMag');
  var code;

      code = 'finger.fingerID';

return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};
	