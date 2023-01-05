import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './app/theme.scss';
import Dashboard from './screens/dashboard';
import Login from './screens/login';
import Register from './screens/register';
import ErrorPage from './screens/error';
import Guide from './screens/guide';
import NavBar from './components/navbar';
import Projects from './screens/projects';
import AddArtisan from './screens/add-artisan';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/guide',
        element: <Guide />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/add-artisan',
        element: <AddArtisan />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
