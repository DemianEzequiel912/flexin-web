import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const lista = [
            { id: 1, titulo: "Bolsa ecológica Flexin Verde", imagen: "/bolsas/bolsa1.jpg", info: "Bolsa reforzada, material ecológico..." },
            { id: 2, titulo: "Bolsa ecológica Flexin Natural", imagen: "/bolsas/bolsa2.jpg", info: "Bolsa de tela natural, reutilizable..." },
            { id: 3, titulo: "Bolsa ecológica Flexin Celeste", imagen: "/bolsas/bolsa3.jpg", info: "Modelo liviano y resistente..." },
            { id: 4, titulo: "Bolsa ecológica Flexin Negra", imagen: "/bolsas/bolsa4.jpg", info: "Diseño elegante y resistente..." },
        ];
        setProductos(lista);
    }, []);

    return (
        <section className="container py-5">
            <h2 className="text-center fw-bold mb-5">Nuestras Bolsas</h2>

            <div className="row justify-content-center">
                {productos.map((producto) => (
                    <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">

                        <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "15px" }}>

                            <img
                                src={producto.imagen}
                                alt={producto.titulo}
                                className="card-img-top"
                                style={{ height: "250px", objectFit: "cover" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="fw-semibold" style={{ fontSize: "1rem" }}>
                                    {producto.titulo}
                                </h5>

                                <Link
                                    to={`/producto/${producto.id}`}
                                    className="btn btn-outline-success rounded-pill px-4"
                                >
                                    Ver más
                                </Link>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
