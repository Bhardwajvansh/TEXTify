import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* npm install react-router-dom */}
      {/* <Router> */}
        <Navbar/>
        {/* <Routes>   
          <Route */}
            {/* path/="/" */}
            <Textarea heading="Enter text to analyze" />
            {/* element={} */}
          {/* /> */}
          {/* <About /> */}
          {/* <Route path="/about" element={} /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
