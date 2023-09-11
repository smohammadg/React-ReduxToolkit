import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from '../Redux/usersSlice';

let Users = () => {
    const [ name, setName ] = useState('');
    const [userId, setUserId] = useState('');
    const { data } = useSelector((store) => store.users)
    const dispatch = useDispatch();
    console.log('data: ',data);
    return(
        <div  className='userList'>
            <h2>Users :  {data.length}</h2>
            <div>
                <input placeholder='Enter User Name' 
                type="text" value={name} 
                onChange={(e) => setName(e.target.value)}/>
                <button className='button' 
               onClick={() => {
                if(userId){
                 dispatch(updateUser({id: userId, name}));
                 setName("")
                } else {
                    dispatch(addUser({name}))
                    setName("")
                }
             }}>{userId ? "Update" : "Save"}</button>
                
            </div>
            <div>
                {data.length > 0 && data.map((user, index) => (
                    <ul>
                        <li key={index}>{user.name}
                            <button className='button'
                                 onClick={() => {
                                   setUserId(user.id);
                                   setName(user.name);
                                }}
                            >Edit</button>
                        <button className='button' 
                            onClick={() => dispatch(deleteUser(user.id))}>X</button>
                        </li>
                    </ul>
                ))
            }
            </div>
           
        </div>
    )
}
export default Users;
