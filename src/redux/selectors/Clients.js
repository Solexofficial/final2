export const getClientsList = state => state.clients.entities;
export const getClientsLoadingStatus = state => state.clients.isLoading;
export const getClientsRequestErrorMessage = state => state.clients.error;
export const getClientById = clientId => state => {
  if (state.clients.entities) {
    return state.clients.entities.find(client => client.id === +clientId);
  }
};
