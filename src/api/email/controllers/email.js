'use strict';

/**
 * A set of functions called "actions" for `email`
 */

module.exports = {
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }
  /*
  create: async ctx => {
    const {to, subject, html} = ctx.request.body
    return await strapi.services.email.sendEmail(to,  subject, html)
  }
  */
  create: async ctx => {
    const email = ctx.request.body.emailAddress;
    const body = ctx.request.body.emailBody;
    await strapi.plugins['email'].services.email.send({
        to: email,
        subject: 'testing email',
    });
    await ctx.send({
        message: "email sent from post request"
    })
}
};
