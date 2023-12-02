import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import { Home } from './components/home/Home'

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout />,
    children:[
      { index: true, element:<Home /> },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>      
    </>
  )
}

export default App
