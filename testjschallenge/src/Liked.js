import React from 'react';
import './Liked.css';
import { AiFillDelete } from 'react-icons/ai';
import deleteUser from './deleteUser'

const Liked = ({likedUser,setLikedUser}) => {
    const d = new Date().getFullYear();
    const handleDelete =(us,e)=>{
        e.preventDefault();
        const urlLikeUser = "http://localhost:3001/like/" + us.id;
        const tempUser = likedUser.filter(u => u.id !== us.id);
        deleteUser(urlLikeUser);
        setLikedUser(tempUser);
    }
    const tempLikedUser = likedUser.map((us) => 
        <div className='polaroid' key={us.id}>
            <img src={us.picture} alt='new'/>
            <p>{us.firstName} {us.lastName}, Age: {d - new Date(us.dateOfBirth).getFullYear()} 
            <button onClick={(e)=>handleDelete(us,e)}><AiFillDelete/></button>
            </p>
        </div>
    )
   
    return (
        <div className='polaroids'>
            {tempLikedUser}                     
        </div>
    
    )
}

export default Liked
