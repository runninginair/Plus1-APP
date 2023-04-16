import axios from 'axios';

const ACTIVITY_API = 'http://localhost:8080';
// /activity/getCaloriesByTimeRange/{userId}/{start}/{end}

const findCalories = async (userId, startDate, endDate) => {
    const response = await axios.get(`${ACTIVITY_API}/activity/getCaloriesByTimeRange/${userId}/${startDate}/${endDate}`);
    const sumCalories = response.data;
    // console.log(sumCalories);
    return sumCalories;
}

export { findCalories };