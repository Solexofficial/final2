import {
  CLIENTS_RECEIVED,
  CLIENTS_REQUESTED,
  CLIENTS_REQUESTED_FAILED,
  CLIENT_DELETED,
  CLIENT_UPDATED,
} from '../constants/Clients';

export const setClients = clients => {
  return {
    type: CLIENTS_RECEIVED,
    payload: clients,
  };
};
export const updateClient = client => {
  return {
    type: CLIENT_UPDATED,
    payload: client,
  };
};
export const fetchingClients = () => {
  return {
    type: CLIENTS_REQUESTED,
  };
};
export const clientsRequestFailed = errorMessage => {
  return {
    type: CLIENTS_REQUESTED_FAILED,
    error: errorMessage,
  };
};
export const deleteClient = clientId => {
  return {
    type: CLIENT_DELETED,
    payload: clientId,
  };
};
