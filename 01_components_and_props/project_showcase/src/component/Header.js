// import React from "react";
// import { useState } from "react";

const Header = ({isDarkMode, setDarkMode}) => {
    
    // initialize isDarkMode state + setter function 
    // array destructuring assignment
        // useState() => returns a array

        // isDarkMode => State
        // setDarkMode => setter function (automatically trigger re-render)
        // false => initial value for our state

    // console.log(useState(false))

    // const [isDarkMode, setDarkMode] = useState(false);

    const handleClick = () =>  {
        setDarkMode(!isDarkMode);
    }
    
    return (
        <header>
            <h1>
                <span className="logo">{"//"}</span>
                Project Showcase
            </h1>
            <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button> 
        </header>
    );
}
export default Header;