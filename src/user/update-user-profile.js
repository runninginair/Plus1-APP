import axios from 'axios';                              // import axios

const ACTIVITY_API = 'http://localhost:8080';

const updateWeight = async (userID, newWeight) => {
    const response = await axios.put(`${ACTIVITY_API}/updateWeightByUserID/${userID}/${newWeight}`);
    const activities = response.data;
    // console.log(activities);
    return activities;
}

const updateHeight = async (userID, newHeight) => {
    const response = await axios.put(`${ACTIVITY_API}/updateHeightByUserID/${userID}/${newHeight}`);
    const activities = response.data;
    // console.log(activities);
    return activities;
}

export { updateWeight, updateHeight };
