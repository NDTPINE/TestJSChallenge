import React from 'react';
import './Liked.css';
import { AiFillDelete } from 'react-icons/ai';
import deleteUser from './deleteUser'


const Matches = ({passUser,setPassUser}) => {
    const d = new Date().getFullYear();
    const handleDelete =(us,e)=>{
        e.preventDefault();
        const urlPassUser = "http://localhost:3001/pass/" + us.id;
        const tempUser = passUser.filter(u => u.id !== us.id);
        deleteUser(urlPassUser);
        setPassUser(tempUser);
    }
    const tempPassUser = passUser.map((us) => 
        <div className='polaroid' key={us.id}>
            <img src={us.picture} alt='new'/>
            <p>{us.firstName} {us.lastName}, Age: {d - new Date(us.dateOfBirth).getFullYear()} 
            <button onClick={(e)=>handleDelete(us,e)}><AiFillDelete/></button>
            </p>
        </div>
    )
   
    return (
        <div className='polaroids'>
            {tempPassUser}                     
        </div>
    
    )
}

export default Matches
