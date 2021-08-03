import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const User = () => {

    const {id} = useParams()

    const [empleado, setEmpleado] = useState({});

    useEffect(()=>{
        const obtenerDatos = async () =>{
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const empleado = await data.json()
            setEmpleado(empleado)
        }

        obtenerDatos()
    },[id])

    

    return ( 
        <Fragment>
            <h3>{empleado.username}</h3>
            <p>{empleado.website}</p>
        </Fragment>
     );
}
 
export default User;