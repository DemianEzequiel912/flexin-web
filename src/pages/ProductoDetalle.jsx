import { useParams, Link } from "react-router-dom";
import { productosAPI } from "../api/productos";

export default function ProductoDetalle() {
    const { id } = useParams();
    const producto = productosAPI.find((p) => p.id === Number(id));

    if (!producto) {
        return (
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
                <h2>Producto no encontrado</h2>
            </div>
        );
    }

    return (
        <div
            className="d-flex justify-content-center align-items-start"
            style={{
                width: "100vw",
                minHeight: "100vh",
                paddingTop: "120px",   
                paddingBottom: "40px",
            }}
        >
            <div
                className="shadow-lg p-4"
                style={{
                    borderRadius: "20px",
                    maxWidth: "450px",     
                    width: "90%",
                    background: "#fff",
                    textAlign: "center",
                }}
            >
                <img
                    src={producto.imagen}
                    alt={producto.titulo}
                    style={{
                        width: "100%",
                        maxWidth: "280px",   
                        borderRadius: "15px",
                        objectFit: "contain",
                        marginBottom: "20px",
                    }}
                />

                <h2 className="fw-bold fs-4">{producto.titulo}</h2>

                <p className="mt-3 fs-6">{producto.info}</p>

                <Link
                    to="/tienda"
                    className="btn btn-success rounded-pill px-4 mt-4"
                    style={{ fontSize: "0.9rem" }}
                >
                    Volver
                </Link>
            </div>
        </div>
    );
}
