const linkClass =
  "text-blue-700 dark:text-blue-400 hover:underline";

const Header = () => (
  <header className="text-center mb-3">
    <h1 className="text-[26px] leading-tight font-bold uppercase">
      Vangala Pranitej
    </h1>
    <p className="text-[15px] font-bold">Full Stack Developer (MERN)</p>

    <p className="mt-1 text-[13.5px] flex flex-wrap justify-center items-center gap-x-1.5 gap-y-0.5">
      <span>Warangal, Telangana, India</span>
      <span>|</span>
      <a href="tel:+918074122800" className={linkClass}>
        +91 80741 22800
      </a>
      <span>|</span>
      <a href="mailto:vangalapranitej@gmail.com" className={linkClass}>
        vangalapranitej@gmail.com
      </a>
      <span>|</span>
      <a
        href="https://www.linkedin.com/in/vangala-pranitej"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        linkedin.com/in/vangala-pranitej
      </a>
      <span>|</span>
      <a
        href="https://github.com/Pranitej"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        github.com/Pranitej
      </a>
    </p>
  </header>
);

export default Header;
