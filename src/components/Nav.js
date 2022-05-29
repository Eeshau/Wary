import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

function Nav() {
  return (
    <div className='Navbox'>
      <Link to="/">Wary</Link>
      <Link to="/">Home</Link>
      <Link to='/browse'>Browse</Link>
      <Link to='/browse'>Dashboard</Link>
    </div>

  )
}

export default Nav