import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom"

import Productos from "./pages/Productos";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
          <div>
        <Header/>
      </div>
      <div>
      <Routes>
        <Route path="productos" element={ <Productos/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;