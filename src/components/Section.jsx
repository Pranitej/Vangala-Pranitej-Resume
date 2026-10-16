const Section = ({ title, children }) => (
  <section className="mt-[7.81px]">
    <h2 className="text-[11pt] font-bold uppercase border-b border-rule dark:border-gray-400 pb-[2.58px] mb-[3.2px]">
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
