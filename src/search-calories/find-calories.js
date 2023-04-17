import axios from 'axios';

import PLUSONE_SERVER_API from '../server-api';
// /activity/getCaloriesByTimeRange/{userId}/{start}/{end}

const findCalories = async (userId, startDate, endDate) => {
    const response = await axios.get(`${PLUSONE_SERVER_API}/activity/getCaloriesByTimeRange/${userId}/${startDate}/${endDate}`);
    const sumCalories = response.data;
    return sumCalories;
}

export { findCalories };