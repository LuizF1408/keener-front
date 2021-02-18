import axios from "axios"
export default async function Cadastrar(product) {
    const baseURL = "https://keener-back.herokuapp.com"

  


try {
   await axios.post(`${baseURL}/products`,product);
    alert("Cadastro realizado!") 
    
} 
catch (e) {
    console.log(e)
    alert("Cadastro não realizado " )
    

    
}





}
