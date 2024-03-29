import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {Router, Route, browserHistory} from 'react-router';
import Home from './Home';
import Submit from './Submit';

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <Route component={Home}/>
    <Route path="submit" component={Submit}/>
  </Route>
</Router>, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
