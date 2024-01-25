module.exports = [
  {
    method: 'GET',
    path: '/myfriend',  //http://localhost:1337/friends/myfriend
           //controller.method
    handler: 'myController.index',
    config: {
      policies: [],
      auth:false
    },
  },
];
