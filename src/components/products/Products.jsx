import React, { useEffect, useState } from "react"
import axios from "axios";
import Card from "./card/Card";
import "./products.css";
import Button from "../component/Button"
import {Link} from "react-router-dom"

export default function Products() {

    const [data, setData] = useState([])



useEffect(()=>{


    const baseURL = "https://keener-back.herokuapp.com"
     axios.get(`${baseURL}/products`)
        .then((req) => {
            console.log(req.data)
            setData(req.data)

        })

        .catch((e) => {
            console.log(e.message)

        })
        console.log(data)
         // eslint-disable-next-line 
    },[])
   
const listItens = data.map((card)=>
<div><Card name={card.name} 
type={card.type}
value={card.value}
cod={card.cod}
qtd={card.qtd}

/></div>

)


    return (

        <div className="containerProducts">

            <h1>Produtos</h1>
            <div className="options">
            < Link to="/app">
            <Button desc="Tela Principal"/>
            </Link>
            < Link to="/signup/product">
            <Button desc="Cadastrar Novo Produto"/>
            </Link>
            </div>
            <div className="cards">
                {listItens}
            </div>
            
        </div>
    )
}