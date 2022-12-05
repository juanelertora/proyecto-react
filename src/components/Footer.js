import Facebook from "../img/facebook.png"
import Instagram from "../img/instagram.png"
import Whatsapp from "../img/whatsapp.png"

function Footer() {
  return (
    <footer className="container-fluid bg-black text-light p-1">
        <div className="row">
            <div className="col-sm-12 col-md-9 col-xl-10 pt-1 pb-">
                <p>Tu Camiseta es un negocio dedicado exclusivamente a la venta de camisetas de selecciones.</p>
                <p>Copyright Tu Camiseta - Todos los derechos reservados</p>
            </div>
            <div className="col-sm-6 col-md-3 col-xl-2 pt-1 pb-1">
                <p>info@tucamiseta.com</p>
                <div className="col-sm-6 col-md-3 col-xl-2 d-flex justify-content-start">
                    <div claseName="">
                        <img src={Facebook} alt="" width="auto" height="25px"/>
                    </div>
                    <div>
                        <img src={Instagram} alt="" width="auto" height="25px"/>
                    </div>
                    <div>
                        <img src={Whatsapp} alt="" width="auto" height="25px"/>
                    </div>
                </div>
            </div>
        </div>    
    </footer>
);
}

export default Footer;




