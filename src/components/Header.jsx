const linkClass = "text-link dark:text-blue-400 hover:underline";

// The pipes only show once the line fits on one row, as in the PDF.
const Separator = () => <span className="hidden a4:inline"> | </span>;

const Header = () => (
  <header className="text-center">
    <h1 className="text-[16pt] font-bold uppercase">Vangala Pranitej</h1>
    <p className="mt-[1.51px] text-[11pt] font-bold">Software Engineer</p>

    <p className="mt-[1.05px] text-[9.5pt] flex flex-wrap justify-center items-center gap-x-3 gap-y-0.5 a4:block">
      <span>Warangal, Telangana, India</span>
      <Separator />
      <a href="tel:+918074122800" className={linkClass}>
        +91 80741 22800
      </a>
      <Separator />
      <a href="mailto:vangalapranitej@gmail.com" className={linkClass}>
        vangalapranitej@gmail.com
      </a>
      <Separator />
      <a
        href="https://www.linkedin.com/in/vangala-pranitej"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        linkedin.com/in/vangala-pranitej
      </a>
      <Separator />
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
