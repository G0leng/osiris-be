'use strict';
const sgMail = require("@sendgrid/mail");

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */
 sgMail.setApiKey("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");
 module.exports = {
    '*/1 * * * *': async() => {
      console.log('1 minute later');
      
      const msg = {
        to: 'gailesarmiento@gmail.com', // Change to your recipient
        from: 'gaile@thenerds.solutions', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
/*
      try {
        /*
        strapi.plugins['email'].services.email.send({
            to:"gailesarmiento@gmail.com",
            from: "gaile@thenerds.solutions",
            templateId:"d-474c407ceeca4c67b1cccec29f6ed9be",
            replyTo: "integration@thenerds.solutions", 
            dynamic_template_data: {
              subject: "OLK Registration",
              name: "Gaile"
            }
        });
        
        
        strapi.plugins['email'].services.email.send({
          to: "gailesarmiento@gmail.com",
          from: "gaile@thenerds.solutions",
          templateId:"d-8189fab8af8f4bedb04e6fb4212f1db6",
          replyTo: "gaile@thenerds.solutions", 
          dynamic_template_datera: {
            subject: "Registration",
            twilio_code: 3100
          }
      });
      
        console.log("sent email")
        
      }
      catch (err) {
        console.log("Error", err)
      
      }
      */
    },
  };
