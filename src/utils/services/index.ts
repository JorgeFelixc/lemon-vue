// https://pokeapi.co/api/v2/

const API = (uri: string) => (endpoint: string) => ({
  Get: async () => {
    try {
      const request = await fetch(uri + endpoint);
      const requestData = await request.json();
      return requestData || null;
    } catch (ex) {
      return null;
    }
  },
  GetUri: async () => {
    try {
      const request = await fetch(endpoint);
      const requestData = await request.json();
      return requestData || null;
    } catch (ex) {
      return null;
    }
  },
});

const ApiService = API('https://pokeapi.co/api/v2/');
export default ApiService;
