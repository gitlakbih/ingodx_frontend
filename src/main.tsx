import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import About from './Pages/About.tsx';
import Delivery from './Pages/delivery.tsx';
import Market from './Pages/Market.tsx';
import TsakherLiya from './Pages/TsakherLiya.tsx';
import Login_Signup from './Pages/Login.tsx';
import Profile from './Pages/profile.tsx';
import './index.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Create a Protected Route Component
const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/Login" />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Delivery',
    element: <Delivery />,
  },
  {
    path: '/Market',
    element: <Market />,
  },
  {
    path: '/TsakherLiya',
    element: <TsakherLiya />,
  },
  {
    path: '/Login',
    element: <Login_Signup />,
  },
  {
    path: '/Profile',
    // element: <ProtectedRoute element={<Profile />} />,
    element:<Profile />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
