import "./style.css"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Search from './pages/search/Search'
import Explore from './pages/explore/Explore'
import Home from './pages/home/Home'
import { useContext } from 'react'
import { DarkModeContext } from "./context/darkModeContext";


function App() {

const { darkMode } = useContext(DarkModeContext)

const Layout = () =>{
  return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <div className="theme">
            <Navbar />
          <div className='outlet'>
            <Outlet />
          </div>
        </div>
      </div>
  )
}


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/explore",
          element: <Explore />
        },
        {
          path: "/search",
          element: <Search />
        }

      ]
    }
  ])

return (

  <div className="app">
    <RouterProvider router={router}/>
  </div>
);

}


export default App;
