'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

 module.exports = {
    '*/1 * * * *': async() => {
      console.log('1 minute later');
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
          from: "support@headstartsolutionsph.com",
          templateId:"d-8189fab8af8f4bedb04e6fb4212f1db6",
          replyTo: "support@headstartsolutionsph.com", 
          dynamic_template_data: {
            subject: "Osiris Registration",
            otp: 3100
          }
      });
        console.log("sent email")
        */
      }
      catch (err) {
        console.log("Error", err)
      
      }
    },
  };
