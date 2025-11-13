import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productosAPI } from "../api/productos";  

export default function Tienda() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosAPI);
    }, []);

    return (
        <div 
            style={{ 
                width: "100%",
                paddingTop: "100px" 
            }}
        >

            <h2 className="text-center fw-bold mb-5">Nuestras Bolsas</h2>

            <div 
                className="row g-4 justify-content-center"
                style={{ 
                    margin: "0 auto",
                    maxWidth: "1400px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                }}
            >
                {productos.map((p) => (
                    <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">

                        <div 
                            className="card h-100 shadow border-0 mx-auto"
                            style={{ 
                                maxWidth: "300px",
                                borderRadius: "15px",
                            }}
                        >
                            <img
                                src={p.imagen}
                                alt={p.titulo}
                                className="card-img-top"
                                style={{
                                    height: "250px",
                                    objectFit: "cover",
                                    borderTopLeftRadius: "15px",
                                    borderTopRightRadius: "15px"
                                }}
                            />

                            <div className="card-body text-center">
                                <h5 
                                    className="fw-semibold mb-3"
                                    style={{ minHeight: "50px" }}
                                >
                                    {p.titulo}
                                </h5>

                                <Link 
                                    to={`/producto/${p.id}`} 
                                    className="btn btn-outline-success rounded-pill px-4"
                                >
                                    Ver más
                                </Link>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
