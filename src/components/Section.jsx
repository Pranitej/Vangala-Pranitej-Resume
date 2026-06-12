const Section = ({ title, children }) => (
  <section className="mb-3.5 last:mb-0">
    <h2 className="text-[15px] font-bold uppercase border-b border-gray-700 dark:border-gray-400 pb-px mb-1.5">
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
