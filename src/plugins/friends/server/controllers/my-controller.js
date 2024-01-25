'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('friends')
      .service('myService')
      .getWelcomeMessage();
  },
});
