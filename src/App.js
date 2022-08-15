import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* npm install react-router-dom */}
      <Router>
        <Navbar/>
        <Routes>   
          <Route
            path="/"
            element={<Textarea heading="Enter text to analyze" />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
