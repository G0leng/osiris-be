'use strict';

/**
 * email service.
 */

module.exports = {
    sendEmail: async (to,  subject, html) => {
        console.log("Sending email", html)
        strapi.plugins['email'].services.email.send({
            to,
            cc:DEFAULT_CC,
            from: DEFAULT_FROM,
            replyTo: DEFAULT_FROM, 
            subject,
            html
        });
        console.log("Email sent")
        return {message: 'Email sent'}
    }
};
