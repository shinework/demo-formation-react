import { createBrowserRouter } from "react-router-dom";
import Chat from "../components/Chat";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

export default router;
