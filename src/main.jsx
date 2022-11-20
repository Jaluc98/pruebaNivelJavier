import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './components/App'
import Usuario from './components/Usuario'
import Home from './page/Home'
import './style/index.css';

//Establecer las rutas de nuestra página 
const router = createBrowserRouter([
   {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/usuario/:id',
        element: <Usuario />
      }
    ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
