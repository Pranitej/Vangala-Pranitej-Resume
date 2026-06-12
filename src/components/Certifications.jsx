const certifications = [
  {
    name: "Full Stack Development (MERN Stack)",
    issuer: "Apex Software Development & Training Centre",
  },
  { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy" },
  { name: "Summer of AI Internship", issuer: "Swecha" },
];

const Certifications = () => (
  <div className="space-y-0.5">
    {certifications.map((cert, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row sm:justify-between sm:gap-4"
      >
        <p className="font-bold">{cert.name}</p>
        <p className="sm:text-right">{cert.issuer}</p>
      </div>
    ))}
  </div>
);

export default Certifications;
