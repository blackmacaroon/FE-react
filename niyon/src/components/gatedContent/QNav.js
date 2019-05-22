import React from 'react';
import { NavLink } from 'react-router-dom';

function QNav() {
      const logout = e => {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            window.location = '/';
      };

      return (
            <div className='nav-container'>
                  <h1>niyon</h1>
                  <nav className='nav'>
                        <NavLink to='/ask/new'>Ask</NavLink>
                        <NavLink to='/ask/history'>History</NavLink>
                        <NavLink exact to='/' onClick={logout}>Logout</NavLink>
                  </nav>

            </div>
      )
}

export default QNav;