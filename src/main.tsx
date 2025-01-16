import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route index={true} path='/' element={<HomeScreen/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
