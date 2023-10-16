/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import logo from "../src/assets/icons/getlinked.svg"
import menu from "../src/assets/icons/menu.svg"
import cancle from "../src/assets/icons/cancle.svg"
import circle from "../src/assets/icons/cancel_circle.svg"
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  // defining toggle menu function
  const setMenu = () => { setShowMenu(!showMenu) }
  useEffect(() => {
    if (showMenu) {
      // Add the class to the body when the modal is open
      document.body.classList.add('overlay-open');
    } else {
      // Remove the class when the modal is closed
      document.body.classList.remove('overlay-open');
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove('overlay-open');
    };
  }, [showMenu]);




  return (

    <div className='navbar'>

      <div className='navbar-container' >
        {/* navbar logo */}
        <img className="nav-logo" src={logo} alt="" />

        <div className="liok">

          {/* menu toggling */}
          <div onClick={setMenu}>
            {!showMenu ? (<img className="nav-menu" src={menu} alt="" />) : (<div className='nav-menu circle'>
              <img className='x' src={cancle} alt="" /></div>)}
          </div>
        </div>


        <aside className={!showMenu ? "ll" : "menu"}>
          <div>
            <div onClick={setMenu} className='nav-menu circle'>
              <img className='x' src={cancle} alt="" /></div>
          </div>
          <div className="menu-item-container">

            <div className="menu-item-two">


              <div className="menu-item">Timeline</div>
              <div className="menu-item">Overview</div>
              <div className="menu-item">FAQs</div>
              <Link to="/contact" className="menu-item">Contacts</Link>
            </div>


            <Link to="/Registration" >
              <button className="menu-register">
                Register
              </button>
            </Link>

          </div>

        </aside>

      </div>

      <div className="nav-line">
      </div>
    </div>

  )
}

export default Navbar