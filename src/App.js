//App.js

import React, { useState } from "react";
import SmallComponent from "./pages/SmallComponent";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SmallComponent />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}
export default App;
