import Loading from 'components/shared-components/Loading';
import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Clients = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Redirect exact from={`${match.url}`} to={`${match.url}/client-list`} />
        <Route path={`${match.url}/client-list/:clientId?`} component={lazy(() => import(`./client-list`))} />
      </Switch>
    </Suspense>
  );
};

export default Clients;
