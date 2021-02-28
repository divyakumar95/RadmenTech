// Sending Reminder mail from Radmen tech investers so they get time to time update on new registrations //
// --- Future mails to be sent to customer to thank for Signin --- //

const nodemailer = require('nodemailer')
const keys = require('../config/keys')
const mongoose = require('mongoose')

const Users = mongoose.model('users') 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'mail',
    clientId: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    refreshToken: keys.refreshToken,
    accessToken: keys.accessToken,
    expires: 12345},
});

const mailOptions = {
  from: 'theRadmentech@gmail.com', //From address 
  to: 'nitheshreddy2@gmail.com',
  cc : 'theRadmentech@gmail.com',
  subject: 'Macha New Registration',
  // Plese change this to dynamic mailing of new registration sent to be mails
  text: 'Registeation Details are as followes'  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});