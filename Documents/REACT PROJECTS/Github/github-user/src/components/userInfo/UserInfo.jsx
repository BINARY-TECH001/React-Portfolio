import "./userInfo.scss"
import { GithubContext } from "../../context/githubContext"
import { GoRepo, GoGist } from "react-icons/go"
import { FiUsers, FiUserPlus } from "react-icons/fi"
import { useContext } from "react"

const UserInfo = () => {
    const { githubUser } = useContext(GithubContext)
    const public_repos = githubUser.public_repos
    const followers = githubUser.followers
    const following = githubUser.following
    const public_gists = githubUser.public_gists
    // const [ public_repos, followers, following, public_gists ] = githubUser


    const items = [
        {
        id: 1,
        icon: <GoRepo className="icon" />,
        label: "Repos",
        value: public_repos,
        color: "pink"
    },
        {
        id: 2,
        icon: <FiUsers className="icon" />,
        label: "Followers",
        value: followers,
        color: "green"
    },
        {
        id: 3,
        icon: <FiUserPlus className="icon" />,
        label: "Following",
        value: following,
        color: "purple"
    },
        {
        id: 4,
        icon: <GoGist className="icon" />,
        label: "Gists",
        value: public_gists,
        color: "yellow"
    },
]



return (
    <div className="info">
        {
            items.map((item) =>{
                return <Item key={item.id} {...item}></Item>
            })
        }
    </div>
  )
}

const Item = ({icon, label, value}) => {
    return (
        <article className="item">
            <span className="icons"> {icon} </span>
            <div className="item__info">
                <h2>{value}</h2>
                <span>{label}</span>
            </div>
        </article>
    )
}


export default UserInfo
