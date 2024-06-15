import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root.jsx'
import Login from './components/Login.jsx'
import Signin from './components/Signin.jsx'
import Features from './components/Features.jsx'
import Working from './components/Working.jsx'
import Agecheck from './components/Agecheck.jsx'
import Recomendations from './components/Recomendations.jsx'
import History from './components/History.jsx'
import Querys from './components/Querys.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Root/>,
      },
      {
        path: "/home",
        element: <Root/>,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signin",
        element: <Signin/>
      },
      {
        path: "/features",
        element: <Features/>
      },
      {
        path: "/how-it-works",
        element: <Working/>
      },
      {
        path: "/check-age",
        element: <Agecheck/>
      },
      {
        path: "/history",
        element: <History/>,
      },
      {
        path: "/recomendation",
        element: <Recomendations/>,
      },
      {
        path: "/questions",
        element: <Querys/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
