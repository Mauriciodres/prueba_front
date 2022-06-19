import React, { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
const Contactos = () => {
    const [data, setData] = useState([])
    const obtener = async () => {

        const response = await axios({
            method: 'GET',
            url: 'http://localhost:4000/',
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
    const enviardatos = async (event) => {
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
        console.log(datosenviados);
        const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/crear',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },
            data: datosenviados
        });
        console.log(response);
    }
    const eliminarcontacto = async (id) => {
        console.log(id);
        const response = await axios({
            method: 'delete',
            url: `http://localhost:4000/eliminar/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },
        });
        console.log(response);
    }
    const editarcontacto = async (id) => {
        console.log(id);
        const response = await axios({
            method: 'put',
            url: `http://localhost:4000/actualizar/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },
            
        });
        console.log(response);
    }
    const editar = async() =>{
        

    }
    return (<div>lista Contactos

        <button onClick={obtener}>obtener
        </button>
        {data.map((item, index) => {
            return <div key={index}>{item.nombre} <h5>{item.celular}</h5> 
            <button onClick={() => eliminarcontacto(item.idinformacion)}>eliminar</button>
            

            <Link to={`/editar/${item.idinformacion}`}>Editar</Link>
            </div>
        })}

        <form onSubmit={enviardatos}>

            <p>Ingresa tu nombre completo: <input type="text" name="nombre" /></p>
            <p>Ingresa tu apellido completo: <input type="text" name="apellido" /></p>
            <p>Ingresa tu telefono completo: <input type="text" name="telefono" /></p>
            <p>Ingresa tu celular completo: <input type="text" name="celular" /></p>
            <p>Ingresa tu direccion completo: <input type="text" name="direccion" /></p>
            <p>Ingresa tu correo completo: <input type="text" name="correo" /></p>


            <input type="submit" value="Enviar" />

        </form>
    </div>)
}
export default Contactos  