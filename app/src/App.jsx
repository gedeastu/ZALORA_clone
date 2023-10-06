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
const WanitaLayout = lazy(()=>import('./layouts/'))
const App = () => {
  return (
    <>
    
    </>
  )
}

export default App