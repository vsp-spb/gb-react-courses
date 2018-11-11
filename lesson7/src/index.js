import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import Layout from './layouts/Layout';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Layout/>
        </HashRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));