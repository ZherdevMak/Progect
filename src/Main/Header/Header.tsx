import React from 'react';
import ComponentTestPage from "../Pages/ComponentTestPage";
import Error404 from "../Pages/Error404";
import {Navigate, Route, Routes} from "react-router-dom";
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <div>
            <NavLink to='/test-page'>Component Test Page</NavLink>
            {/*<NavLink className={stl.menuItem} to='/junior'>Junior</NavLink>*/}
            {/*<NavLink className={stl.menuItem} to='/junior+'>Junior+</NavLink>*/}

        </div>
    );
};

export default Header;