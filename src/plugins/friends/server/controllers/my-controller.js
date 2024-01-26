'use strict';

module.exports = ({ strapi }) => ({ // We are export a fat arrow function which return a js object
  index(ctx) {
              //function chainining
    ctx.body = strapi.plugin('friends').service('myService').getWelcomeMessage();
  },
  async create(ctx) {
              //function chainining
    const entry = await strapi.entityService.create('plugin::friends.content-type-friend', {
      data: {
        name: ctx.request.body.name,
      },
    });
    ctx.body = {
      message:'data Stored Successfuuly',
      data: entry
    }

  },
});
