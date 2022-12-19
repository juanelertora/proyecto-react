import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carrusel from './components/Carrusel';
import Card from './components/Card';
import Productos from './components/Productos';

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">

          <div>
        <Header/>
        

      </div>
      <div>
        <Routes>
          <Route path="/" element={<Carrusel />} />
          <Route path="productos" element={<Card />} />
        </Routes>
      </div>
      <div>
      </div>
      <div>

        <Productos/>
        <Footer/>

      </div>
    </div>
  );
}

export default App;