'use strict';

/**
 * A set of functions called "actions" for `post-pradeep`
 */

module.exports = {
   exampleAction: async (ctx, next) => {
     try {
       ctx.body = 'Hello my friend ';
     } catch (err) {
       ctx.body = err;
     }
   }
};
