import {axiosinstance} from '../../config'
const baseUrl = axiosinstance+'prueba'
let token = null

const setToken = newToken =>{
    
    token = `Bearer ${newToken}`
}

const usuarios = async () => {
   
   const config = {
        headers:{
            Authorization:token
        }
    }
    const request = await axios.get(baseUrl, config)
    let dataa = request.data
   console.log('hola')

    return dataa
     
}
export default { usuarios, setToken }