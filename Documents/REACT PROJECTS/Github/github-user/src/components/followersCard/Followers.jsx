import "./followers.scss"
import { GithubContext } from "../../context/githubContext"
import { useContext } from "react"
import img1 from "../../images/ade.jpg"


const Followers = () => {
    const { followers } = useContext(GithubContext)

    return (
        <div className='followers__container'>
            <h2> Followers </h2>
            {followers.map((follower, index )=> {
                return(
                    <article className="follow" key={index}>
                        <img src={follower.avatar_url || img1} alt="follower" />
                        <div className="info">
                            <h3> {follower.login} </h3>
                            <a className="link" href={follower.html_url || "https://github.com/BINARY-TECH001"}> {follower.html_url} </a>
                        </div>
                    </article>
                )
            })
        }
    </div>
  )
}

export default Followers