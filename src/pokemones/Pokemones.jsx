import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion, siguientePokemonAccion } from '../redux/pokeDucks'

const Pokemones = () => {
    
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.array)

    return ( 
        <div className="container">
            lista de Pokemones
            <button className="btn btn-primary" onClick={()=> dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
            <button className="btn btn-success" onClick={()=> dispatch(siguientePokemonAccion(20))}>Next</button>
            <hr />
            <ul>
                {
                    pokemones.map((item, key) =>(
                        <li key={key}>{ item.name }</li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Pokemones;