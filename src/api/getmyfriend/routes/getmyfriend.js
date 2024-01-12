module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/getmyfriend',
     handler: 'getmyfriend.get',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'POST',
     path: '/getmyfriend',
     handler: 'getmyfriend.create',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
