import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/Loading';

const PageHome = Loadable({ loading: () => <Loading text={false}/>, loader: () => import('pages/Home') })

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={PageHome} />
      </Switch>
    </Router>
  );
}

export default App;
