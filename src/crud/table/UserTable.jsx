import userEvent from '@testing-library/user-event';
import React from 'react';

const UserTable = (props) => {

    return ( 
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ? 
                    props.users.map(user =>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="btn btn-success btn-sm"
                                    onClick={()=>{props.editRow(user)}}
                                >Edit</button>
                                &nbsp;
                                <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={()=>{props.deleteUser(user.id)}}
                                    >Delete</button>
                            </td>
                        </tr>
                    )) :  (
                        <tr>
                            <td colSpan="3">No users</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
     );
}
 
export default UserTable;
