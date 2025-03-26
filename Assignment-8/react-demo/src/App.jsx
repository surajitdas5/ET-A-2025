import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import First from "./pages/First";
import "./App.css"
import Second from "./pages/Second";
import Calculator from "./pages/Calculator";
import ApiCall from "./pages/Apicall";
import ApiCallTwo from "./pages/ApiCallTwo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Sms from "./pages/Sms";

function App(){

  // const router = createBrowserRouter([
  //   {path: "/", element: <First />},
  //   {path: "/second", element: <Second />},
  //   {path: "/calc", element: <Calculator />},
  //   {path: "/api", element: <ApiCall />},
  //   {path: "/api2", element: <ApiCallTwo />},
  // ])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
          {path: "/", element: <First />},
          {path: "/second", element: <Second />},
          {path: "/calc", element: <Calculator />},
          {path: "/api", element: <ApiCall />},
          {path: "/api2", element: <ApiCallTwo />},
          {path: "/sms", element: <Sms />},
      ]
    }
  ])

  return <RouterProvider router={router} />

// return (
//     <>
//       {/* {First()} */}
//         {/* <First></First> */}
//         {/* <First /> */}
//         {/* <Second /> */}
//         {/* <Second />
//         <Second />
//         <Second /> */}

//         {/* <Calculator /> */}
//         {/* <ApiCall /> */}
//         {/* <ApiCallTwo /> */}
//     </>
//   )

}

export default App;