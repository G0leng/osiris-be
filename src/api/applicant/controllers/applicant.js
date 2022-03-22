'use strict';

/**
 *  applicant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::applicant.applicant', ({strapi})=>({

    
    create: async (ctx) => {
        const institution = ctx.request.body.data.institution;
        console.log("Institution body: ",institution);
        const school = await strapi.service('api::institution.institution').find(institution);
        
        console.log("Institution : ", school.results[0].id);
        ctx.request.body.data.institution = school.results[0].id
        var newData = {data: ctx.request.body.data};
        console.log("New Data Json", newData); 
        const applicantData = await strapi.service('api::applicant.applicant').create(newData, {populate: {institution:true}});
        console.log("Applicant Data Json", applicantData);

        const aData = await strapi.service('api::applicant.applicant').findOne(applicantData.id, {populate:{institution:true}});
        console.log("ADTA: ", aData);
        return aData;
    },

    findOne: async (ctx) => {
        const id = ctx.params.id;
        const aData = await strapi.service('api::applicant.applicant').findOne(id, {populate:{institution:true}});
        console.log("ADTA: ", aData);
        return aData;
    }
    
}));
