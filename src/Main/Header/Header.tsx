import React from 'react';
import stl from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <div style ={{display:"inline-block",}} >
            <NavLink className={stl.nav} to='/login'>Login</NavLink>
            <NavLink className={stl.nav} to='/registration'>Registration</NavLink>
            <NavLink className={stl.nav} to='/profile'>Profile</NavLink>
            <NavLink className={stl.nav} to='/*'>Error</NavLink>
            <NavLink className={stl.nav} to='/restore-password'>Restore password</NavLink>
            <NavLink className={stl.nav} to='/new-password'>New password</NavLink>
            <NavLink className={stl.nav} to='/test-page'>Component Test Page</NavLink>

        </div>
    );
};

export default Header;