import {lazy} from "react";
import {Navigate} from 'react-router-dom'

export const RegisterComponent = lazy(() => import("../pages/register"))
export const LoginComponent = lazy(() => import("../pages/login"))
export const HomeComponent = lazy(() => import("../pages/home"))


const routers = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <HomeComponent />
  },
  {
    path: "/login",
    element: <LoginComponent />
  },
  {
    path: "/register",
    element: <RegisterComponent />
  }
]

export default routers
