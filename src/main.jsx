import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import AssetManagement from './AssetManagement';
import ResourceOrganization from './ResourceOrganization';
import Collaboration from './Collaboration';
import Search from './Search';
import PrivateRoute from './PrivateRoute';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/asset-management" component={AssetManagement} />
        <PrivateRoute path="/resource-organization" component={ResourceOrganization} />
        <PrivateRoute path="/collaboration" component={Collaboration} />
        <PrivateRoute path="/search" component={Search} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);