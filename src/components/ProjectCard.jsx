const ProjectCard = ({ title, subtitle, tech, bullets }) => {
  return (
    <div className="mb-2.5 last:mb-0">
      <h3 className="font-bold">
        {title}
        {subtitle && <> — {subtitle}</>}
      </h3>

      {tech && <p className="italic leading-snug">{tech}</p>}

      <ul className="list-disc list-outside pl-5 mt-0.5 space-y-0.5 leading-snug">
        {bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
