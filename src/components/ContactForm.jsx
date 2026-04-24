import { useState } from "react";

function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    level: "Principiante (Nunca he tenido un Bonsái)", // Valor por defecto del select
    message: "",
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Verificación del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return; // Detiene la ejecución si el correo es inválido
    }

    // 2. Guardado de datos
    console.log("Datos enviados:", form);
    localStorage.setItem("form", JSON.stringify(form));
    alert("¡Solicitud enviada correctamente!");

    // 3. Limpieza automática del formulario
    setForm(initialState);
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
          value={form.name} // IMPORTANTE: Vincula el valor al estado
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email" // Ayuda a la validación nativa del navegador
          placeholder="tu@email.com"
          value={form.email} // IMPORTANTE
          onChange={handleChange}
          required
        />

        <select 
          name="level" 
          value={form.level} // IMPORTANTE
          onChange={handleChange}
        >
          <option value="Principiante (Nunca he tenido un Bonsái)">Principiante (Nunca he tenido un Bonsái)</option>
          <option value="Intermedio (Tengo algunos árboles)">Intermedio (Tengo algunos árboles)</option>
          <option value="Avanzado (Busco perfeccionar técnica)">Avanzado (Busco perfeccionar técnica)</option>
        </select>

        <textarea
          name="message"
          placeholder="¿Qué te gustaría aprender?"
          value={form.message} // IMPORTANTE
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar Solicitud</button>
      </form>
    </section>
  );
}

export default ContactForm;