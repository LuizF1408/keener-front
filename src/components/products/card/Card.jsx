import React from 'react'
import "./card.css"


export default function Card({type,name,value,cod,qtd}){




    return(
        <div className="card">
            <h2>Nome: {name}</h2>
            <h3>Tipo: {type}</h3>
            <span>R$: {value}</span>
            <span>Cod: {cod}</span>
            <span>QTD: {qtd}</span>


        </div>

    )


}