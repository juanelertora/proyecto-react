import axios from "axios";
import { useEffect } from 'react';
import { useState } from "react";

 const Card = () => {
    const [productos, setProductos] = useState ([])
    useEffect (() => {
        axios.get("http://localhost:3001/productos")
        .then((response =>  {
            setProductos(response.data)
          
          
        }))
        .catch(function (error) {
         
          console.log(error);
        })
        .then(function () {
       
        });
    
       } )
    return (
        <div className="conteiner-items-card"  >
            {productos.map(producto => (
                <div className="item" key={producto.id}>
                    <figure>
                        <img src={producto.img} alt={producto.nombre} />
                    </figure>
                    <div className="info-producto">
                        <h2>{producto.nombre}</h2>
                        <h6> {producto.modelo}  {producto.marca}   </h6>
                        <p className="precio">${producto.precio}</p>
                        <button>Añadir al carrito</button>

                    </div>

                </div>
            ))}

        </div>
    )
 }
 export default Card;