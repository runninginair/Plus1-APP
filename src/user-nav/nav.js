import React from "react";

const NavBar = () => {
    return (
        <nav>
            <a href="/home"> Home </a> |
            <a href="/user/search-act"> Search Activity </a> |
            <a href="/user/search-cal"> Search Calories </a> |
            <a href="/user/search-dis"> Search Distance </a> |
            <a href="/user"> Profile </a> |
            <a href="/"
                onClick={() => { alert("Successfully Loged out.") }} > Log out
            </a>
        </nav>
    );
};

export default NavBar;