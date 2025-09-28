
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer glass flex flex-col items-center justify-center py-6 gap-4 text-center">
      <p className="text-sm text-gray-300">
        © {new Date().getFullYear()} Ali Raza Khan
      </p>

      <div className="flex gap-6">
        <a
          href="www.linkedin.com/in/ali-farooq-khan-89666b236"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn linkedin"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/ale55777"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn github"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.instagram.com/__alyrk"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn instagram"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://www.facebook.com/malirazakhan12/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn facebook"
        >
          <FaFacebook size={28} />
        </a>
      </div>
    </footer>
  );
}
