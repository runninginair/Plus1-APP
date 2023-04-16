import axios from 'axios';

const ACTIVITY_API = 'http://localhost:8080';

const findActivities = async (date, uid) => {
    const response = await axios.get(`${ACTIVITY_API}/activities/${uid}/date/${date}`);
    const activities = response.data;
    // console.log(activities);
    return activities;
}

export { findActivities };