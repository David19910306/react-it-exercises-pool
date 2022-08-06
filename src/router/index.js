import {lazy} from "react";

export const MainComponent = lazy(() => import("../pages"))
export const RegisterComponent = lazy(() => import("../pages/register"))
export const LoginComponent = lazy(() => import("../pages/login"))
export const HomeComponent = lazy(() => import("../pages/home"))
export const FastComponent = lazy(() => import("../pages/fast"))
export const MineComponent = lazy(() => import("../pages/mine"))


const routers = [
  {
    path: "/",
    element: <MainComponent />,
    children: [{
      path: "/home",
      element: <HomeComponent />
    }, {
      path: "/fast",
      element: <FastComponent />
    }, {
      path: "/profile",
      element: <MineComponent />
    }]
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
