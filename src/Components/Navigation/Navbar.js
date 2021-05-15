import React from 'react';

const Navbar = () => {
   
        return ( 
            <nav className="navbar">
                <h1 >CryptoDash</h1>
                <div  className="links">
                      <div className="menu" >      
                         <div className="menu-line"id="line1"></div>
                         <div className="menu-line"id="line2"></div>
                         <div className="menu-line" id="line3"></div>                      
                      </div>  
                </div>
            </nav> 
         );  
}
 
export default Navbar;