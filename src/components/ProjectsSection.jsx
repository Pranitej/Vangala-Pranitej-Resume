import Section from "./Section";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Turbo Thrills",
      github: "https://github.com/Pranitej/Turbo-Thrills",
      live: "https://pranitej-turbo-thrills.vercel.app",
      description:
        "Developed a full-stack e-commerce platform using MERN Stack, enabling car buying/selling with user authentication, search, and secure payment integration.",
      bullets: [
        "Implemented user authentication, role-based access, and an Admin portal for managing customers, records, and car listings with advanced search/filtering.",
        "Integrated Redux in a MERN stack project, improving data flow efficiency and reducing retrieval time by 30%.",
        "Streamlined car buying/selling processes for users and admins, boosting performance and user experience.",
      ],
    },
    {
      title: "School Project",
      github: "https://github.com/Pranitej/School-Project",
      live: "https://school-admin-portal-apex.vercel.app",
      description:
        "Created a comprehensive real-time educational platform for U.S. schools featuring distinct Portals for Admin, Parents, and Teachers; facilitated seamless attendance tracking and syllabus management.",
      bullets: [
        "Built frontend with ReactJS and Material Bootstrap, by reducing load times by 2+ seconds.",
        "Optimized school operations, enhanced parent-teacher interaction, and added advanced search/filtering.",
        "Developed admin tools to manage users, records, and system configurations for seamless oversight.",
      ],
    },
    {
      title: "Hackathon Project",
      github: "https://github.com/Pranitej/Hackathon-Project",
      description:
        "Designed a hackathon platform with ReactJS, Bootstrap, and NodeJS, featuring Admin and Student Portals, coding tests, leaderboard tracking, and a custom compiler for C, Python, and Java.",
      bullets: [
        "Integrated admin and student portals for hackathon management, facilitating registration, coding tests, and real-time leaderboard tracking.",
        "Built a custom compiler using NodeJS supporting C, Python, and Java, achieving 20% faster test case execution.",
        "Added code-based tests with predefined case passes for practical coding and efficient hackathon management.",
      ],
    },
  ];

  return (
    <Section title="Projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Section>
  );
};

export default ProjectsSection;
