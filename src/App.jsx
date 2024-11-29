import React from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Result from "./pages/Result";
/* import "./app.css"; */

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default App;
