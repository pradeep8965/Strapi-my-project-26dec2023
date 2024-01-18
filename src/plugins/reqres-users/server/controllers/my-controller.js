'use strict';

module.exports = ({ strapi }) => ({
async  index(ctx) {
                    //Function chaining
                  //object.method1(AA).method2().method3()
    ctx.body = await strapi.plugin('reqres-users').service('myService').getWelcomeMessage();
  },
});
