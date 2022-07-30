import CardMovie from '../Movies/movieCard'
import { useState, useEffect } from 'react'
import Loading from '../../assets/imgs/loader.gif'
import '../../Styles/HomePage.scss'

const ListMovies = () => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [selectData, setSelectData] = useState(data);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const getData = () => {
            fetch("https://api.tvmaze.com/shows").then((res) => res.json()).then((res) => (setData(res), setLoad(false))).catch((err) => console.log(err));
        };
        getData();
    }, []);



    useEffect(() => {
        const getSelectData = () => {
            if (search !== null || search !== "") {
                setSelectData(data.filter(e => { return e.name.toLocaleLowerCase().includes(search) }));
            }
            else {
                setSelectData(data)
            }
        };
        getSelectData();
    }, [search, data]);

    return (
        <div className='parent'>
            <div className='div1'>
                <div> <label>Movies's List</label> </div>
                <div >
                {selectData.length}/{data.length}
            </div>
              
            </div> 

            <div className='inptDiv'> <input className='inpt' type="text" placeholder='search' onChange={e => setSearch(e.target.value.toLocaleLowerCase())} /> </div>
        
            <div>
                {load ? (
                    <div> <img className='imgLoad' src={Loading} alt="" /> </div>

                ) : (

                    <div className='div3'>
                        {

                            selectData.map(e => { return <CardMovie key={e.id} id={e.id} name={e.name} url={e.image.medium} /> })

                        }
                    </div>


                )}

            </div>

        </div>
    );
}
export default ListMovies;

