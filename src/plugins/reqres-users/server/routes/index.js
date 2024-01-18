module.exports = [
  {
    method: 'GET',
    path: '/getusers',  //  http://localhost:1337/reqres-users/getusers
    handler: 'myController.index',
    config: {
      policies: [],
      auth:false
    },
  },
];
