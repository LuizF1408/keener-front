import React from 'react';


export default function Button({desc,onClick,type,id}){




    return(

        <button id={id} type ={type} onClick={onClick} >{desc}</button>
    )
}