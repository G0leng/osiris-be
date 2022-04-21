'use strict';

/**
 * payment router.
 

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::payment.payment');
*/

module.exports = {
    routes:[
        {
            method: 'GET',
            path: '/payments',
            handler: 'payment.find',
          },
          {
            method: 'GET',
            path: '/payments/:id',
            handler: 'payment.findOne',
          },
          {
            method: 'POST',
            path: '/payments',
            handler: 'payment.create',
          },
          {
            method: 'PUT',
            path: '/payments/:id',
            handler: 'payment.update',
          },
          {
            method: 'DELETE',
            path: '/payments/:id',
            handler: 'payment.delete',
          },
    ]
}