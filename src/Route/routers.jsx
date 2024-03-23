import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Service/Services/Services";
import ServiceDetails from "../pages/Service/ServiceDetails/ServiceDetails";
import AddReview from "../pages/Service/AddReview/AddReview";
import Signin from "../pages/AccoutCreate/Signin/Signin";
import Signup from "../pages/AccoutCreate/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import MyReview from "../pages/Service/MyReview/MyReview";
import AddService from "../pages/Service/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import UpdateReview from "../pages/Service/UpdateReview/UpdateReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
        loader: () =>
          fetch(
            "https://wild-photographer-server-shakheras-projects.vercel.app/services?limit=-1"
          ),
      },
      {
        path: "serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://wild-photographer-server-shakheras-projects.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "addReview/:id",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://wild-photographer-server-shakheras-projects.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "updateReview/:id",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://wild-photographer-server-shakheras-projects.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
