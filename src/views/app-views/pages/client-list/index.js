import { Card, message, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteClient, fetchingClients } from 'redux/actions/Clients';
import { getClientsList, getClientsLoadingStatus, getClientsRequestErrorMessage } from 'redux/selectors/Clients';
import ClientEditProfile from './ClientEditProfile';
import ClientsTable from './ClientsTable';

export const ClientList = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { clientId } = useParams();

  const clients = useSelector(getClientsList);
  const isLoading = useSelector(getClientsLoadingStatus);
  const errorMessage = useSelector(getClientsRequestErrorMessage);

  useEffect(() => {
    dispatch(fetchingClients());
  }, [dispatch]);

  useEffect(() => {
    if (errorMessage) {
      message.error({ content: `${errorMessage}`, duration: 3 });
    }
  }, [errorMessage]);

  const handleClientDelete = clientId => {
    dispatch(deleteClient(clientId));
    message.success({ content: `Deleted user ${clientId}`, duration: 2 });
  };

  const handleEditClientProfile = clientId => {
    history.push(`${match.url}/${clientId}`);
  };

  return (
    <>
      <Spin size='large' spinning={isLoading}>
        <Card bodyStyle={{ padding: '0px' }}>
          {!isLoading &&
            (clientId ? (
              <ClientEditProfile id={clientId} />
            ) : (
              <ClientsTable clients={clients} onDelete={handleClientDelete} onEdit={handleEditClientProfile} />
            ))}
        </Card>
      </Spin>
    </>
  );
};

export default ClientList;
