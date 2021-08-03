import React, { Fragment } from 'react';

const Comentario = ({sujeto}) => {
    return ( 
        <Fragment>
            <div className="media">
                <img src={sujeto.urlImagen} className="mt-3" alt=""/>
                <div className="mt-0">
                    <h5>{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
     );
}
 
export default Comentario;