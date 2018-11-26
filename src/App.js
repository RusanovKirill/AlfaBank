import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Galery from './components/Galery';
import Photos from './components/Photos';


export default class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <Router>
        <Fragment>
          <Route exact  path="/" render={(props) => <Galery {...props} store={store} />} />
          <Route exact  path="/photos/:id" render={(props) => <Photos {...props} store={store} />} />
        </Fragment>
      </Router>
    );
  }
}

