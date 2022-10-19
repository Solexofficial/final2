import { combineReducers } from 'redux';
import Auth from './Auth';
import Clients from './Clients';
import Theme from './Theme';

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  clients: Clients,
});

export default reducers;
