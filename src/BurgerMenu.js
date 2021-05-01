import { slide as Menu } from 'react-burger-menu'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
  
  export default class SlideMenu extends React.Component{

  render () {

    return (
      <Menu isOpen={false} right disableCloseOnEsc disableAutoFocus >
          <Link to="/"id="home" className="menu-item" >
            Home
         </Link>
         <Link to="/pageone" id="pageone" className="menu-item" >
           Page one
         </Link>
         <Link to="/pagetwo" id="pagetwo" className="menu-item">
           Page two
         </Link>
      </Menu>
      
    );
    
  }
}

