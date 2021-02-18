import React,{useState} from "react";
import "./cadastro.css";
import Button from "../../component/Button";
import {Link} from "react-router-dom";

import Cadastrar from "./js/postProduct";




const Modal = ()=> {
    const product = {}

    const [name,setName] = useState("")
    const [type,setType] = useState("")
    const [cod,setCod] = useState("")
    const [value,setValue] = useState("")
    const [qtd,setQtd] = useState("")


    product.name = name
    product.type = type
    product.cod = cod
    product.value = value
    product.qtd = qtd










    const Submit = async () => {
console.log(product)
        await Cadastrar(product);
        
        
    }




    return (
        <div className="containerP">
            <h1>Cadastro de Produtos</h1>

            <div className="modal">

                <input placeholder="Nome do Produto" onChange={(e)=>{setName(e.target.value)}} />
                <input placeholder="Tipo do Produto" onChange={(e)=>{setType(e.target.value)}} />
                <input placeholder="Codígo do Produto" onChange={(e)=>{setCod(e.target.value)}}/>
                <input placeholder="Valor do Produto" onChange={(e)=>{setValue(e.target.value)}}/>
                <input placeholder="Quantidade" onChange={(e)=>{setQtd(e.target.value)}}/>


                <div className="option">
                    <Button id="btn3" desc="Cadastrar" onClick={Submit}/>
                    <Link  to="/view">
                    <Button id="btn3" desc="Ver Produtos" />
                     </Link>
                    
                </div>

            </div>

        </div>
    )
}


export default Modal