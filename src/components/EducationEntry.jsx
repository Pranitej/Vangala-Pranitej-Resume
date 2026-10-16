const EducationEntry = () => (
  // Nudged down so the 10.5pt degree sits on the PDF's baseline
  <div className="relative top-[0.61px] flex flex-col sm:flex-row sm:justify-between sm:items-baseline sm:gap-4">
    <p>
      <span className="text-[10.5pt] font-bold">
        B.Tech, Computer Science Engineering (AI &amp; ML)
      </span>{" "}
      | Vaagdevi College of Engineering, Warangal | GPA: 7.5/10
    </p>
    <p className="font-bold whitespace-nowrap">2021 – 2025</p>
  </div>
);

export default EducationEntry;
