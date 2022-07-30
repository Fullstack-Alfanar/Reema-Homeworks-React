import Pic from "../../assets/imgs/promoImage.jpg"; 
import './card.scss'
function Card() {
    return (

        <div className="card">
            <img className="img" src={Pic} alt="pic" />
            <div className="lbl">
                <label >ולנסיה וקוסטה בלנקה</label>
            </div>
        </div>

    )
}

export default Card;