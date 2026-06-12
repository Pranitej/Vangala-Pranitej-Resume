const EducationEntry = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
      <p>
        <span className="font-semibold">
          B.Tech, Computer Science Engineering (AI &amp; ML)
        </span>{" "}
        — Vaagdevi College of Engineering, Warangal | GPA: 7.5/10
      </p>
      <p className="text-gray-600 dark:text-gray-300 sm:text-right sm:mt-0 mt-1 whitespace-nowrap">
        2021 – 2025
      </p>
    </div>
  );
};

export default EducationEntry;
