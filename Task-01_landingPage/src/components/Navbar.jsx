import React, { useState } from "react";
import "./Nav.css";
import { IoMdMenu } from "react-icons/io";

function Navbar() {

    const [isActive, setActive] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <img src='./images/logo.png' alt="logo"></img>
        <span className="nav_name">Lamborgini</span>

        <div className={`${isActive ? 'nav_menu_active' : 'nav_menu'}`}>
          <ul className="nav_list">
            <li className="nav_item">Models</li>
            <li className="nav_item">Brand</li>
            <li className="nav_item">Store</li>
            <li className="nav_item">Experience</li>
          </ul>
        </div>

        <div className='nav_toggle' onClick={()=> setActive(!isActive)}>
          <IoMdMenu size={30}/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
