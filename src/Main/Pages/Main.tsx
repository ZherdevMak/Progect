import React from 'react';
import ComponentTestPage from "./ComponentTestPage";
import {HashRouter} from "react-router-dom";
import Header from "../Header/Header";
import Pages from "./Pages";
import {RoutesPage} from "../Routes";

const Main = () => {
    return (
        <div>
            <HashRouter>
                <Header/>
                <RoutesPage/>
            </HashRouter>


        </div>
    );
};

export default Main;