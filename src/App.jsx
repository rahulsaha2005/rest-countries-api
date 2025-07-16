import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import CountryDetail from "./CountryDetail";
import ShimmerHomePage from "./shimmerHomePage"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/country/:name",
        element: <CountryDetail />,
      },
    ],
  },
]);

export default router;
