import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, github, live, description, bullets }) => {
  return (
    <div className="mb-6">
      {/* Title & Links Row */}
      <div className="flex justify-between items-center flex-wrap gap-y-1">
        <h3 className="font-semibold text-lg">{title}</h3>

        {/* Badge-style links */}
        <div className="flex gap-2">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs inline-flex items-center gap-1 hover:bg-blue-200"
            >
              <FaExternalLinkAlt size={12} /> Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs inline-flex items-center gap-1 hover:bg-gray-200"
            >
              <FaGithub size={12} /> GitHub
            </a>
          )}
        </div>
      </div>

      {/* Optional description */}
      {description && (
        <p className="mt-1 text-sm text-gray-800 dark:text-gray-300">
          {description}
        </p>
      )}

      {/* Bullet Points */}
      <ul className="list-disc list-outside pl-5 mt-2 text-sm text-gray-800 dark:text-gray-300 space-y-1">
        {bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
