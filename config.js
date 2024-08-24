export const emailjsServiceId = process.env.SERVICEID;
export const emailjsTemplateId = process.env.TEMPLATEID;
export const emailjsPublicKey = process.env.PUBLICKEY;

import { getMessage } from './contact.js';
  
console.log(`Service ID: ${emailjsServiceId}`);
console.log(`Template ID: ${emailjsTemplateId}`); 
console.log(`Public Key: ${emailjsPublicKey}`); 
console.log(`log console: ${getMessage}`); 