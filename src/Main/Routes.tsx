import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import ComponentTestPage from "./Pages/ComponentTestPage";
import Error404 from "./Pages/Error404";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Profile from "./Pages/Profile";
import RestorePassword from "./Pages/RestorePassword";
import NewPassword from "./Pages/NewPassword";


export const PATH = {
    TESTPAGE: '/test-page',
    LOGIN: '/login',
    REGISTRATION:'/registration',
    PROFILE:'profile',
    RESTOREPASSWORD:'restore-password',
    NEWPASSWORD:'new-password',
    ERROR: '/*'

    // add paths
}
export const RoutesPage = () => {
    return (

        <div>
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>

                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.ERROR} element={<Error404/>}/>
                <Route path={PATH.RESTOREPASSWORD} element={<RestorePassword/>}/>
                <Route path={PATH.NEWPASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.TESTPAGE} element={<ComponentTestPage/>}/>
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>)
};


