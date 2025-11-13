import React from "react";
import fondoDefault from "../assets/fondoPrincipal2.jpg"; 

export default function Seccion({ fondo, titulo, texto }) {
    const imagenFondo = fondo ? fondo : fondoDefault;

    return (
    <section
    className="text-center text-light d-flex flex-column justify-content-center align-items-center"
    style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imagenFondo})`,
        backgroundAttachment: "fixed", 
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "70vh",
        width: "100%",
        margin: 0,
        padding: "5rem 2rem",
        }}
    >
        <div
        style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "3rem",
            borderRadius: "12px",
            maxWidth: "800px",
            color: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
        >
        <h2 className="fw-bold mb-3">{titulo}</h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>{texto}</p>
        </div>
    </section>
    );
}
