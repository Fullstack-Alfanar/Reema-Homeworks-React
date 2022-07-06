
import { useNavigate } from "react-router-dom";
import "../../Styles/addEmployee.scss"

function AddEmpolyee() {

    const navigate = useNavigate();
    // const[valFname,setValfname]=useState(false);
    // const[valLname,setValLname]=useState(false);
    // const[valTitle,setValTitle]=useState(false);
    // const[valCountry,setValCountry]=useState(false);
    // const[valCity,setValCity]=useState(false);
    // const[valBirth,setValBirth]=useState(false);
    // const[valUrl,setValUrl]=useState(false);


    const newEmployee = () => {
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        let title = document.getElementById("title");
        let country = document.getElementById("country");
        let city = document.getElementById("city");
        let birth = document.getElementById("birth");
        let urlPic = document.getElementById("urlP");

        //  (fname.value!="" && (/^[a-zA-Z]+$/).test(fname.value)&& fname.value.length>=2 && fname.value.length <=30) ? setValfname(true) : setValfname(false);
        //  (lname.value!="" && (/^[a-zA-Z]+$/).test(lname.value)&& lname.value.length>=2 && lname.value.length <=30) ? setValLname(true) : setValLname(false);

        let validFname = fname.value != "" && (/[a-z]/i).test(fname.value) && fname.value.length >= 2 && fname.value.length <= 30;
        let validLname = lname.value != "" && (/^[a-zA-Z]+$/).test(lname.value) && lname.value.length >= 2 && lname.value.length <= 30;
        let validTitle = title.value != "" && (/^[a-zA-Z]+$/).test(title.value) && title.value.length >= 5 && title.value.length <= 20;
        let validCountry = country.value != "" && (/^[a-zA-Z]+$/).test(country.value) && country.value.length >= 3 && country.value.length <= 30;
        let validCity = city.value != "" && (/^[a-zA-Z]+$/).test(city.value) && city.value.length >= 2 && city.value.length <= 30;
        let validBirth = birth.value != "";
        let validUrl = urlPic.value != "" && urlPic.value!=null;
        // console.log(validFname+" "+validLname+" "+validTitle+" "+validCountry+" "+validCity+" "+validBirth+""+validUrl);
        if (validFname && validLname && validTitle && validCountry && validCity && validBirth && validUrl) {

            let employeeObj = {
                FName: fname.value,
                LName: lname.value,
                Title: title.value,
                Country: country.value,
                City: city.value,
                Birth: birth.value,
                Url: urlPic.value
            };

            let employeeArr = [];


            if (localStorage.getItem("employeesData")) {
                employeeArr = JSON.parse(localStorage.getItem("employeesData"));
            };

            employeeArr.push(employeeObj);


            localStorage.setItem("employeesData", JSON.stringify(employeeArr));
            navigate("/employees");

        }

        else {
            if (!validFname) {
                console.log("please enter a valid firstname length between 2-30");
            }
            else if (!validLname) {
                console.log("please enter a valid lastname length between 2-30");

            }
            else if (!validTitle) {
                console.log("please enter a valid title  length between 5-20");

            }
            else if (!validCountry) {
                console.log("please enter a valid Country  length between 3-30");

            }
            else if (!validCity) {
                console.log("please enter a valid city length between 5-20");

            }
            else if (!validBirth) {
                console.log("please enter a valid Date");
            }
            else   {
                console.log("please enter a valid url");
            }


        }

    }


    return (
        <div className="parent">
            <h2 className="title">New Employee</h2>
            <form>

                <div>
                    <label>First Name </label>
                    <input className="fname" id="fname" type="text" />
                </div>
                <div>
                    <label>Last Name </label>
                    <input className="lname" id="lname" type="text" />
                </div>
                <div>
                    <label>Title </label>
                    <input className="move1" id="title" type="text" />
                </div>
                <div>
                    <label>Country </label>
                    <input className="move2" id="country" type="text" />
                </div>
                <div>
                    <label>City </label>
                    <input className="move3" id="city" type="text" />
                </div>
                <div>
                    <label className="btd">BirthDate </label>
                    <input className="move4" id="birth" type="date" />
                </div>
                <div>
                    <label>Url Picture </label>
                    <input className="move5" id="urlP" type="text" />
                </div>

                <button  onClick={newEmployee}>Add</button>

            </form>
        </div>
    )

}
export default AddEmpolyee;