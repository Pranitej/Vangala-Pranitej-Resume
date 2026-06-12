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
    <div className="min-h-screen transition bg-gray-200 dark:bg-gray-900">
      <div className="max-w-[850px] mx-auto px-4 py-6">
        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={toggleDarkMode}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="group p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-md cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95"
          >
            <span className="block transition-transform duration-500 ease-out group-hover:rotate-[360deg]">
              {darkMode ? (
                <FaSun className="text-amber-400" />
              ) : (
                <FaMoon className="text-indigo-500" />
              )}
            </span>
          </button>

          <a
            href="/Vangala-Pranitej-Resume.pdf"
            download
            title="Download Resume"
            className="group p-3 bg-white dark:bg-gray-800 text-red-500 rounded-full shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95"
          >
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <FaFilePdf />
            </span>
          </a>
        </div>

        {/* Paper sheet */}
        <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-100 shadow-xl px-6 py-8 sm:px-12 sm:py-10 text-[14px] leading-snug">
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
