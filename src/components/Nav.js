import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

function Nav() {
  return (
    <div className='Navbox'>
      <Link to="/">Wary</Link>
      <Link to="/">Report</Link>
      <Link to='/browse'>Browse</Link>
      <Link to='/communities'>Dashboard</Link>
    </div>

  )
}

export default Nav