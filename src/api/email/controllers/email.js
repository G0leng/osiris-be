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
  send: async (ctx) => {
    const {to, subject, html} = ctx.request.body
    return await strapi.services.email.sendEmail(to,  subject, html)
  }
};
