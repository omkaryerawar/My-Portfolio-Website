import "./NavbarStyles.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar=() => {

    const[click,setClick]=useState(false);
    const handleClick =() => setClick(!click);          // for hamburger menu

    const [color,setColor]=useState(false)              //for Navbar
    const changeColor= () =>{
        if(window.scrollY >=100)                       //scrolling down Navbar color will be changed
        {
            setColor(true);

        }
        else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor)          //on scrolling down changecolor funtion will be listned

  return (
    <div className={color? "header header-bg":"header"}>

        <Link to="/">
            <h1>Portfolio</h1>
        </Link>

        <ul className= {click ? "nav-menu active":"nav-menu"}>  {/*  for hamburger menu */}


            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>

            {click? <FaTimes size={20} style={{color:"#fff"}}/>
            :<FaBars size={20} style={{color:"#fff"}}/>}
            
                 {/*  creating hamburgermenu */}

        </div>





        
      
    </div>
  )
}

export default Navbar
