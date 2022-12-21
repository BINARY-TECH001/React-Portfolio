import "./navbar.scss"
import React, { useContext } from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {TbListSearch} from "react-icons/tb"
import {GoGlobe} from "react-icons/go"
import {MdOutlineWbSunny} from "react-icons/md"
import {MdDarkMode} from "react-icons/md"
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext"

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext)

  return (
    <div className="navbar__container">
      <div className="item">
        <Link to="/" className="link">
          <BiHomeAlt className="icon"/>
        <span> Home </span>
        </Link>
      </div>

      <div className="item">
        <Link to="/search" className="link">
            <TbListSearch className="icon"/>
            <span> Search </span>
        </Link>
      </div>

      <div className="item">
        <Link to="/explore" className="link">
          <GoGlobe className="icon"/>
          <span> Explore </span>
        </Link>
      </div>

      <div className="item">
      <Link className="link">
      {darkMode ? (
        <div className="modeCon">
          <MdOutlineWbSunny className='icon' onClick={toggle}/>
          <span> Light </span>
        </div>
        ) : (
          <div className="modeCon">
          <MdDarkMode className='icon' onClick={toggle}/>
          <span> Dark </span>
        </div>
        )}
        </Link>
      </div>
    </div>
  )
}

export default Navbar