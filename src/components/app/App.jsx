import React from "react"
import "./app.css"
import Button from "../component/Button"
import { Link } from 'react-router-dom';




function App() {
  return (
    <div className="container">
      <h1>Tela de Produtos</h1>
      <div className="options">
        <Link id="btn1" to="/view">
          <Button desc="Ver Produtos" />

        </Link>

        <Link id="btn1" to="/signup/product">
          <Button desc="Cadastrar Produtos " />

        </Link>


      </div>

    </div>
  );
}

export default App;
