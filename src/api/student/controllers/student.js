'use strict';

/**
 *  student controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::student.student', ({strapi})=>({
    findOne: async (ctx) => {
        const id = ctx.params.id;
        //TODO: add info if already a student
        const aData = await strapi.service('api::student.student').findOne(id, {populate:{institution:true, branch:true, payment_plan:true, grades:true, payments:true}});

        console.log("ADTA: ", aData);
        return aData;
    },
}));
