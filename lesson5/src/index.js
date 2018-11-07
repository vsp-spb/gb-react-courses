import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './layouts/Layout';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Comments from './pages/Comments';
import Users from './pages/Users';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="posts" component={Posts} />
          <Route path="posts/:id" component={Post} />
          <Route path="comments" component={Comments} />
          <Route path="users" component={Users} />
        </Route>
      </Router>  
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));