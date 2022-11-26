import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import MyBooking from "../../Pages/Dashboard/MyBooking";
import Welcome from "../../Pages/Dashboard/Welcome";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/categories/${params.id}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute>
      <DashboardLayout></DashboardLayout>
      // </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Welcome></Welcome>,
      },
      {
        path: "my-orders",
        element: <MyBooking></MyBooking>,
      },
    ],
  },
]);

export default router;
