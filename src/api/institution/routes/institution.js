'use strict';

/**
 * institution router.
 

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::institution.institution', {
    config: {
        findSchoolCode: {

        }
    }
});
*/
module.exports = {
    routes:[
        {
            method:'GET',
            path:'/institution/findSchoolCode/:institutionCode',
            handler:'institution.findSchoolCode',
        },
        {
            method: 'GET',
            path: '/institutions',
            handler: 'institution.find',
          },
          {
            method: 'GET',
            path: '/institutions/:id',
            handler: 'institution.findOne',
          },
          {
            method: 'POST',
            path: '/institutions',
            handler: 'institution.create',
          },
          {
            method: 'PUT',
            path: '/institutions/:id',
            handler: 'institution.update',
          },
          {
            method: 'DELETE',
            path: '/institutions/:id',
            handler: 'institution.delete',
          },
          
    ]
}
