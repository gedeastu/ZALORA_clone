import React from 'react'
import { Suspense, lazy } from 'react'
import {
  createBrowserRouter, 
  Route,
  createRoutesFromElements,
  RouterProvider
} 
from 'react-router-dom'

const RootLayout = lazy(()=>import('./layouts/RootLayout'));
const MainLayout = lazy(()=>import('./layouts/MainLayout'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<MainLayout/>}>

      </Route>
    </Route>
  )
)
const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}/>
    </Suspense>
    </>
  )
}

export default App