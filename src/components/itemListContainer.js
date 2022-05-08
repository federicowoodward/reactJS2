import "./itemListContainer.css";
import Contador from './itemCount';

export default function Container() { 
    return(
      <div className="boxpapa">
        <Contador/>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://i.ibb.co/5M3WpZY/DSC07538.jpg" className="d-block w-100" alt="..." border="0"></img>
      </div>
      <div className="carousel-item">
        <img src="https://i.ibb.co/5M3WpZY/DSC07538.jpg" className="d-block w-100" alt="..." border="0"></img>
      </div>
      <div className="carousel-item">
        <img src="https://i.ibb.co/5M3WpZY/DSC07538.jpg" className="d-block w-100" alt="..." border="0"></img>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
      </div>
);
}