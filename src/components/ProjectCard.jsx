import BulletList from "./BulletList";

const ProjectCard = ({ title, subtitle, link, tech, bullets }) => {
  return (
    <div className="mb-[7.33px] last:mb-0">
      {/* Nudged down so the 10.5pt title sits on the PDF's baseline */}
      <div className="relative top-[0.61px] flex flex-col sm:flex-row sm:justify-between sm:items-baseline sm:gap-4">
        <h3 className="font-bold">
          <span className="text-[10.5pt]">{title}</span>
          {subtitle && <> — {subtitle}</>}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto whitespace-nowrap text-link dark:text-blue-400 hover:underline"
          >
            Live Site
          </a>
        )}
      </div>

      {tech && (
        <p className="mt-[1.48px] text-[9.5pt] italic text-tech dark:text-gray-300">
          {tech}
        </p>
      )}

      <BulletList className="mt-[1.89px]" items={bullets} />
    </div>
  );
};

export default ProjectCard;
