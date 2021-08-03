import React, { useState } from 'react';
import UserTable from './crud/table/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './crud/AddUserForm';
import EditUserForm from './crud/EditUserForm';

function App() {

  const usersData = [
      {id: uuidv4(), name: 'Tania', username: 'floppydiskette'},
      {id: uuidv4(), name: 'Tania', username: 'floppydiskette'},
      {id: uuidv4(), name: 'Tania', username: 'floppydiskette'},
  ]

  const [users, setUsers] = useState(usersData);

  const addUser = (user) =>{
    usersData.id = uuidv4()
    setUsers([...usersData, user])
  }

  const deleteUser = (id) =>{
     setUsers(users.filter(user => user.id !== id))
  }

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  })

  const editRow = (user) =>{
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updatedUser) =>{
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="App container">
        <div className="row">
           <div className="col-md-4">
              <h2>Usuario</h2>
              {
                editing ? (
                  <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
                ) : (
                  <AddUserForm addUser={addUser}/>
                )
              }
           </div>
           <div className="col-md-8">
             <h2>Listado de usuarios</h2>
             <UserTable 
                users={users} 
                deleteUser={deleteUser} 
                editRow={editRow}/>
           </div>
        </div>
    </div>
  );
}

export default App;
