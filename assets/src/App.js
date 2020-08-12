import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import history from './history';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

const actions = [
  {name: "Create", icon: 'gear', elements: [{ref: '/', text: 'create'}]},
  {name: "Archive", icon: 'box', elements: [{ref: '/', text: 'archive'}]},
  {name: "Publish", icon: 'journal', elements: [{ref: '/publish', text: 'publish'}]}
];

import Root from './Routes/Root';
import Publish from './Routes/Publish';
import PublishSelect from "./Routes/PublishSelect";

ReactDOM.render(
  <Router history={history}>
    <Route exact path="/">
      <Root actions={actions}/>
    </Route>
    <Route exact path="/publish">
      <Publish/>
    </Route>
    <Route exact path="/publish/select">
      <PublishSelect/>
    </Route>
  </Router>,
  document.getElementById('root')
);

