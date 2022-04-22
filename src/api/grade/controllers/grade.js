'use strict';

/**
 *  grade controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::grade.grade', ({strapi})=>({
    findOne: async (ctx) => {
        const id = ctx.params.id;
        //TODO: add info if already a student
        const aData = await strapi.service('api::grade.grade').findOne(id, {populate:{subject:true, school_year:true}});
        console.log("ADTA: ", aData);
        return aData;
    },
}));
