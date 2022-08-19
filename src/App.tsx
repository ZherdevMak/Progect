import React from 'react';
import './App.css';
import Main from "./Main/Pages/Main";
import {BrowserRouter} from "react-router-dom";
import {RoutesPage} from "./Main/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Main/>
          <RoutesPage/>
        {/*{<Feature/>}*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
