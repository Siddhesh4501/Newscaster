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


        <Route exact path="/newscaster/" element={<News key="general" pagesize={9} contenttype="general"/> } />
        {/* <Route exact path={process.env.PUBLIC_URL + '/'}> */}
            
        <Route exact path="/newscaster/business" element={<News key="business" pagesize={9} contenttype="business"/>}  />
            
        <Route exact path="/newscaster/entertainment" element={<News key="entertainment" pagesize={9} contenttype="entertainment"/>} />
            
        <Route exact path="/newscaster/science" element={<News key="science" pagesize={9} contenttype="science"/>}  />
            
        <Route exact path="/newscaster/sports" element={ <News key="sports" pagesize={9} contenttype="sports"/>} />
           
        <Route exact path="/newscaster/technology" element={<News key="technology" pagesize={9} contenttype="technology"/>} />

        <Route exact path="/newscaster/search/:id"  element={<News pagesize={9}/>} />
            



        </Routes>



      </div>
      </Router>
    )
  
}

export default App