import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../user-nav/nav.js";
import { useParams } from "react-router-dom";
import { findCalories } from "./find-calories.js";


const SearchCaloriesScreen = () => {
    const user_Id = 1;
    const image_src = "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png";
    const { searchTerm } = useParams();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [results, setResults] = useState('');

    const searchCal = async () => {
        const response = await findCalories(user_Id, startDate, endDate);
        setResults(response);
    }

    useEffect(() => {
        if (searchTerm) { }
    }, [searchTerm]);

    return (
        <div>
            <center>
                <br />{<NavBar />}<br />
                <span>
                    <img className="rounded-circle" height={88}
                        src={image_src} alt="avator" />
                </span>

                <h2>Calculates Total Calories You Burned during a Certain Period:</h2><br />

                <spam> Start Date: </spam>
                <input
                    type="date"
                    id="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    style={{ width: "50%" }} /><br /><br />

                <spam> End Date: </spam>
                <input
                    type="date"
                    id="date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    style={{ width: "50%" }}/><br /><br />

                <button className={"btn btn-primary fw-bold"}
                    onClick={searchCal}> Calculate
                </button><br /><br />

                <h3>RESULTS:</h3>

                <h1>
                    {results && results}
                </h1>

            </center>

        </div>
    );
}

export default SearchCaloriesScreen;