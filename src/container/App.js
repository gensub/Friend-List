import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './homeContainer';
import FriendFormContainer from './friendFormContainer';
import Header from '../static_components/Header';
import Sidebar from '../static_components/Sidebar';
import Footer from '../static_components/Footer';

const App = () => (
  <div className="hold-transition skin-blue sidebar-mini">
    <Header />
    <Sidebar />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/submit/:id" component={FriendFormContainer} />
    </Switch>
    <Footer />
  </div>
);


export default withRouter(App);
