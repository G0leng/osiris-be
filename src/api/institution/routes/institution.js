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
        }
    ]
}
