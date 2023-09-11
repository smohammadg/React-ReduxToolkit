import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser, getAllUsers } from '../Redux/usersSlice';

let Users = () => {
    const [ name, setName ] = useState('');
    const [userId, setUserId] = useState('');
    const { data } = useSelector((store) => store.users)
    const dispatch = useDispatch();
    console.log('data: ',data);
    return(
        <div  className='userList'>
             <div className='addUserSec'>
            <p>Add a New User</p>
            <input placeholder='Enter User Name' 
                type="text" value={name} 
                onChange={(e) => setName(e.target.value)}/>
           
            <div>
                <button className='button' 
                onClick={() => {
                if(userId){
                    dispatch(updateUser({id: userId, name}));
                    setName("");
                    setUserId("");
                } else {
                    dispatch(addUser({name}))
                    setName("")
                }
                }}>{userId ? "Update" : "Add User"}</button>
                <button className='button'
                onClick={() => {
                    dispatch(getAllUsers())
                }}>Get All Users</button>
            </div>
            </div>
            <h4>Total Users :  {data.length}</h4>
            {data.length > 0 && data.map((user, index) => (
                <ul>
                    <li key={index}>{user.name}
                    <span>
                        <button className='button'
                            onClick={() => {
                            setUserId(user.id);
                            setName(user.name);
                            }}
                        >Edit</button>
                    <button className='button' 
                        onClick={() => dispatch(deleteUser(user.id))}>X</button>
                    </span>
                    </li>
                </ul>
            )) }
          
        </div>
    )
}
export default Users;
<div>


</div>


