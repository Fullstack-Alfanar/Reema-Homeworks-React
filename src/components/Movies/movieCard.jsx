import "../../Styles/movieCard.scss"

function CardMovie(props) { 
    return ( 
        <div className="card">
            <img className="img" src={props.url} alt="pic" />
            <div className="lbl">
            <label >{props.name}</label>
            </div>
        </div> 
    )
}

export default CardMovie;