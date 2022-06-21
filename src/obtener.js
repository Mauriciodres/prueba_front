import React, { useState } from "react"
import axios from "axios";
import {
    useNavigate,
    useParams,
    Link
} from "react-router-dom";

const OBTENER = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const Obtener = async () => {

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
    return (<div>
        <button onClick={Obtener}>Mostrar
        </button>
        <button onClick={() => navigate('/')}>Inicio
        </button>
        {data.map((item, index) => {
            return <div key={index}>{item.nombre} <h5>{item.celular}</h5> 
            <button onClick={() => eliminarcontacto(item.idinformacion)}>eliminar</button>

            

            <Link to={`/editar/${item.idinformacion}`}>Editar</Link>
            </div>
        })}



    </div>)

}
export default OBTENER;