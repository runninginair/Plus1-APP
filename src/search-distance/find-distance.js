import axios from 'axios';

import PLUSONE_SERVER_API from '../server-api';

const findDistance = async (userId, startDate, endDate) => {
    const response = await axios.get(`${PLUSONE_SERVER_API}/activity/getDistanceByTimeRange/${userId}/${startDate}/${endDate}`);
    const sumCalories = response.data;
    return sumCalories;
}

export { findDistance };