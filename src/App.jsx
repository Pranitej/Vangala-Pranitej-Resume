import { useState, useEffect } from "react";
import Resume from "./components/Resume";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("dark") === "true"
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("dark", !prev);
      return !prev;
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}

export default App;
