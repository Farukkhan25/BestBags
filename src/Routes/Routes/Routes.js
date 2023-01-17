import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/AdminMenu/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminMenu/AllSellers";
import ReportedItems from "../../Pages/Dashboard/AdminMenu/ReportedItems";
import MyBooking from "../../Pages/Dashboard/MyBooking";
import Payment from "../../Pages/Dashboard/Payment";
import AddProduct from "../../Pages/Dashboard/SellerMenuItems/AddProduct";
import MyBuyers from "../../Pages/Dashboard/SellerMenuItems/MyBuyers";
import MyProducts from "../../Pages/Dashboard/SellerMenuItems/MyProducts";
import Welcome from "../../Pages/Dashboard/Welcome";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

import Home from "../../Pages/Home/Home";
import TopSales from "../../Pages/Home/TopSales";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`https://bestbags-server.vercel.app/categories/${params.id}`),
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Welcome></Welcome>,
      },
      {
        path: "my-orders",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "my-buyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "all-sellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "all-buyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "reported-items",
        element: <ReportedItems></ReportedItems>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://bestbags-server.vercel.app/bookings/${params.id}`),
      },
      {
        path: "products",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch("https://bestbags-server.vercel.app/products"),
      },
    ],
  },
]);

export default router;
