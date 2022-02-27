import apiRequest from "./apiRequest";

const deleteUser = async ( urlLiPa) => {
    const postOptions = {
        method:'DELETE'
    }
    
    apiRequest(urlLiPa, postOptions);
    
}

export default deleteUser;