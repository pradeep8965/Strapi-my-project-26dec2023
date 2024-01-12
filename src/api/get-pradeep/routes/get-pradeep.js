module.exports = {
  routes: [
   {
    method: 'GET',
    path: '/get-pradeep',
    handler: 'get-pradeep.exampleAction',
    config: {
      policies: [],
      middlewares: [],
    },
   },
  ],
};
