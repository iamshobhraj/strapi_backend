'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('myplugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
