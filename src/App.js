import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signup from './screens/Signup';
import SignIn from './screens/SignIn';
import LoginHelp from './screens/LoginHelp';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/pk",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Navigate to="/pk" replace />,
  },
  {
    path: "/pk/login",
    element: <SignIn />,
  },
  {
    path: "/pk/LoginHelp",
    element: <LoginHelp />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  },
]);

function App() {
  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
