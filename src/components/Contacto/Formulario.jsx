import React, { useState } from "react";
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post('/api/contact-form/', data);
      setStatus(response.data.message);
    } catch (error) {
      setStatus("Error al enviar el formulario.");
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="max-w-md mx-auto bg-white p-6 rounded shadow-md bg-beige">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray font-semibold mb-2">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray rounded"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray font-semibold mb-2">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray rounded"
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-light text-dark py-2 px-4 rounded hover:bg-gray"
        >
          Enviar
        </button>
      </form>
      {status && <div className="mt-4 text-center text-green">{status}</div>}
    </div>
  );
};

export default ContactForm;
