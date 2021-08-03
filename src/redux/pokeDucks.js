import axios from "axios";

//constantes
const dataInicial = {
    array: [],
    offset: 0,
}

//types
const OBTENER_POKEMONES = 'OBTENER_POKEMONES';
const SIGUIENTES_POKEMONES = 'SIGUIENTES_POKEMONES';

//reducers
export default function pokeReducer(state = dataInicial, action){

    switch(action.type){
        case OBTENER_POKEMONES:
            return {...state, array: action.payload}
        case SIGUIENTES_POKEMONES:
            return {...state, array: action.payload.array, offset:action.payload.offset}     
        default:
            return state
    }
}
//actions
export const obtenerPokemonesAccion = () => async (dispatch, getState) =>{

    const offset = getState().pokemones.offset

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonAccion = (numero) => async(dispatch, getState) =>{

    const offset = getState().pokemones.offset
    const siguiente = offset + numero
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: SIGUIENTES_POKEMONES,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}