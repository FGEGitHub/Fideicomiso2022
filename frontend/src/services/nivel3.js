import {axiosinstance} from '../../config'
const  baseUrl = axiosinstance+'nivel3/'

const agregariccgral= async  (datos) => {
   
    const {data } = await axios.post(baseUrl+'agregariccgral2',datos)
    alert(data)
   
}  
const traerhistorial= async  () => {
   
    const {data } =await axios.get(axiosinstance+'nivel3/historialicc')

    return data 
}  

export default {agregariccgral,traerhistorial};