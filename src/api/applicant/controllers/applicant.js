'use strict';

/**
 *  applicant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const axios = require('axios');
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
        const aData = await strapi.service('api::applicant.applicant').findOne(id, {populate:'*'});
        
        if(aData.admissionStatus){
            console.log("Approved as student");
            const sData = await strapi.service('api::student.student').find( {         
                filters:{applicantId:id},
                populate:'*'
            });
            
            return sData.results[0];
        }
        console.log("ADTA: ", aData);
        return aData;
    },

    registerToLMS: async (ctx) => {
        console.log("@@@@ PARAMS: ", ctx);
        //const aData = await strapi.query('plugin::user.user').findOne(ctx.guardian, {populate:'*'});
        //console.log("Parent: ", aData);
        try{
            const bodyRequest = {
                "parent": {
                    "osiris_id":ctx.guardian.id,
                    "username": ctx.guardian.username,
                    "email": ctx.guardian.email,
                    "password": ctx.guardian.password,
                    "first_name": ctx.guardian.firstName,
                    "middle_name": ctx.guardian.middleName,
                    "last_name": ctx.guardian.lastName, 
                    "gender": "Male",
                    "country": ctx.guardian.country,
                    "contact_number": ctx.guardian.mobileNumber,
                    "birthday": "2022-04-18",
                    "address": ctx.guardian.address,
                    "occupation": ctx.guardian.occupation,
                    "students": [
                      {
                          "school_code": ctx.institution.institutionName, 
                          "username": "student1",
                          "email":ctx.email,
                          "password": ctx.middleName,
                          "first_name": ctx.firstName,
                          "last_name": ctx.lastName,
                          "gender": "Male",
                          "country": ctx.guardian.country,
                          "contact_number": ctx.guardian.mobileNumber,
                          "birthday": "2022-04-18",
                          "address": ctx.guardian.address,
                          "occupation": "test",
                          "middle_name": ctx.middleName
                      }
                  ]
                }
              }
            console.log("TEKTEACHHHHH : ", bodyRequest);
            const { data } = await axios.post('http://199.231.160.83:3000/api/v2/auth/osiris_registration',
            bodyRequest,
            {
                headers: {
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwidGltZSI6MTY0ODU0MTU5OH0.UocKESzDUQ5EmsBIloJ4qRD-9dj2YgzJFXLvMJD2BL4'
            }});
            console.log("MESSAGES: ", data);
        }catch(error){
            console.log("Error: ")
        }

    },

    approve: async (ctx) => {
        const id = ctx.params.id;
        console.log("Applicant ID", id);
        const applicantData = await strapi.service('api::applicant.applicant').update(id, ctx.request.body);
        
        if(ctx.request.body.data.admissionStatus){
            const aData = await strapi.service('api::applicant.applicant').findOne(id, {populate:'*'});
            const randId = (new Date().getTime()); 
            const studentId = "2022-"+randId+"-"+id;
            const email = studentId+"@headstartsolutionsph.com";
            aData.email = email;
            //Add to tekteach
            strapi.controller('api::applicant.applicant').registerToLMS(aData);
            //TODO: ave tekteach student id here
            //sData.lmsId = tekTeachId.
            console.log("Applicant Data", aData);
            const sData = aData;
            console.log("Status TRUE");
            //auto generate student ID
            
            console.log("Student ID: ", studentId);
            if (typeof sData.createdAt !== 'undefined') {
                delete sData.createdAt;
            }
            if (typeof sData.updatedAt !== 'undefined') {
                delete sData.updatedAt;
            }
            //const email = studentId+"@headstartsolutionsph.com"
            sData.studentId = studentId;
            sData.email = email;
            sData.applicantId = parseInt(id);
            sData.guardian =  parseInt(aData.guardian.id);
            sData.institution = parseInt(aData.institution.id);
            sData.branch = parseInt(aData.branch.id);
            sData.payment_plan = parseInt(aData.payment_plan.id);
            sData.publishedAt = new Date();
            sData.birthDate = aData.birthDate;
            sData.profilePicture = aData.profilePicture;
        
            //TODO: autogenerate password; use birthdate mm-dd-yyyy-middleName
            const password = aData.middleName;
            console.log("Password: ", password);

            //console.log("Student Data: ", sData);
            //return sData
            const studentData = await strapi.service('api::student.student').create({data:sData});
            //TODO: create USER login and password
            return studentData;   
        }
        return applicantData;
    }
    
}));
