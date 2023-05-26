import React from "react";
import "./App.css";
import HomeLogin from "./src-login/Login";


document.title = "Hooks";
function App() {
  return (
    <div className="container">
      <h1 id="text-header">React Home</h1>
      <HomeLogin/>
    </div>
  );
}

export default App;
