import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Philosophy() {
  return (
    <>
      <Navbar />
      <section className="philosophy">
        {/* Este div mantiene el texto agrupado y alineado a la izquierda */}
        <div className="philosophy-content">
          <h1>Menos es más</h1>
          <p>
            Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales. 
            Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.
          </p>
          <p>
            En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y 
            cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la 
            intervención humana y la expresión salvaje de la naturaleza.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Philosophy;