import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Applayout } from "./layout/app-layout";
import { Home } from "./pages/home";
import { AddGame } from "./pages/add-game";
import { GamesProvider } from "./context/game-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-game",
        element: <AddGame />,
      },
    ],
  },
]);

export default function App() {
  return <GamesProvider><RouterProvider router={router} /></GamesProvider>;
}
