const skills = [
  { title: "Languages", values: "JavaScript (ES6+), Java, Python, SQL" },
  {
    title: "Frontend",
    values:
      "React.js, Next.js, Vite, Tailwind CSS, Redux, Zustand, shadcn/ui, Material-UI, HTML5, CSS3",
  },
  {
    title: "Backend",
    values:
      "Node.js, Express.js, RESTful API Design, Webhooks, Server-Side Rendering (SSR)",
  },
  {
    title: "Databases & Caching",
    values: "MongoDB, Mongoose, PostgreSQL, MySQL, Redis",
  },
  {
    title: "DevOps & Cloud",
    values:
      "Docker, GitHub Actions (CI/CD), Linux, AWS, Cloudflare R2 (S3-compatible), Traefik, Dokploy",
  },
  {
    title: "Security & Tools",
    values:
      "JWT, OAuth, RBAC, Helmet, Rate Limiting, Input Sanitization, Razorpay, Postman, Git, Figma",
  },
  {
    title: "Architecture",
    values:
      "Multi-Tenant SaaS, API Security, Caching Strategies, Payment Gateway Integration",
  },
];

const SkillsList = () => (
  <ul className="list-disc list-outside pl-5 space-y-1 text-sm">
    {skills.map((skill, index) => (
      <li key={index}>
        <span className="font-semibold">{skill.title}:</span>{" "}
        <span className="text-gray-700 dark:text-gray-300">
          {skill.values}
        </span>
      </li>
    ))}
  </ul>
);

export default SkillsList;
