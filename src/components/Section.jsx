const Section = ({ title, children }) => (
  <section className="mb-6 last:mb-0">
    <h2 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 dark:border-gray-600 pb-1 mb-3">
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
