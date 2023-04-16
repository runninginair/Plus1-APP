import React from "react";
import HomeNav from "../home-nav/navhome.js";


const LoginComponent = () => {

    return (
        <div>
            <center><br />
                {<HomeNav />}

                <h3>User ID: </h3>
                <input type="text" />

                <h3>Password: </h3>

                <title>Password: </title>
                <input type="text" /><br /><br /><br />
                <div>
                    <a href="/user">
                        <button > Login </button>
                    </a>
                </div>
                {/* <pre> {JSON.stringify(object, null, 2)} </pre> */}
            </center>
        </div>
    );
}

export default LoginComponent;