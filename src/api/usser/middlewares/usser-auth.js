'use strict';

/**
 * `usser-auth` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In usser-auth middleware.');

    await next();
  };
};
