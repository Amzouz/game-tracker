import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Applayout } from "./layout/app-layout";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
