const EducationEntry = () => {
  return (
    <div className="space-y-2">
      {/* Degree and Duration */}
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <p className="font-semibold">
          Bachelor of Technology, Vaagdevi College of Engineering
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-right sm:mt-0 mt-1">
          2021 – 2025
        </p>
      </div>

      {/* Branch and GPA */}
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <p>Computer Science Engineering (AI and ML)</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-right sm:mt-0 mt-1">
          GPA – 7.4/10
        </p>
      </div>
    </div>
  );
};

export default EducationEntry;

