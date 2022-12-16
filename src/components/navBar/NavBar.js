import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
   return (
      <div className='navbar'>
         <div className='left'>
            <h1>
               Mass<span>Info</span>
            </h1>
         </div>
         <div className='center'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/politique'>Politique</NavLink>
            <NavLink to='/societe'>Societe</NavLink>
            <NavLink to='/economie'>Economie</NavLink>
            <NavLink to='/culture'>Culture</NavLink>
            <NavLink to='/sport'>Sport</NavLink>
         </div>
         <div className='right'>
            <div className='icons'>
               <i className='fa-brands fa-square-facebook'></i>
               <i className='fa-brands fa-twitter'></i>
               <i className='fa-brands fa-youtube'></i>
            </div>
            <div className='btn'>
               <Link to='/'>Contact</Link>
            </div>
         </div>
      </div>
   );
};

export default NavBar;
