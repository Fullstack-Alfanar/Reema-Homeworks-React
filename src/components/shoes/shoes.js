import '../shoes/shoes.css'
function Shoes(prop) {
    return (
        <>
    
            <div className='card'>
                <div>
                    <label>name : {prop.name}</label>
                </div>
                <div>
                    <label>size : {prop.size}</label>
                </div>
                <div>
                    <label>price : {prop.price}</label>
                </div>
                <div>
                    <img className="pic" src={prop.url} alt="" />
                </div>
            </div> 
        </>
    )
}

export default Shoes;