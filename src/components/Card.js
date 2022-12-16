import d1 from '../img/cards/d1.jpg';
import d2 from '../img/cards/d2.jpg';
import d3 from '../img/cards/d3.jpg';
import d4 from '../img/cards/d4.jpg';
import d5 from '../img/cards/d5.jpg';
import d6 from '../img/cards/d6.jpg';
import axios from "axios";
import { useEffect } from 'react';


const Card = () => {
   useEffect (() => {
    axios.get("http://localhost:3001/productos")
    .then(function (response) {
      
      console.log(response.data);
    })
    .catch(function (error) {
     
      console.log(error);
    })
    .then(function () {
   
    });

   } )

// Hacer una petición para un usuario con ID especifico


    return (
        <><div className="card-group" style={{Whith:200, }}>
            <div className="card" style={{ width: 18, margin: 10, borderRadius: 10 }}>
                <img src={d1} className="card-img-top" alt="d1" />
                <div className="card-body">
                    <h5 className="card-title">Camiseta alternativa</h5>
                    <p className="card-text">Mundial Qatar 2022</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
            <div className="card" style={{ width: 18, margin: 10, borderRadius: 10  }}>
                <img src={d2} className="card-img-top" alt="d2" />
                <div className="card-body">
                    <h5 className="card-title">Camiseta titular</h5>
                    <p className="card-text">Mundial Qatar 2022</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
            <div className="card" style={{ width: 18, margin: 10, borderRadius: 10  }}>
                <img src={d3} className="card-img-top" alt="d3" />
                <div className="card-body">
                    <h5 className="card-title">Campera Anthem Game Day</h5>
                    <p className="card-text">Mundial Qatar 2022</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>

        </div><div className="card-group">
                <div className="card" style={{ width: 18, margin: 10, borderRadius: 10  }}>
                    <img src={d4} className="card-img-top" alt="d4" />
                    <div className="card-body">
                        <h5 className="card-title">Camiseta entrenamiento</h5>
                        <p className="card-text">Mundial Qatar 2022</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
                <div className="card" style={{ width: 18, margin: 10, borderRadius: 10  }}>
                    <img src={d5} className="card-img-top" alt="d5" />
                    <div className="card-body">
                        <h5 className="card-title">Camiseta Prepartido</h5>
                        <p className="card-text">Mundial Qatar 2022</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
                <div className="card" style={{ width: 18, margin: 10 , borderRadius: 10 }}>
                    <img src={d6} className="card-img-top" alt="d6" />
                    <div className="card-body">
                        <h5 className="card-title">Camiseta de entrenamiento</h5>
                        <p className="card-text">Mundial Qatar 2022</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div></>



    )
}
export default Card