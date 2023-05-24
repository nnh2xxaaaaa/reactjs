import React from "react";
import "./App.css";
import HomeLogin from "./src-login/Login";

document.title = "Hooks";
function App() {
  return (
    <div style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <h1>Hello</h1>
      <HomeLogin/>
    </div>
  );
}

export default App;
