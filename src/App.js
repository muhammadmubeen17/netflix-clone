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
    path: "/netflix-clone/pk",
    element: <Signup />,
  },
  {
    path: "/netflix-clone/",
    element: <Navigate to="/netflix-clone/pk" replace />,
  },
  {
    path: "/netflix-clone/pk/login",
    element: <SignIn />,
  },
  {
    path: "/netflix-clone/pk/LoginHelp",
    element: <LoginHelp />,
  },
  {
    path: "*",
    element: <Navigate to="/netflix-clone/" replace />
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
