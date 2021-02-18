import axios from "axios"
export async function Cadastrar(username,password) {
    const baseURL = "https://keener-back.herokuapp.com"

  


try {
   await axios.post(`${baseURL}/user/create`,{username,password});
    alert("Cadastro realizado!") 
    const login = true
    return login
} 
catch (e) {
    console.log(e)
    alert("Cadastro não realizado (username já existe!)" )
    

    
}





}
