import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx'
import UpdateCoffe from './Components/UpdateCoffee/UpdateCoffe.jsx'



const router=createBrowserRouter([

{

path:'/',
element:<App> </App>,
loader:()=>fetch('http://localhost:10000/coffee')


},
{
path:'/addcoffee',
element:<AddCoffee> </AddCoffee>

},

{
  
  path:'/updatecofee',
  element:<UpdateCoffe> </UpdateCoffe>
}



]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
