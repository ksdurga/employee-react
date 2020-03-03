import axios from "axios";

const users = 'https://randomuser.me/api/?results=20';

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  users: function() {
    return axios.get(users)
  }
};