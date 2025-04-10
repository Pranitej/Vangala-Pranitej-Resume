const skills = [
  { title: "Programming Languages", values: "C, Python, Java" },
  { title: "Web Technologies", values: "HTML, CSS, JavaScript" },
  {
    title: "Frontend Development",
    values: "ReactJS, Vite, Bootstrap, Material-UI (MUI), Tailwind CSS",
  },
  {
    title: "Backend Development",
    values: "ExpressJS, NodeJS, NextJS, SpringBoot",
  },
  { title: "Databases", values: "MySQL, MongoDB, Oracle" },
  { title: "Tools and Platforms", values: "Git, GitHub, AWS, Figma" },
  { title: "Other Skills", values: "Machine Learning, REST APIs" },
];

const SkillsList = () => (
  <div className="space-y-2 text-sm">
    {skills.map((skill, index) => (
      <div key={index} className="flex flex-col sm:flex-row">
        <span className="font-medium sm:w-56">{skill.title}</span>
        <span className="text-gray-700 dark:text-gray-300">{skill.values}</span>
      </div>
    ))}
  </div>
);

export default SkillsList;
