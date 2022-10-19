import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover='content' />}>
    <Switch>
      <Route path={`${match.url}/scheduler`} component={lazy(() => import(`./scheduler`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/scheduler`} />
    </Switch>
  </Suspense>
);

export default Apps;
