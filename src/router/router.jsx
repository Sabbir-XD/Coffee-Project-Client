import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AllUsers from "../pages/AllUsers";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
     errorElement: <div>error</div>,
     children : [
        {
            index: true,
            loader: () => fetch("http://localhost:3000/coffees"),
            element: <Home />,
        },
        {
            path: "add-coffee",
            element: <AddCoffee />,
        },
        {
            path: "updateCoffee/:id",
            loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
            element: <UpdateCoffee />,
        },
        {
            path: "coffees/:id",
            loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
            element: <CoffeeDetails/>
        },
        {
            path: "/signin",
            element: <SignIn />,
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/all-users",
            loader: () => fetch("http://localhost:3000/users"),
            element: <AllUsers />
        }
     ]
    },
  ]);


