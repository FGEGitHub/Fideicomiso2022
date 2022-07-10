import {axiosinstance} from '../../config'
const baseUrl = axiosinstance+'usuario1/'

const subirprueba = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata)
  console.log(data)

}

const subirlegajode = async ( formdata) => {
 

  console.log(formdata)
  await axios.post(axiosinstance+'links/subirlegajodni', formdata)

  
  



}


export default { subirprueba, subirlegajode };