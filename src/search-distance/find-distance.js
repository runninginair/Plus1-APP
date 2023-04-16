import axios from 'axios';

const ACTIVITY_API = 'http://localhost:8080';

const findDistance = async (userId, startDate, endDate) => {
    const response = await axios.get(`${ACTIVITY_API}/activity/getDistanceByTimeRange/${userId}/${startDate}/${endDate}`);
    const sumCalories = response.data;
    // console.log(sumCalories);
    return sumCalories;
}

export { findDistance };