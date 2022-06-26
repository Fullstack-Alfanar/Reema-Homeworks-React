
import './App.css';
import Shoes from './components/shoes/shoes';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <h1>Shoes's Store</h1>
        <div className='container'>
        <div>
          <Shoes name={"nike"} size={40} price={150} url={"https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/78db4c03-7352-4451-a957-fd181db46390/men-s-shoes-clothing-accessories.png"} />
        </div>
        <div>
          <Shoes name={"skechers"} size={38} price={250} url={"https://cdn.azrieli.com/Images/c6418449-7a38-422b-a934-021678c9a8d2/Normal/71e4ef95.jpg"} />
        </div>
        <div>
          <Shoes name={"adidas"} size={39} price={350} url={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg"} />
        </div>
        <div>
          <Shoes name={"nike"} size={40} price={150} url={"https://i8.amplience.net/i/jpl/jd_334937_a?qlt=92&w=750&h=531&v=1&fmt=auto"} />
        </div>
        <div>
          <Shoes name={"adidas"} size={40} price={150} url={"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e30d866f29564c79b7fbacbb016f920f_9366/supernova-shoes.jpg"} />
        </div>
        </div>


      </header>

    </div>

  );
}

export default App;
