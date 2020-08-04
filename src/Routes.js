import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Routes are codesplit with lazy loading
const TestPage = lazy(() => import('Components/Test'));
const SecondPage = lazy(() => import('Components/SecondPage'));
const NotFound = lazy(() => import('Components/NotFound'));

const Loader = () => <div>Loading...</div>;

export default function Routes() {
  console.log('Routes is rendering');
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Suspense fallback={<Loader />}>
              <TestPage />
            </Suspense>
          )}
        />
        <Route
          exact
          path="/second"
          render={() => (
            <Suspense fallback={<Loader />}>
              <SecondPage />
            </Suspense>
          )}
        />
        {/* Fallback 404 */}
        <Route
          render={() => (
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          )}
        />
      </Switch>
    </Router>
  );
}
