const certifications = [
  {
    name: "Full Stack Development (MERN Stack)",
    issuer: "Apex Software Development & Training Centre",
  },
  { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy" },
  { name: "Summer of AI Internship", issuer: "Swecha" },
];

const Certifications = () => (
  <div className="space-y-1 text-sm">
    {certifications.map((cert, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row sm:justify-between"
      >
        <p className="font-medium text-gray-800 dark:text-gray-200">
          {cert.name}
        </p>
        <p className="text-gray-600 dark:text-gray-400 sm:text-right">
          {cert.issuer}
        </p>
      </div>
    ))}
  </div>
);

export default Certifications;
