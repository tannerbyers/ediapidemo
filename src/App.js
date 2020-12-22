import React from "react";
import SearchPage from "./components/SearchPage.js";
import './App.css';

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F7F7FF",
        display: "flex",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <SearchPage />
    </div>
  );
}

export default App;
