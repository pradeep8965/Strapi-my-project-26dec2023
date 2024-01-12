'use strict';

/**
 * A set of functions called "actions" for `pradeep`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }

 // pradeep:async (a,b)=>{ // a, b are formal argument
    
 // }
};
