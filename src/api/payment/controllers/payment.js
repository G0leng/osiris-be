'use strict';

/**
 *  payment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::payment.payment', ({strapi})=>({
    /*
    create: async (ctx) => {
        const dataRequest = JSON.parse(ctx.request.body.data)
        console.log("Body: ", dataRequest);
        console.log("Student ID: ", dataRequest.student);
    
        const paymentData = await strapi.service('api::payment.payment').create(dataRequest);
        console.log("Payment Data Json", paymentData);
        return paymentData;
        
    },
    */
    

}));
