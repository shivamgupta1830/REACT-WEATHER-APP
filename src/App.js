import "./App.css";
import React from "react";
import TopButtons from "./TopButtons";
import Inputs from "./Inputs";

function App() {
  return (
    <div className="p-5  mx-auto w-auto bg-gradient-to-bl from-cyan-500 to-cyan-700">
      <TopButtons />
      <Inputs />
    </div>
  );
}

export default App;
