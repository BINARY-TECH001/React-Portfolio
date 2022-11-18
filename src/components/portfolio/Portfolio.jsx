import React from 'react'
import './portfolio.css'
import Img1 from "../../assets/MinuteApp.PNG"
import Img2 from "../../assets/dashboard.PNG"
import Img3 from "../../assets/wages.PNG"
import Img4 from "../../assets/dashboard.PNG"
import Img5 from "../../assets/Crime.PNG"
import Img6 from "../../assets/IgClone.JPG"


const data = [
  {
    id: 1,
    img: Img1,
    title: "Meeting Minutes Management System",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 2,
    img: Img2,
    title: "Meeting Minutes Management System Dashboard",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 3,
    img: Img3,
    title: "Employees wages Calculator & Report",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 4,
    img: Img4,
    title: "Meeting Minutes Management System Dashboard",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 5,
    img: Img5,
    title: "FRSC Crime Reporting System",
    github: "https://github.com",
    demo: "#"
  },
  {
    id: 6,
    img: Img6,
    title: "Instagram Page Clone Using React & Dexiie",
    github: "https://github.com/BINARY-TECH001/ig-clone/tree/master",
    demo: "https://binarytech-IgClone.netlify.app"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Works </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        {
          data.map(({id, img, title, github, demo})=>{
            return(
          <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={img} alt={title} />
          </div>
          <h3> {title} </h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href={demo} className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio