import React from 'react'
import './about.css'
import ME from '../../assets/ade.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 3+ Years Working </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5> Clients </h5>
              <small> 200+ Worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5> Projects </h5>
              <small> 80+ Completed </small>
            </article>
          </div>
          <p>Hello👋. This is Abdulrafiu Mubarak. I'm a passionate Fullstack developer living in Ibadan, Nigeria. I've made a lot of projects with multiple web technologies.
            I love being part of a solution driven tech community.I love to teach others about web development. I love open source development and i build things on my Github profile. I love Javascript.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default about