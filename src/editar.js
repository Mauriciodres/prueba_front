import React, { useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";

const Editar = () => {
    const{id} =useParams()
    const [data,setData]=useState({})
    const obteneruno = async() => {

        const response = await axios({
            method: 'GET',
            url: `http://localhost:4000/mostrar/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },
        });
        console.log("dara: ", response.data);
        setData(response.data);
    }

const actualizardatos =  async(event) =>{
    event.preventDefault();
    const { nombre, apellido, telefono, celular, direccion, correo } = event.target
    let datosenviados = {
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        celular: celular.value,
        direccion: direccion.value,
        correo: correo.value,
    }
    const response = await axios({
        method: 'put',
        url: `http://localhost:4000/actualizar/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        },
        data: datosenviados
    });
    console.log("dara: ", response.data);

}
return(
    <div>lista Contactos editar

    <button onClick={obteneruno}>obtener uno
    </button>

    <form onSubmit={actualizardatos}>

        <p>Ingresa tu nombre completo: <input type="text" defaultValue={data?.nombre} name="nombre" /></p>
        <p>Ingresa tu apellido completo: <input type="text" defaultValue={data?.apellido} name="apellido" /></p>
        <p>Ingresa tu telefono completo: <input type="text" defaultValue={data?.telefono} name="telefono" /></p>
        <p>Ingresa tu celular completo: <input type="text" defaultValue={data?.celular} name="celular" /></p>
        <p>Ingresa tu direccion completo: <input type="text" defaultValue={data?.direccion} name="direccion" /></p>
        <p>Ingresa tu correo completo: <input type="text" defaultValue={data?.correo} name="correo" /></p>


        <input type="submit" value="Enviar" />

    </form>
</div>)

    
}
export default Editar 