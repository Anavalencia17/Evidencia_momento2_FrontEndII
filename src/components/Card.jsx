function Cards() {
  const bonsais = [
    "Arce Japonés",
    "Pino Negro",
    "Ficus Retusa",
    "Olmo Chino",
    "Enebro",
    "Azalea",
  ];

  return (
    <section className="cards">
      <h1>Nuestra Colección</h1>
        <p>Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.</p>
      <div className="cards__container">
        {bonsais.map((tree, index) => (
          <div key={index} className="card">
            <p>{tree}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;