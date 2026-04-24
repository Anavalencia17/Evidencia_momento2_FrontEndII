import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    level: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    localStorage.setItem("form", JSON.stringify(form));
  };

  return (
    <section className="contact">
      <h2>Reserva un Taller</h2>
      <p>
        Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Ej. Ana Silva"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="tu@email.com"
          onChange={handleChange}
        />

        <select name="level" onChange={handleChange}>
          <option>Principiante (Nunca he tenido un Bonsái)</option>
          <option>Intermedio (Tengo algunos árboles) </option>
          <option>Avanzado(Busco perfeccionar técnica) </option>
        </select>

        <textarea
          name="message"
          placeholder="¿Qué te gustaría aprender?"
          onChange={handleChange}
        ></textarea>

        <button type="submit">Enviar Solicitud</button>
      </form>
    </section>
  );
}

export default ContactForm;