import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ✅ EmailJS credentials
const SERVICE_ID  = "service_m89yrh7";
const TEMPLATE_ID = "template_52hh4rm";
const PUBLIC_KEY  = "b9cSeGZOsYUWneZJL";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // ✅ Initialize EmailJS once when component mounts (required for v4+)
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        }
        // ✅ No 4th argument needed — public key is set via init() above
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        // Reset status back to idle after 4 seconds
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
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

        <button
          className="btn primary"
          type="submit"
          disabled={status === "sending"}
          style={{ opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <p style={{ color: "#4ade80", marginTop: "10px", fontWeight: 600 }}>
            ✅ Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "#f87171", marginTop: "10px", fontWeight: 600 }}>
            ❌ Failed to send. Please check your EmailJS dashboard or try again.
          </p>
        )}
      </form>
    </section>
  );
}
