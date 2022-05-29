import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'
import logo from './logo.png';
function Nav() {
  return (
    <div className='Navbox'>
      <Link to="/" > <img src={logo} alt="logo" /></Link>
      {/* <Link to="/" style={{fontWeight: "700"}}>WARY</Link> */}
      <Link to="/">Report</Link>
      <Link to='/browse'>Browse</Link>
      <Link to='/communities'>Dashboard</Link>
    </div>

  )
}

export default Nav