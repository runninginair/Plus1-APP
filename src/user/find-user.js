import axios from 'axios';

import PLUSONE_SERVER_API from '../server-api';

const UserLogin = async (userId) => {
    const response = await axios.get(`${PLUSONE_SERVER_API}/user/${userId}`);
    const user = response.data;
    return user;
}

export { UserLogin };