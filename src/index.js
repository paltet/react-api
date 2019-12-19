import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import issue from './Issue';
import App from './App';
import Users from './users';
import IssuesView from './IssuesView.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormIssue from './FormIssue';


//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path='/issues' component={IssuesView} />
      <Route path="/users" component={Users} />
      <Route exact path='/issues/new' component={FormIssue} />
      <Route exact path='/issue' component={issue} />

      
    </div>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
