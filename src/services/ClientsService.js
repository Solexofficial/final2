// import fetch from 'auth/FetchInterceptor';

const clientsEndPoint = 'https://jsonplaceholder.typicode.com/users';

const ClientService = {
  getAll: async () => {
    // const data = await fetch({ url: clientsEndPoint });
    const response = await fetch(clientsEndPoint);
    const data = await response.json();
    return data;
  },
};

export default ClientService;
