import { useContext } from "react";
import "./App.css";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";

// Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
  const context = useContext(ThemeContext);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toogle theme</button>
      <Content />
    </div>
  );
}

export default App;
