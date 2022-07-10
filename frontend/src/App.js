import Rutas from './Rutas/Rutas'
import NotiContext from './context/NotiContext';
import UserContext from './context/UserContext';
import InusualContext from './context/inusualesContext';
import {BrowserRouter, useRoutes} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Login from './Paginas/Login';
import servicioUsuario from './services/usuarios'
import servicioAprobaciones from './services/Aprobaciones'
import servicioPagos from './services/pagos'
import { useNavigate } from "react-router-dom";
function App () {

  const element = useRoutes(Rutas)
  const [userContext, setUserContext] = useState()

  const navigate = useNavigate();

  const [user, setUser] = useState(null)

///

useEffect(() => {
  
   const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
   if (loggedUserJSON) {
     const userContext = JSON.parse(loggedUserJSON)
     
     setUserContext(userContext)
   
     servicioUsuario.setToken(userContext.token) 
 

   }/*  else{

      navigate('/login')
     
   } */
  


 }, [])




///
  

    const usuario ={
    nombre: 'nombre',
   } 



/* if (userContext == null){
  return(<Login/>)
  
}else {
return (
    } */
    return(
  <UserContext.Provider value={{userContext}}>


    {element}   


   </UserContext.Provider>)

 






}






export default () =>
 <BrowserRouter>
 
 <App />

 </BrowserRouter>