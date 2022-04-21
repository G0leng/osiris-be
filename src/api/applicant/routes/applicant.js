'use strict';

/**
 * applicant router.
 

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::applicant.applicant');
*/

module.exports = {
    routes:[
        {
            method: 'GET',
            path: '/applicants',
            handler: 'applicant.find',
          },
          {
            method: 'GET',
            path: '/applicants/:id',
            handler: 'applicant.findOne',
          },
          {
            method: 'POST',
            path: '/applicants',
            handler: 'applicant.create',
          },
          {
            method: 'PUT',
            path: '/applicants/:id',
            handler: 'applicant.update',
          },
          {
            method: 'DELETE',
            path: '/applicants/:id',
            handler: 'applicant.delete',
          },
          {
            method: 'PUT',
            path: '/applicants/approve/:id',
            handler: 'applicant.approve',
          },
    ]
}