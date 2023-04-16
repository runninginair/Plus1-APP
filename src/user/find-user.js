import axios from 'axios';

const ACTIVITY_API = 'http://localhost:8080';


const UserLogin = async (userId) => {
    const response = await axios.get(`${ACTIVITY_API}/user/${userId}`);
    const user = response.data;
    return user;
}

export { UserLogin };