'use strict';

/**
 *  applicant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::applicant.applicant', ({strapi})=>({

    /*
    create: async (ctx) => {
        const {institution} = ctx.request.body.data.institution;
        console.log("Institution body: ",institution);
        //const school = await strapi.services.institution.findSchoolCode({instutionCode:institution});
        const school = await strapi.service('api::institution.institution').find(ctx.request.body.data.institution);
        
        console.log("Institution : ", school.results[0].id);
        console.log("Data", ctx.request.data);
        var newData = {data: ctx.request.data};
        newData 
    
    }
    */
}));
