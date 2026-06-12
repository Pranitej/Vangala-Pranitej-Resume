import { FaMoon, FaSun, FaFilePdf } from "react-icons/fa";

import Header from "./Header";
import Section from "./Section";
import ProfessionalSummary from "./ProfessionalSummary";
import Experience from "./Experience";
import EducationEntry from "./EducationEntry";
import SkillsList from "./SkillsList";
import ProjectsSection from "./ProjectsSection";
import Certifications from "./Certifications";

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
            title="Download Resume"
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
          >
            <FaFilePdf />
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8">
          <Header />

          <Section title="Professional Summary">
            <ProfessionalSummary />
          </Section>

          <Section title="Experience">
            <Experience />
          </Section>

          <Section title="Education">
            <EducationEntry />
          </Section>

          <Section title="Technical Skills">
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
