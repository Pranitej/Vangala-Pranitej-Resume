const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 mb-2">
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
