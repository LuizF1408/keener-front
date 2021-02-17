
import React ,{useState} from "react"
import {Cadastrar} from './js/Cadastro'
import "./cadastro.css"

 const CadastroScreen = ({ history }) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

        const signIn = async () =>{

            await Cadastrar(user, password);
        
        
        history.push("/")
        }

      

        return (

            <div className="containerCadastro">
                <label id="lbl1">
                   Digite seu Username
            <input type="text" name="username" onChange={(e) => { setUser(e.target.value) }} />
                </label>
                <label id="lbl2">
                   Digite sua Password
            <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                </label>
               
                <input id="btn2" type="submit" value="Cadastrar" onClick={signIn} />
            </div>

        )





    };


    export default CadastroScreen;