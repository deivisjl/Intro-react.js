import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Nosotros = () => {

    const [equipo, setEquipo] = useState([]);

    useEffect(()=>{
        obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json()
        setEquipo(users)
    }

    return ( 
        <Fragment>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map((item, index) =>(
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
     );
}
 
export default Nosotros;