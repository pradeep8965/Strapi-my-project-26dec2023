module.exports = { //JS Object Exporting
    //1. P:V

    // ...
    'gorest-users': {
        //1. P:V
      enabled: true,
      resolve: './src/plugins/gorest-users'
      
    },
    'reqres-users': {
      enabled: true,
      resolve: './src/plugins/reqres-users'
    }, 
    'friends': {
      enabled: true,
      resolve: './src/plugins/friends'
    },
    //2. Methods/Function
    // ...
  }