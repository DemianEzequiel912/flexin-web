import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Tienda from "./pages/Tienda";
import Nosotros from "./pages/Nosotros";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";
import ProductoDetalle from "./pages/ProductoDetalle"; // ⬅️ IMPORTANTE
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
