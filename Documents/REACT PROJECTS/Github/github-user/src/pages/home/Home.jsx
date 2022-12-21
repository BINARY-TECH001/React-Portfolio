import "./home.scss"
import { useContext } from "react";
import { GithubContext } from "../../context/githubContext";
import UserInfo from "../../components/userInfo/UserInfo";
import Card from "../../components/userCard/Card";


const Home = () => {
  const data = useContext(GithubContext)

  return (
    <div className="home">
        <Card />
        <UserInfo />
    </div>
  )
}

export default Home