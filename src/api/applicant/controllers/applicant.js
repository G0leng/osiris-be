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
        //TODO: add info if already a student
        const aData = await strapi.service('api::applicant.applicant').findOne(id, {populate:{institution:true, payment_plan:true}});
        if(aData.admissionStatus){
            console.log("Approved as student");
            const sData = await strapi.service('api::student.student').find( {
                filters:{applicantId:id},
                populate:{institution:true, branch:true, payment_plan:true, grades:true}
            });
            
            return sData.results[0];
        }
        console.log("ADTA: ", aData);
        return aData;
    },

    approve: async (ctx) => {
        const id = ctx.params.id;
        console.log("Applicant ID", id);
        const applicantData = await strapi.service('api::applicant.applicant').update(id, ctx.request.body);
        const aData = await strapi.service('api::applicant.applicant').findOne(id, {populate:{institution:true, branch:true, payment_plan:true, guardian:true }});
        console.log("Applicant Data", aData);
        if(ctx.request.body.data.admissionStatus){
            const sData = aData;
            console.log("Status TRUE");
            //auto generate student ID
            const randId = (new Date().getTime()); 
            const studentId = "2022-"+randId+"-"+id;
            console.log("Student ID: ", studentId);
            if (typeof sData.createdAt !== 'undefined') {
                delete sData.createdAt;
            }
            if (typeof sData.updatedAt !== 'undefined') {
                delete sData.updatedAt;
            }
            //auto generate email
            const email = studentId+"@headstartsolutionsph.com"
            sData.studentId = studentId;
            sData.email = email;
            sData.applicantId = parseInt(id);
            sData.guardian =  parseInt(aData.guardian.id);
            sData.institution = parseInt(aData.institution.id);
            sData.branch = parseInt(aData.branch.id);
            sData.payment_plan = parseInt(aData.payment_plan.id)
            sData.publishedAt = new Date()
            console.log("Student Data: ", sData);
            //return aData;
            
            //TODO: remove create and published date before inserting
            const studentData = await strapi.service('api::student.student').create({data:sData});
            return studentData;   
        }
        return applicantData;
    }
    
}));
