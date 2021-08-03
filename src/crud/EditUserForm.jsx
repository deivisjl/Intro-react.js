import React from 'react'
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {

    const {register, handleSubmit, formState:{errors}, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) =>{

        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
        e.target.reset()
    }

    return ( 
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    {...register("name", { 
                        required:{
                            value: true,
                            message: 'Nombre requerido' 
                        }
                    })} 
                    />
                <span className="text-danger text-small d-block mb-2">
                    {errors.name &&  errors.name.message}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    className="form-control"
                    {...register("username", { 
                        required:{
                            value: true,
                            message: 'Username requerido' 
                        }
                    })} 
                    />
                <span className="text-danger text-small d-block mb-2">
                    {errors.username &&  errors.username.message}
                </span>
            </div>
            <div className="form-group">
                <button className="btn btn-success btn-sm" type="submit">Edit user</button>
            </div>
        </form>
     );
}
 
export default EditUserForm;