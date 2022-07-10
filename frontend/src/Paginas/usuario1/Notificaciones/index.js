


import Navbar from '../../../components/usuario1/Navbar1'
import  useUser from '../../../hooks/useUser'
import Tablanoti from '../../../components/usuario1/Tablanotificaciones/TablaNotificaciones'





export default function Notificaciones() {
    const usuario  = useUser().userContext
    console.log(usuario)

    return (
        <>
            <div className="App">


                <Navbar />
                <Tablanoti
                cuil_cuit ={usuario.cuil_cuit} />
                

            </div>


        </>
    );

}