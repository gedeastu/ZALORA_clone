import React from 'react'
import { Suspense, lazy } from 'react'
import {
  createBrowserRouter, 
  Route,
  createRoutesFromElements,
  RouterProvider
} 
from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

const RootLayout = lazy(()=>import('./layouts/RootLayout'));
const MainLayout = lazy(()=>import('./layouts/MainLayout'));
const WanitaPage = lazy(()=>import('./pages/WanitaPage'))
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<WanitaPage/>}/>
        <Route path='/pria' element={<WanitaPage/>}/>
      </Route>
      <Route path='/Kategori' element={<MainLayout/>}>

      </Route>
      <Route path='/Tas' element={<MainLayout/>}>

      </Route>
    </Route>
  )
)
const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}/>
    </Suspense>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
    </>
  )
}

export default App