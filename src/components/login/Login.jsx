import React, { useState } from "react"
import {Login,Cadastrar} from './js/User'
import "./login.css"











   
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

        const signIn = async () =>{

            await Cadastrar(user, password);



        }


        return (

            <div className="container">
                <label id="lbl1">
                    Username
            <input type="text" name="username" onChange={(e) => { setUser(e.target.value) }} />
                </label>
                <label id="lbl2">
                    Password
            <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <input id="btn1" type="submit" value="Entrar" onClick={doLogin} />
                <input id="btn2" type="submit" value="Cadastrar" onClick={signIn} />
            </div>

        )





    };


    export default LoginScreen;