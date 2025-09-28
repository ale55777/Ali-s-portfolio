// Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8sbi4er", // ✅ Your Service ID
        "template_52hh4rm", // ✅ Your Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "b9cSeGZOsYUWneZJL" // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" }); // clear form
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Try again later!");
        }
      );
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form glass-card">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="btn primary" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
