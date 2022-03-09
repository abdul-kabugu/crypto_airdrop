import React from 'react';


const Navbar = () => {
    return <div className='navbar-container'>
       <div className='left-nav'><p className='logo'> <span className='logo-latter'>a</span>bdul <span className='logo-latter'>k</span>abugu</p></div>
       <div className='right-nav'>
           <ul className='nav-list'>
               <li className='nav-item'>lightpaper</li>
               <li className='nav-item'>core team</li>
           </ul>
           <button className='contact-btn'>contact us</button>
       </div>
    </div>;
}



export default Navbar;