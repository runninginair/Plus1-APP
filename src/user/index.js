import React, { useState, useEffect } from "react";
import NavBar from "../user-nav/nav.js";
import { updateWeight, updateHeight } from "./update-user-profile.js";
import { UserLogin } from "./find-user.js";

const UserComponent = () => {

    const user_Id = 1;
    const [currUser, setCurrUser] = useState('');

    const userLogin = async () => {
        const response = await UserLogin(user_Id);
        setCurrUser(response);
        // console.log(currUser);
    }

    useEffect(() => {
        userLogin();
        setUserWeight();
        setUserHeight();
    }, []);


    // const userName = {currUser.firstName};
    const image_src = "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png";
    const currWeight = currUser.weight;
    const currHeight = currUser.height;

    const [weight, setWeight] = useState("");
    const [userWeight, setUserWeight] = useState(currWeight);
    const [height, setHeight] = useState("");
    const [userHeight, setUserHeight] = useState(currHeight);

    return (
        <div>
            <center><br />
                {<NavBar />}
                <h1>Hello, <span className="fw-bold">{currUser.firstName}</span>! Welcome Back!</h1>
                <span className="ms-5">
                    <img className="rounded-circle" height={88}
                        src={image_src} alt="avator" />
                </span>
            </center>

            <div className="container align-content-center ms-5">
                <ul className="fw-semibold">
                    <li>User: <span className="text-primary fw-bolder">
                        {currUser.firstName} {currUser.lastName}</span>
                    </li><br />

                    <li>Phone: {currUser.phone} </li><br />
                    <li>Weight: <span className="fw-bolder text-success">{userWeight || currUser.weight} </span> bls</li><br />

                    <input
                        type="text"
                        onChange={(e) => setWeight(e.target.value)} />
                    <button className="btn btn-success fw-bold ms-3" 
                        onClick={() => {
                        updateWeight(user_Id, weight);
                        setUserWeight(weight);
                        alert("Your Weight Information Updated Successfully.")
                    }}> Update Weight </button><br /><br />

                    <li>Height: <span className="fw-bolder text-success">
                        {userHeight || currUser.height} </span> inch </li><br />

                    <input
                        type="text"
                        onChange={(e) => setHeight(e.target.value)} />
                    <button className="btn btn-success fw-bold ms-3" 
                        onClick={() => {
                        updateHeight(user_Id, height);
                        setUserHeight(height);
                        alert("Your height information updated successfully.")
                    }}> Update Height</button><br /><br />
                </ul>
            </div>

            {/* <pre> {JSON.stringify(currUser, null, 2)} </pre> */}

        </div>
    );
}

export default UserComponent;