import apiRequest from "./apiRequest";

const deleteUser = async (likedUser, urlLiPa) => {
    const postOptions = {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(likedUser)
    }
    
    apiRequest(urlLiPa, postOptions);
    
}

export default deleteUser;