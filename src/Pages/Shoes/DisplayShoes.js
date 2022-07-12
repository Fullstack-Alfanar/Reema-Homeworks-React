import { useEffect, useState } from 'react'; 
import "../../Styles/displayShoe.scss"

function DisplayShoes(){
  
    const [shoesList, setShoesList] = useState([]);

   useEffect(() => {
       if (localStorage.getItem("shoesData")) {
        setShoesList(JSON.parse(localStorage.getItem("shoesData")));
       }
   }, []); 


    return  (
        <div>
           <h1 className='title'>Shoes in Store</h1>
           <table className="tableSh">
              <thead>
                 <tr >
                    <td ><label> Name</label></td>
                    <td ><label>Size</label></td>
                    <td><label>Price</label></td>
                    <td><label>Picture</label></td>
                
                 </tr>
              </thead> 
              <tbody> 
                 {
                 shoesList.map((obj)=> 
                 
                     <tr>
                        <td><label>{obj.Name}</label></td>
                        <td><label>{obj.Size}</label></td>
                        <td><label>{obj.Price}</label></td>
                        <td><img className="imgSh" src={obj.Img} alt="pic"/></td>
                     </tr>
     
                   )
     
              }
              </tbody>
           </table> 
           </div> 
           )
}

export default DisplayShoes;