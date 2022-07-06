import { useNavigate } from "react-router-dom";
import "../../Styles/addShoes.scss"

function AddShoes() {

    const navigate = useNavigate();

    const newShoes = () => {

        let nameSh = document.getElementById("nameShoes");
        let sizeSh = document.getElementById("sizeShoes");
        let priceSh = document.getElementById("priceShoes");
        let imgSh = document.getElementById("urlShoes");


        let validName = nameSh.value != " " && (/^[a-zA-Z]+$/).test(nameSh.value) && nameSh.value.length >= 3 && nameSh.value.length <= 10;
        let validSize = sizeSh.value != "" && (/^[0-9]+$/).test(sizeSh.value) && sizeSh.value > 0;
        let validPrice = priceSh.value != "" && (/^[0-9]+$/).test(priceSh.value) && priceSh.value > 0;
        let validImg = imgSh.value != " " && imgSh.value!=null;


        if (validName && validSize && validPrice && validImg) {

            let shoesObj={
                Name:nameSh.value,
                Size:sizeSh.value,
                Price:priceSh.value,
                Img:imgSh.value
            }  

            let shoesArr=[]; 

            if (localStorage.getItem("shoesData")) {
                shoesArr = JSON.parse(localStorage.getItem("shoesData"));
            };

            shoesArr.push(shoesObj);


            localStorage.setItem("shoesData", JSON.stringify(shoesArr));
            navigate("/shoes");


        } 

        else {
            if(!validName){
                console.log("please enter a valid name");
            } 
            else if(!validSize){
                console.log("please enter a valid size should be positive number");
            } 
            else if(!validPrice){
                console.log("please enter a valid price should be positive number");
            } 
            else if(!validImg){
                console.log("please enter a valid url");
            }
        }









    }


    return (
        <div>

            <h1 className="title">Add New Shoes</h1>
            <form>
                <div>
                    <label className="labl">Name </label>
                    <input className="inp1" id="nameShoes" type="text" />
                </div>
                <div>
                    <label className="labl">Size</label>
                    <input className="inp2" id="sizeShoes" type="number" />
                </div><div>
                    <label className="labl">Price</label>
                    <input className="inp3" id="priceShoes" type="number" />
                </div><div>
                    <label className="labl">Imge</label>
                    <input className="inp4" id="urlShoes" type="text" />
                </div>
            <button  onClick={newShoes}>  Add </button>

       
            </form>


        </div>
    )
}

export default AddShoes;