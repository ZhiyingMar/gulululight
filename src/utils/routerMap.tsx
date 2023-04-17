import Home from "@/components/Home";
import Register from "@/components/register";
import { createHashRouter } from "react-router-dom";
import App from "@/App";
const routerMap = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  }
]);

export default routerMap;
