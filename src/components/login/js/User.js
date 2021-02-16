
import axios from "axios";


export async function Login(username,password) {
    const baseURL = "https://keener-back.herokuapp.com"

  

const resp = await axios.post(`${baseURL}/user/login`,{username,password});
return resp

}

export async function Cadastrar(username,password) {
    const baseURL = "https://keener-back.herokuapp.com"

  

const resp = await axios.post(`${baseURL}/user/create`,{username,password});
alert("Cadastro realizado!")
return resp

}
