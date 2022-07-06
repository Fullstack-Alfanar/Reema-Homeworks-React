import { useRoutes } from "react-router-dom";
import AddEmpolyee from "../Pages/Employees/AddEmployee";
import Displayemployee from "../Pages/Employees/DisplayEmployees";
import Home from "../Pages/Home/home";
import AddShoes from "../Pages/Shoes/AddShoes";
import DisplayShoes from "../Pages/Shoes/DisplayShoes";


function AppRout(){
    return useRoutes(
        [
            {
                path:"/" , element:<Home/>
            },
            {
                path:"employees" , element:<Displayemployee/>
            },
            {
                path:"addEmployee" , element:<AddEmpolyee/>
            },
            {
                path:"shoes" , element:<DisplayShoes/>
            },
            {
                path:"addShoes", element:<AddShoes/>
            }
        ]
    )
} 

export default AppRout;