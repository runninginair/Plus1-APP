import axios from 'axios';                              // import axios

import PLUSONE_SERVER_API from "../server-api.js";

const updateWeight = async (userID, newWeight) => {
    const response = await axios.put(`${PLUSONE_SERVER_API}/updateWeightByUserID/${userID}/${newWeight}`);
    const activities = response.data;
    // console.log(activities);
    return activities;
}

const updateHeight = async (userID, newHeight) => {
    const response = await axios.put(`${PLUSONE_SERVER_API}/updateHeightByUserID/${userID}/${newHeight}`);
    const activities = response.data;
    // console.log(activities);
    return activities;
}

export { updateWeight, updateHeight };
