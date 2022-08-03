import './App.css';

import React from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {

    return (
      <Router>
      <div>
        <Navbar/>

        <Routes>


        <Route exact path="/newsmonkey/">
        {/* <Route exact path={process.env.PUBLIC_URL + '/'}> */}
            <News key="general" pagesize={9} contenttype="general"/>
        </Route>
        <Route exact path="/newsmonkey/business">
            <News key="business" pagesize={9} contenttype="business"/>
        </Route>
        <Route exact path="/newsmonkey/entertainment">
            <News key="entertainment" pagesize={9} contenttype="entertainment"/>
        </Route>
        <Route exact path="/newsmonkey/science">
            <News key="science" pagesize={9} contenttype="science"/>
        </Route>
        <Route exact path="/newsmonkey/sports">
            <News key="sports" pagesize={9} contenttype="sports"/>
        </Route>
        <Route exact path="/newsmonkey/technology">
            <News key="technology" pagesize={9} contenttype="technology"/>
        </Route>



        </Routes>



      </div>
      </Router>
    )
  
}

export default App