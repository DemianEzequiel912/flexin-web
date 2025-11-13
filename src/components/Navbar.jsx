import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; 

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="navbar navbar-expand-lg fixed-top"
            style={{
                transition: "0.5s",
                backgroundColor: scrolled
                    ? "rgba(188, 228, 222, 0.95)"
                    : "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                boxShadow: scrolled ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
            }}
        >

            <div className="w-100 d-flex justify-content-between align-items-center px-4" style={{ maxWidth: "1300px", margin: "0 auto" }}>


                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Flexin logo"
                        style={{
                            height: scrolled ? "50px" : "60px",
                            borderRadius: "10px",
                            marginRight: "10px",
                            transition: "0.3s",
                        }}
                    />
                </Link>


                <ul className="navbar-nav d-flex flex-row gap-4 ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link fw-semibold text-dark">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tienda" className="nav-link fw-semibold text-dark">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/nosotros" className="nav-link fw-semibold text-dark">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto" className="nav-link fw-semibold text-dark">Contacto</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}
