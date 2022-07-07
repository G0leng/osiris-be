'use strict';

/**
 * fee service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fee.fee');
