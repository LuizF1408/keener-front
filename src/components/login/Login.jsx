import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Login } from './js/User';
import "./login.css";
import Button from "../component/Button";




const LoginScreen = ({ history }) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const doLogin = async () => {
        try {
            if (!user /* validação de user */) {
                return alert("User inválido");
            }
            if (!password /* validação de password */) {
                return alert("Senha inválida");
            }
            const userData = await Login(user, password);

            localStorage.setItem("userData", JSON.stringify(userData));

            history.push("/app");
        } catch (e) {
            alert("User or password invalid " + e.message);
        }
    };



    return (
        <div>
            <h1>Tela de Login</h1>


            <div className="containerLogin">

                <label id="lbl1">
                    
            <input type="text" name="username" onChange={(e) => { setUser(e.target.value) }} />
                </label>
                <label id="lbl2">
                    Password
            <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                </label>

                <Button id="btn1" desc="Entrar" onClick={doLogin} />


                <Link id="btn1" to="/signup">
                    <Button id="btn1" desc="Cadastro" />
                </Link>

            </div>
        </div>

    )





};


export default LoginScreen;