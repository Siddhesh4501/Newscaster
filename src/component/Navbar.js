import React,{useState} from 'react'
import {
  Link
} from "react-router-dom";




const Navbar =()=> {
      const [Searcontent, setSearcontent] = useState("");
      const handleChange = event => {
        setSearcontent(event.target.value);
        console.log('value is:', event.target.value);
      };

    
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/newscaster/">NewsCaster</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/newscaster/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/newscaster/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/newscaster/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/newscaster/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/newscaster/technology">Technology</Link>
        </li>
      </ul>
      <div className="d-flex">
        <input className="form-control me-2" type="search" onChange={handleChange} value={Searcontent} placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit" >Search</button> */}
        <Link className="btn btn-outline-success" to={`/newscaster/search/${Searcontent}`} >Search</Link>
      </div>
    </div>
  </div>
</nav>
            </div>
        )
    
}

export default Navbar
