import axios from "axios";

const users = 'https://randomuser.me/api/?results=20';

// Export an object with a get method to get 20 users
export default {
  users: function() {
    return axios.get(users)
  }
};