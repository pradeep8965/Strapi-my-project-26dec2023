module.exports = [
  {
    method: 'GET',
    path: '/myfriends',//http://localhost:1337/friends/myfriends
            //controller.method
    handler: 'myController.index',
    config: {
      policies: [],
      auth:false
    },
  },
  {
    method: 'POST',
    path: '/myfriends',//http://localhost:1337/friends/myfriends
            //controller.method
    handler: 'myController.create',
    config: {
      policies: [],
      auth:false
    },
  },
 
];
