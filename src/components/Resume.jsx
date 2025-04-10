import { FaMoon, FaSun, FaDownload } from "react-icons/fa";

import Header from "./Header";
import Section from "./Section";
import SkillsList from "./SkillsList";
import Certifications from "./Certifications";
import EducationEntry from "./EducationEntry";
import ProjectsSection from "./ProjectsSection";

const Resume = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen transition bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 relative">
        <div className="flex justify-end gap-4 mb-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href="/Vangala-Pranitej-Resume.pdf"
            download
            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
          >
            <FaDownload />
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <Header />

          <Section title="Education">
            <EducationEntry />
          </Section>

          <Section title="Skills">
            <SkillsList />
          </Section>

          <ProjectsSection />

          <Section title="Certifications">
            <Certifications />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
