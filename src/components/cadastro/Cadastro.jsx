
import React, { useState } from "react"
import { Cadastrar } from './js/Cadastro'
import "./cadastro.css"
import Button from "../component/Button"

const CadastroScreen = ({ history }) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {

        const login = await Cadastrar(user, password);
        if (login) {
            history.push("/")
        }
        else{
            history.push("/signup")
        }
    }




    return (

        <div>
            <h1>Tela de Cadastro</h1>
            <div className="containerCadastro">
                <label id="lbl1">
                    Digite seu Username
            <input type="text" name="username" onChange={(e) => { setUser(e.target.value) }} />
                </label>
                <label id="lbl2">
                    Digite sua Password
            <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                </label>


                <Button id="btn1" type="submit" desc="Cadastrar" onClick={signIn} />
            </div>
        </div>

    )





};


export default CadastroScreen;