import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Principal from './Components/Principal';
import Teacher from './Components/Teacher';
import Student from './Components/Student';
import ErrorPage from './Components/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/principal",
    element: <Principal/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/student",
    element: <Student/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/teacher",
    element: <Teacher/>,
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
