import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import ClientService from 'services/ClientsService';
import { clientsRequestFailed, setClients } from '../actions/Clients';
import { CLIENTS_REQUESTED } from '../constants/Clients';

export function* getClients() {
  yield takeEvery(CLIENTS_REQUESTED, function* () {
    try {
      const clients = yield call(ClientService.getAll);
      if (clients) {
        yield put(setClients(clients));
      }
    } catch (err) {
      yield put(clientsRequestFailed(err.message));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getClients)]);
}
