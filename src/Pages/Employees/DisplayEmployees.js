 import { useEffect, useState } from 'react';  
 import "../../Styles/displayEmployee.scss"



function Displayemployee () {  
   const [employeeList, setEmployeeList] = useState([]);

   useEffect(() => {
       if (localStorage.getItem("employeesData")) {
         setEmployeeList(JSON.parse(localStorage.getItem("employeesData")));
       }
   }, []); 

  

   return (
   <div>
      <h1 className='title'>Our Employees</h1>
      <div className='container'>
      <table className='tableEmployee'>
         <thead>
            <tr >
               <td><label>First Name</label></td>
               <td><label>Last Name</label></td>
               <td><label>Title</label></td>
               <td><label>Country</label></td>
               <td><label>City</label></td>
               <td><label>Birthday</label></td>
               <td><label>Picture</label></td>
            </tr>
         </thead> 
         <tbody> 
            {
            employeeList.map((emp)=> 
            
                <tr>
                   <td><label>{emp.FName}</label></td>
                   <td><label>{emp.LName}</label></td>
                   <td><label>{emp.Title}</label></td>
                  <td><label>{emp.Country}</label></td>
                  <td><label>{emp.City}</label></td>
                  <td><label>{emp.Birth}</label></td>
                   <td><img className='imgEmp' src={emp.Url} alt="pic"/></td>
                </tr>

              )

         }
         </tbody>
      </table> 
      </div>
      </div> 
      )
   
}

export default Displayemployee;