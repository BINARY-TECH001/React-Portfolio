import "./search.scss"
import {MdSearch} from "react-icons/md"
import UserInfo from "../../components/userInfo/UserInfo";
import { useContext, useState } from "react";
import Card from "../../components/userCard/Card";
import Followers from "../../components/followersCard/Followers";
import { GithubContext } from "../../context/githubContext";


const SearchBox = () => {
    const [user, setUser] = useState('')
    const { searchGithubUser } = useContext(GithubContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(user){
          searchGithubUser(user)
        }
    }

  return (
    <div className='search_card'>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-control">
            <MdSearch className="icon"/>
            <input 
            type="text" 
            placeholder='Enter Github Username'
            value={user}
            onChange={(e) =>{
                setUser(e.target.value)
            }}
            />
            <button type='submit'> Search </button>
        </div>
      </form>
    </div>
  )
}


const Search = () => {
  return (
    <div className="search__container">
      <SearchBox />
      <UserInfo />
      <div className="inform">
        <Card />
        <Followers />
      </div>
    </div>
  )
}

export default Search