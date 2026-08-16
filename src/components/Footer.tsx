import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <p>// © {new Date().getFullYear()} ALI_RAZA_KHAN — ALL SYSTEMS OPERATIONAL</p>
      <div className="flex">
        <a href="https://www.linkedin.com/in/ali-raza-khan-89666b236" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/ale55777" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
          <FaGithub size={22} />
        </a>
        <a href="https://www.instagram.com/__alyrk" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
          <FaInstagram size={22} />
        </a>
        <a href="https://www.facebook.com/malirazakhan12/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Facebook">
          <FaFacebook size={22} />
        </a>
      </div>
    </footer>
  );
}
