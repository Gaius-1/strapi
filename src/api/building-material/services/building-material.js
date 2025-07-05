'use strict';

/**
 * building-material service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::building-material.building-material');
