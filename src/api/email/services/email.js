'use strict';

/**
 * email service.
 */

module.exports = {
    sendEmail: async (to, subject, html) => {
        const email = ctx.request.body.emailAddress;
        const body = ctx.request.body.emailBody;
        await strapi.plugins['email'].services.email.send({
            to,
            from: 'support@headstartsolutionsph.com',
            replyTo: 'support@headstartsolutionsph.com',
            subject,
            html
        });
        await ctx.send({
            message: "email sent from post request"
        })
    }

};
