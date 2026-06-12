import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => (
  <header className="text-center mb-6">
    <h1 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase">
      Vangala Pranitej
    </h1>
    <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-300">
      Full Stack Developer (MERN)
    </p>

    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-700 dark:text-gray-300">
      <span className="inline-flex items-center gap-1">
        <FaMapMarkerAlt size={13} /> Warangal, Telangana, India
      </span>
      <span className="inline-flex items-center gap-1">
        <FaPhoneAlt size={13} /> +91 80741 22800
      </span>
      <a
        href="mailto:vangalapranitej@gmail.com"
        className="inline-flex items-center gap-1 hover:underline"
      >
        <FaEnvelope size={13} /> vangalapranitej@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/vangala-pranitej"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
      >
        <FaLinkedin size={13} /> linkedin.com/in/vangala-pranitej
      </a>
      <a
        href="https://github.com/Pranitej"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
      >
        <FaGithub size={13} /> github.com/Pranitej
      </a>
    </div>
  </header>
);

export default Header;
