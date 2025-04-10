import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => (
  <header className="text-center mb-6">
    <h1 className="text-4xl font-bold">Vangala Pranitej</h1>

    <div className="flex justify-center gap-6 mt-3">
      <a
        href="https://www.linkedin.com/in/vangala-pranitej"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:underline"
      >
        <FaLinkedin size={20} />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/Pranitej"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:underline"
      >
        <FaGithub size={20} />
        <span>GitHub</span>
      </a>
    </div>

    <p className="mt-2">+91 80741 22800 • vangalapranitej@gmail.com</p>
    <p>Warangal, Telangana, India</p>
  </header>
);

export default Header;
