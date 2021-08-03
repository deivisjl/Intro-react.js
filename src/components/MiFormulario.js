import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const MiFormulario = () => {

    const { register, handleSubmit, formState:{errors}} = useForm();

    const [Entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) =>{
        setEntradas([...Entradas,data])
        e.target.reset()
    }

    return ( 
        <Fragment>
            <div className="container">
                <h1>Mi formulario</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="titulo"
                        placeholder="Ingrese titulo"
                        className="form-control my-2"
                        {...register("titulo", { 
                            required:{
                                value: true,
                                message: 'Título requerido' 
                            }
                        })} 
                    />
                    <span className="text-danger text-small d-block mb-2">
                            {errors.titulo &&  errors.titulo.message}
                    </span>
                    <input
                        name="descripcion"
                        placeholder="Ingrese descripcion"
                        className="form-control my-2"
                        {...register("descripcion", { 
                            required:{
                                value: true,
                                message: 'Descripción requerida' 
                            }
                        })} 
                    />
                    <span className="text-danger text-small d-block mb-2">
                            {errors.descripcion &&  errors.descripcion.message}
                    </span>
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </form>
            </div>
            <ul>
                {
                    Entradas.map((item, key) => 
                            <li id={key}>{item.titulo} - {item.descripcion}</li>
                        )
                }
            </ul>
        </Fragment>
     );
}
 
export default MiFormulario;