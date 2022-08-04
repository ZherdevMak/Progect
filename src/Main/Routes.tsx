import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import ComponentTestPage from "./Pages/ComponentTestPage";
import Error404 from "./Pages/Error404";


export const PATH = {
    TESTPAGE: '/test-page',

    // add paths
}
export const RoutesPage = () => {
    return (

        <div>
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.TESTPAGE}/>}/>

                <Route path={PATH.TESTPAGE} element={<ComponentTestPage/>}/>
                {/*<Route path={PATH.JUNIOR} element={<Junior/>}/>*/}
                {/*<Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>*/}
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>)
};


