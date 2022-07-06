import { Link, BrowserRouter } from "react-router-dom";
import AppRout from '../Router/AppRoutery' 
import "../Styles/navBar.scss"

function NavBar() {
    return (
        <BrowserRouter>
            <AppRout />
            <ul className="lista" >
                <li><Link to="/"> <label className="item">Home</label></Link></li>
                <li><Link to="addEmployee"><label className="item">New Employee</label></Link></li>
                <li> <Link to="employees"><label className="item">Our Employees</label></Link>  </li>
                <li><Link to="shoes"><label className="item">Shoes in our Store</label></Link> </li>
                <li><Link to="addShoes"> <label className="item">Add new shoes</label></Link> </li>
            </ul>
        </BrowserRouter>

    )
}
export default NavBar;