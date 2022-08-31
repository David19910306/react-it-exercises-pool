import {lazy} from "react";

const MainComponent = lazy(() => import("../pages"))
const RegisterComponent = lazy(() => import("../pages/register"))
const LoginComponent = lazy(() => import("../pages/login"))
const HomeComponent = lazy(() => import("../pages/home"))
const FastComponent = lazy(() => import("../pages/fast"))
const MineComponent = lazy(() => import("../pages/mine"))
const ToggleComponent = lazy(() => import("../pages/toggle"))

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
  },
  {
    path: "/toggle",
    element: <ToggleComponent />
  }
]

export default routers
