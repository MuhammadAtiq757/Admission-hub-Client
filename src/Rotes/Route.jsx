
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllCollege from "../Pages/Colleges/AllCollege";
import CollegeDetails from "../Pages/CollegeDetails";
import Admission from "../Pages/Colleges/Admission";
import AdInfo from "../Pages/Colleges/AdInfo";
import MyCollege from "../Pages/Colleges/MyCollege";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                 {
                    path: '/login',
                    element: <Login></Login>
                 },
                 {
                    path: '/signup',
                    element: <SignUp></SignUp>
                 },
                 {
                    path: '/allcollge',
                    element: <AllCollege></AllCollege>
                 },
                 {
                    path: '/admission',
                    element: <Admission></Admission>,
                    
                 },
                 {
                    path: '/myCollege',
                    element: <MyCollege></MyCollege>
                    
                 },

                 {
                    path: '/collegeDetails/:id',
                    element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
                    loader: ({ params }) => fetch(` https://admisson-hub-server.vercel.app/collegeData/${params.id}`)
                 },
              
                 {
                    path: '/information/:id',
                    element: <AdInfo></AdInfo>,
                    loader: ({ params }) => fetch(` https://admisson-hub-server.vercel.app/collegeData/${params.id}`)
                 },
              
            ]
            
        }


    ]);
