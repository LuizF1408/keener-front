import axios from "axios"
export async function Cadastrar(username,password) {
    const baseURL = "https://keener-back.herokuapp.com"

  

const resp = await axios.post(`${baseURL}/user/create`,{username,password});
try {
    alert("Cadastro realizado!") 
} 
catch (e) {
    alert("Cadastro não realizado" + e.message)
}



return resp

}
