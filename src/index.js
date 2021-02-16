import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import App from './components/app/App';
import Login from "./components/login/Login"

ReactDOM.render(
  <BrowserRouter>
  <Switch>
   <Route path="/" exact={true} component={Login}  />
   <Route path="/app" exact={true} component={App}  />
    
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

