import axios from 'axios';
import PLUSONE_SERVER_API from '../server-api.js';

const findActivities = async (date, uid) => {
    const response = await axios.get(`${PLUSONE_SERVER_API}/activities/${uid}/date/${date}`);
    const activities = response.data;
    return activities;
}

export { findActivities };