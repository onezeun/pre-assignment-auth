import React from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import Login from 'pages/Login';

function App() {
  const isAuth = localStorage.getItem('user');

  let element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/main" />,
    },
    {
      path: '/main',
      element: isAuth ? <Main /> : <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: !isAuth ? <Login /> : <Navigate to="/main" />,
    },
  ]);
  return element;
}
export default App;
