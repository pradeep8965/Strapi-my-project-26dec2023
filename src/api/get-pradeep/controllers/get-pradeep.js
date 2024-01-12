'use strict';

/* *
 * A set of functions called "actions" for `get-pradeep`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'get-pradeep';
    } catch (err) {
      ctx.body = err;
    }
  }
};
