import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <h2>ZENITH BONSAI</h2>
        </Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/filosofia">Filosofía</Link>
        </li>
        <li>
          <Link to="/galeria">Galería</Link>
        </li>
        <li>
          <Link to="/reservas">Reservas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;