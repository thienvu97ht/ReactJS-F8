import { useState } from "react";
import "./App.css";
import Content from "./Content";

// Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Cónumer

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggleTheme}>Toogle theme</button>
      <Content theme={theme} />
    </div>
  );
}

export default App;
