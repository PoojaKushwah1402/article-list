import React from 'react'
import { NavLink } from "react-router-dom";

import './Header.css';



function HeaderTemplate() {


  return (
    <div className="header-container">
            <NavLink to={{pathname:"/"}} className='brand-name'>
              Articles
            </NavLink>   
            <NavLink to={{pathname:"/addarticle"}}  className='add-article'>
              Add new Article
            </NavLink>
    </div>
  );
}

export default HeaderTemplate;


