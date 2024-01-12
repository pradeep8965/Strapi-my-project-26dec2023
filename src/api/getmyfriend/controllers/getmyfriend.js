'use strict';

/**
 * A set of functions called "actions" for `getmyfriend`
 */

module.exports = {
  get: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
  create: async (ctx, next) => {
    try {
      console.log(ctx.request.body.name)
      const entry = await strapi.entityService.create('api::friend.friend', {
        data: {
          "name": ctx.request.body.name,
        },
      });
      ctx.body = "DATA ADD SUCCESSFULLY";
    } catch (err) {
      ctx.body = err;
    }
  }
};
