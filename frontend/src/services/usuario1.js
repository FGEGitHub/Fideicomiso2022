import {axiosinstance} from '../../config'
const  baseUrl = axiosinstance+'usuario1/'

const cantidadd= async  (cuil_cuit) => {
    console.log('cuil_cuit')
    const {data } = await axios.get(baseUrl+'cantidadnotificaciones/'+cuil_cuit)
    console.log(cuil_cuit)
    return(data)
   
}

const noticliente= async  (cuil_cuit) => {
    console.log('cuil_cuit')
    const {data } = await axios.get(baseUrl+'noticliente/'+cuil_cuit)
    console.log(cuil_cuit)
    return(data)
   
}
export default {cantidadd,noticliente};