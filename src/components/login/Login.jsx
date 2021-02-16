import React, { useState } from "react";
import "./login.css"
import axios from "axios"






export default function Login(e) {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const Post = {}

    Post.username = user
    Post.password = pass



    const Cadastrar = (event) => {

        event.preventDefault()

        axios.post("https://keener-back.herokuapp.com/user/create", Post)
            .then(resp => {
                const res = resp.data
                console.log(res)
                alert("Cadastro Realizado")
            })
            .catch(e => {
                console.log(e)
                alert("Não foi possível realizar o cadastro")
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    const Login = (event) => {

        event.preventDefault()

        axios.post("https://keener-back.herokuapp.com/user/login", Post)
            .then(resp => {
                const res = resp.data
                console.log(res)
                
            })
            .catch(e => {
                console.log(e)
                alert("Username ou Password invalid")
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    






return (

    <div className="container">
        <label id="lbl1">
            Username
            <input type="text" name="username" onChange={(e) => { setUser(e.target.value) }} />
        </label>
        <label id="lbl2">
            Password
            <input type="password" name="password" onChange={(e) => { setPass(e.target.value) }} />
        </label>
        <input id="btn1" type="submit" value="Enviar" onClick={Login}/>
        <input id="btn2" type="submit" value="Cadastrar" onClick={Cadastrar} />
    </div>

)





}