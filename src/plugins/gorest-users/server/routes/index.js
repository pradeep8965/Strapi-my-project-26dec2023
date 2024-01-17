module.exports = [
  {
    method: 'GET',
    path: '/getgorestuser', // http://localhost:1337/gorest-users/getgorestuser
            //controller.method
    handler: 'myController.index',
    config: {
      policies: [],
      auth:false
    },
  },
];
