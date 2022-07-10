import servicioNotif from '../../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";
import { Button } from '@mui/material';
import ModalPago from '../../../components/usuario1/ModalTransferencia'


const TablaNotificaciones = (props) => {
    const [lotes, setLotes] = useState([''])
   const cuil_cuit = props.cuil_cuit
    useEffect(() => {

       // traer()

    }, [])


    const traer = async () => {
        try {
            const lotes = await servicioNotif.noticliente(cuil_cuit)
            console.log(lotes)
        } catch (error) {
            
        }
      


        setLotes(lotes)




    }
    const vercuotas = async () => {
        console.log('click')

    }


    return (

        <Fragment>
            <br></br><br></br><br></br><br></br>
            {
                lotes.map((item, index) =>
                    <div>
                        <Button key={index} variant="contained" onClick={() => { vercuotas(item['id']) }}>      {item['zona']}F{item['fraccion']}M{item['manzana']}L{item['lote']}</Button>
                        <ModalPago 
                        id={item['id']}
                        zona={item['zona']}
                        fraccion={item['fraccion']}
                        manzana= {item['manzana']}
                        lote={item['lote']}
                        />

                        


                    </div>
                )
            }



        </Fragment>

    )

}
export default TablaNotificaciones