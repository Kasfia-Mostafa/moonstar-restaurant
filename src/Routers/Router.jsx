import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login"
import Register from "../Components/Registration/Registration";
import Blog from "../Pages/Blog/Blog";
import FoodItems from "../Pages/FoodItems/FoodItems";
import EachItem from "../Pages/EachItem/EachItem";
import Order from "../Pages/Order/Order";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AddedFoods from "../Pages/AddedFood/AddedFoods";
import OrderItems from "../Pages/OrderItems/OrderItems";
import USerOrders from "../Pages/UserOrder/USerOrders";
import AddFoodItems from "../Pages/AddFoodItems/AddFoodItems";
import Loader from "../Utility/Loader";
import Error from "../Utility/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'foodItems',
        element: <FoodItems></FoodItems>,
        loader:  () => fetch(`https://moonstar-restaurant-server.vercel.app/foodCount`),
      },
      {
        path: 'foodItems/:id',
        element: <EachItem></EachItem>,
        loader:  ({params}) => fetch(`https://moonstar-restaurant-server.vercel.app/foods/${params.id}`),
      },
      {
        path: 'order/:id',
        element:<PrivateRoute><Order></Order></PrivateRoute>,
        loader:  ({params}) => fetch(`https://moonstar-restaurant-server.vercel.app/foods/${params.id}`),
      },
      {
        path: 'addedFoods',
        element:<PrivateRoute><AddedFoods></AddedFoods></PrivateRoute>,
      },
      {
        path: 'addedFoods/:id',
        element:<PrivateRoute><AddedFoods></AddedFoods></PrivateRoute>,
        loader:  ({params}) => fetch(`https://moonstar-restaurant-server.vercel.app/newFood/${params.id}`),
      },
      {
        path: 'orderItems/:id',
        element:<PrivateRoute><OrderItems></OrderItems></PrivateRoute>,
        loader:  ({params}) => fetch(`https://moonstar-restaurant-server.vercel.app/foods/${params.id}`),
      },
      {
        path: 'userOrder',
        element:<PrivateRoute><USerOrders></USerOrders></PrivateRoute>,
      },
      {
        path: 'addFoodItems',
        element: <PrivateRoute><AddFoodItems></AddFoodItems></PrivateRoute>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'loader',
        element: <Loader></Loader>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '*',
        element: <Error></Error>
      },
    ]
  },
]);

export default router;