import "./card.scss"
import img1 from "../../images/ade.jpg"
import { GithubContext } from "../../context/githubContext"
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md"
import { useContext } from "react"


const Card = () => {
    const { githubUser } = useContext(GithubContext)
    const avatar_url = githubUser.avatar_url
    const html_url = githubUser.html_url
    const name = githubUser.name
    const company = githubUser.company
    const blog = githubUser.blog
    const location = githubUser.location
    const bio = githubUser.bio
    const twitter_username = githubUser.twitter_username

  return (
    <div className="userCard__container">
        <h2>Github User</h2>
        <div className="top">
            <div className="topInfo">
                <img src={avatar_url || img1} alt="User" />
                <div className="topDesc">
                    <h3>{name || "ABDULRAFIU MUBARAK I"}</h3>
                    <span> @{twitter_username || 'binaryTech001'}</span>
                </div>
            </div>
            <a href={html_url} className="link">
                Follow
            </a>
        </div>

        <div className="midCon">
            <p> {bio} </p>
        </div>

        <div className="bottom">
            <div className="item">
                <MdBusiness className="icons"/>
                <span> {company || "Binary Tech"} </span>
            </div>

            <div className="item">
                <MdLocationOn className="icons"/>
                <span> {location || 'Ibadan, Nigeria'} </span>
            </div>

            <div className="item">
                <MdLink className="icons"/>
                <a href={`https://${blog}`} className="last link"> {blog || "https://binaryportfolio.netlify.app"} </a>
            </div>
        </div>
    </div>
  )
}

export default Card