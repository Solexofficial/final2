import { CLIENTS_RECEIVED, CLIENTS_REQUESTED_FAILED, CLIENT_DELETED, CLIENT_UPDATED } from '../constants/Clients';

const initState = {
  entities: [],
  isLoading: true,
  error: null,
};

const clients = (state = initState, action) => {
  switch (action.type) {
    case CLIENTS_RECEIVED: {
      return {
        ...state,
        isLoading: false,
        entities: [...action.payload],
      };
    }
    case CLIENT_UPDATED: {
      const { id } = action.payload;
      return {
        ...state,
        entities: state.entities.map(client => (client.id === id ? action.payload : client)),
      };
    }
    case CLIENT_DELETED: {
      return {
        ...state,
        entities: state.entities.filter(client => client.id !== action.payload),
      };
    }
    case CLIENTS_REQUESTED_FAILED: {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default clients;
