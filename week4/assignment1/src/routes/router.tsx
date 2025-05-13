import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Info from '../pages/info/Info';
import Search from '../pages/search/Search';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />, 
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'mypage/info',
        element: <Info />,
      },
      {
        path: 'mypage/search',
        element: <Search />,
      },
    ],
  },
]);

export default router;
