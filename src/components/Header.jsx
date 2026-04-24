import { Link } from "react-router-dom";

function Header() {
  return (
    <main className="hero-section">
      <div className="hero-container"> {/* Nuevo contenedor para centrado */}
        <div className="hero-content">
          <h1>El arte de la paciencia</h1>
          <p>
            Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
            Un espacio para reconectar con la naturaleza.
          </p>
          <Link className="btn" to="/reservas">
            Reserva un taller
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Header;