'use strict';

/**
 *  institution controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::institution.institution',({strapi})=>({
    async findSchoolCode(ctx){
        console.log("@find school", ctx.params);
        const {institutionCode} = ctx.params.institutionCode;
        console.log("Instution Code Params ", ctx.params.institutionCode);
        const institution = await super.find({institutionCode:ctx.params.institutionCode});
        console.log("Query: ", institution.data[0].id);
        return institution.data[0].id;
    }
})

);
