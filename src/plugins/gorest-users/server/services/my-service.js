'use strict';
const axios = require('axios');

module.exports = ({ strapi }) => ({
  async getWelcomeMessage() {
    try {
      const response = await axios.get('https://gorest.co.in/public/v2/users');
      console.log(response.data);
      //Every function return something 
      return response.data;
    } catch (error) {
      return [];
    }
    return 'Welcome to Strapi 🚀';
  },
});
