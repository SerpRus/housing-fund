import axios from 'axios'

class Api {
  async getUsers(params) {
      const response = await axios
          .get(
              'https://jsonplaceholder.typicode.com/users/',
              {
                  params
              }
          );

      return response.data;
  }
}

const api = new Api();

export default api;
