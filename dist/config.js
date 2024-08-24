console.log('SERVICEID:', process.env.SERVICEID);
console.log('TEMPLATEID:', process.env.TEMPLATEID);
console.log('PUBLICKEY:', process.env.PUBLICKEY);

module.exports = {
  emailjsServiceId: process.env.SERVICEID,
  emailjsTemplateId: process.env.TEMPLATEID,
  emailjsPublicKey: process.env.PUBLICKEY,
};
