import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import App from './components/app/App';
import Login from "./components/login/Login";
import Cadastrar from "./components/cadastro/Cadastro";
import View from "./components/products/Products"
import Modal from "./components/products/cadastro/CadastroP"

ReactDOM.render(
  <BrowserRouter>
  <Switch>
   <Route path="/" exact={true} component={Login}  />
   <Route path="/app" exact={true} component={App}  />
   <Route path="/signup" exact={true} component={Cadastrar}  />
   <Route path="/view" exact={true} component={View}  />
   <Route path="/signup/product" exact={true} component={Modal}  />
    
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

