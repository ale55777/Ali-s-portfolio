import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ✅ EmailJS credentials
const SERVICE_ID  = "service_m89yrh7";
const TEMPLATE_ID = "template_52hh4rm";
const PUBLIC_KEY  = "b9cSeGZOsYUWneZJL";

// ✅ WhatsApp direct chat link
const WHATSAPP_LINK = "https://wa.me/923041659109?text=Hi%20Ali!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
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
      .send(SERVICE_ID, TEMPLATE_ID, {
        from_name:  form.name,
        from_email: form.email,
        from_phone: form.phone,
        message:    form.message,
      })
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="section contact">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind? Let's build something amazing together 🚀
      </p>

      <div className="contact-layout">

        {/* ─── LEFT: Contact Info Panel ─── */}
        <div className="contact-info-panel glass-card">
          <h3 className="info-panel-title">Contact Details</h3>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <span className="info-label">Email</span>
              <a href="mailto:malirazakhan55777@gmail.com" className="info-value">
                malirazakhan55777@gmail.com
              </a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📱</div>
            <div>
              <span className="info-label">Phone</span>
              <a href="tel:+923041659109" className="info-value">
                +92 304 165 9109
              </a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <span className="info-label">Address</span>
              <span className="info-value">26B, Street 687, G-13/3,<br />Islamabad, Pakistan</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">💻</div>
            <div>
              <span className="info-label">GitHub</span>
              <a href="https://github.com/ale55777" target="_blank" rel="noreferrer" className="info-value">
                github.com/ale55777
              </a>
            </div>
          </div>

          {/* ✅ WhatsApp Direct Chat Button */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
            id="whatsapp-chat-btn"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>

          <div className="availability-badge">
            <span className="badge-dot"></span>
            Available for Freelance &amp; Full-time
          </div>
        </div>

        {/* ─── RIGHT: Contact Form ─── */}
        <form onSubmit={handleSubmit} className="contact-form glass-card" noValidate>
          <h3 className="info-panel-title">Send a Message</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Ali Raza Khan"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-phone">Phone Number</label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="+92 300 0000000"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell me about your project or just say hi! 👋"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === "sending"}
            id="contact-submit-btn"
          >
            {status === "sending" ? (
              <><span className="btn-spinner"></span> Sending...</>
            ) : (
              <>✉️ Send Message</>
            )}
          </button>

          {status === "success" && (
            <div className="form-status success">
              ✅ Message sent! I'll get back to you very soon.
            </div>
          )}
          {status === "error" && (
            <div className="form-status error">
              ❌ Failed to send. Please try WhatsApp or email me directly.
            </div>
          )}
        </form>

      </div>
    </section>
  );
}
