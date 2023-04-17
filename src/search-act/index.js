import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../user-nav/nav.js";
import { useParams } from "react-router-dom";
import { findActivities } from "./find-activites.js";


const SearchActScreen = () => {
    const user_Id = 1;
    const image_src = "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png";

    const { searchTerm } = useParams();

    const [date, setDate] = useState('');
    const [results, setResults] = useState('');


    const searchAct = async () => {
        alert("If there is a record of activity during this date, the search results will be displayed below...");
        const response = await findActivities(date, user_Id);
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

                <h2>Search Your Activities by Date</h2>

                <input
                    type="date"
                    id="date"
                    className="form-control mb-2"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ width: "60%" }} />

                <button className={"btn btn-primary mb-3"}
                    onClick={searchAct} >
                    Search
                </button>

                <h3>Activites Summary</h3>

                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><h4> Activity </h4></td>
                                <td> Calories </td>
                                <td> Distance(m) </td>
                                <td> Duration(s) </td>
                                <td> Steps </td>
                            </tr>

                            {results && results.map((results) => (
                                <tr key={results.id}>
                                    <td><h4>{results.activityName}</h4></td>
                                    <td>{results.calories}</td>
                                    <td>{results.distance}</td>
                                    <td>{results.duration}</td>
                                    <td>{results.steps}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </center>

            {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}

        </div>
    );
}

export default SearchActScreen;