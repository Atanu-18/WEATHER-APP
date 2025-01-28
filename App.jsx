import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/HOme";
import Privacy from "./Components/Privacy";
import Weather from "./Components/Weather";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home/>
        </div>
      ),
      // errorElement: (
      //   <div>
      //     Sorry page not found,
      //     <Link to={"/"} className="text-blue-500 underline">
      //       Go back
      //     </Link>
      //   </div>
      // ),
    },
    {
      path: "/weather",
      element: (
        <div>
          <Navbar />
          <Weather/>
        </div>
      ),
    },
    {
      path: "/privacy",
      element: (
        <div>
          <Navbar />
          <Privacy/>
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;