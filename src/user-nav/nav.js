import React from "react";

const NavBar = () => {
    return (
        <nav>
            <a href="/home"> Home </a> |            
            <a href="/user/search-act"> Search Activity </a> |
            <a href="/user/search-cal"> Search Calories </a> |
            <a href="/user/search-dis"> Search Distance </a> |
            <a href="/user/profile"> Profile </a> |
            <a href="/"> Log out </a>
        </nav>
    );
};

export default NavBar;