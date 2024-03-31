import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Login from "./views/Login.jsx";
import Surveys from "./views/Surveys.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Signup from "./views/Signup.jsx";
import SurveyView  from "./views/SurveyView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: '/dashboard',
        element: <Navigate to={'/'} />
      },
      {
        path: '/surveys',
        element: <Surveys />
      },
      {
        path: "/surveys/create",
        element: <SurveyView />,
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
  }
])

export default router
