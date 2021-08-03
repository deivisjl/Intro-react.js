import React,{Fragment, useState} from 'react';
import { useForm } from 'react-hook-form';

const Formulario = () => {

    
    /* const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    }); */

    const { register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data, e) =>{
        e.target.reset()
    }

    return ( 
        <Fragment>
            <div className="container">
                <h1>Formulario</h1>
                <form className="row" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group col-md-3">
                        <input
                            name="nombre"
                            type="text"
                            placeholder="Ingrese nombre"
                            className="form-control"
                            {...register("nombre", { 
                                required:{
                                    value: true,
                                    message: 'Nombre requerido' 
                                }
                            })} 
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {errors.nombre &&  errors.nombre.message}
                        </span>
                    </div>
                    <div className="form-group col-md-3">
                        <input
                            name="apellido"
                            type="text"
                            placeholder="Ingrese apellido"
                            className="form-control"
                            {...register("apellido", { 
                                required:{
                                    value: true,
                                    message: 'Apellido requerido' 
                                }
                            })} 
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {errors.apellido &&  errors.apellido.message}
                        </span>
                    </div>
                    <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </Fragment>
     );
}
 
export default Formulario;