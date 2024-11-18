// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import './index.sass'

import DishPage from './pages/DishPage/DishPage';
import MainPage from './pages/MenuPage/MainPage';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: '/dishes/',
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: '/dishes/:id',
    element: (
      <Layout>
        <DishPage />
      </Layout>
    ),
  },
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
]);


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}></RouterProvider>
)