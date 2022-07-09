'use strict';

/**
 * chart-of-account service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chart-of-account.chart-of-account');
