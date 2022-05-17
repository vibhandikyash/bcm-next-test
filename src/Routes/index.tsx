import { ReactElement, ReactNode } from "react";
import Home from "../Pages/Home";
import ControlPanel from "../Pages/ControlPanel";

export interface RouteType {
  path: string;
  key: string;
  element: ReactNode | ReactElement;
}

const ROUTES: Array<RouteType> = [
  {
    path: "/",
    key: "home",
    element: <Home />,
  },
  {
    path: "/control-panel",
    key: "control-panel",
    element: <ControlPanel />,
  },
];

export default ROUTES;
