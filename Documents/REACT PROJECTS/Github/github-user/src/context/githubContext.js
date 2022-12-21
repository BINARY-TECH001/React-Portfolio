import React, { useState, useEffect } from "react";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import axios from "axios";

// const axios = require("axios").default;
// axios.defaults.baseURL = "https://api.github.com";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  // GET USER ENDPOINT
  // https://api.github.com/users/binary-tech001

  // REQUEST LOADING
  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);

  const checkRequest = () => {
    axios
      .get(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let { remaining } = data.rate;
        setRequest(remaining);
        console.log(remaining);
        if (remaining === 0) {
          // throw error
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchGithubUser = async (user) => {
    const response = await axios.get(`${rootUrl}/users/${user}`)
    .catch((err) => console.log(err));
      console.log(response);
      if(response){
        setGithubUser(response.data)
        const {followers_url} = response.data;
        axios.get(`${followers_url}?per_page=100`)
        .then((response) => setFollowers(response.data))
      }else{
        console.log("No Such User !!!")
      }
  };
  useEffect(checkRequest, []);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, request, searchGithubUser, loading }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
