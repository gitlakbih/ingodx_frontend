import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import About from './Pages/About.tsx'
import Delivery from './Pages/delivery.tsx'
import Market from './Pages/Market.tsx'
import TsakherLiya from './Pages/TsakherLiya.tsx'
import Login_Signup from './Pages/Login.tsx'
import Profile from './Pages/profile.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider, 
  Switch, 
  Redirect
} from "react-router-dom";

// import ErrorPage from "./error-page";
// errorElement: <ErrorPage />,

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login_Signup/>,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Delivery",
    element: <Delivery />,
  },
  {
    path: "/Market",
    element: <Market/>,
  },
  {
    path: "/TsakherLiya",
    element: <TsakherLiya/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>,
)
