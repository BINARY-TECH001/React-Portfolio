import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/bg.png'
import HeaderSocials from './HeaderSocials'
import {Typewriter} from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'

const Header = () => {
  return (
    <header>
        <div id='#home' className="container header__container">
            <h5>Hello👋 I'm</h5>
            <h1>Abdulrafiu Mubarak</h1>
            <h5 className="text-light type">
            <Typewriter 
              loop
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
              words={['Website Developer', "Fullstack Developer", "Software Engineer", "React || Node || Javascript || PHP"]}
              /></h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll__down'> Scroll Down </a>
        </div>
    </header>
  )
}

export default Header