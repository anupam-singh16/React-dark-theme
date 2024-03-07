//App.js

import React, { useState } from "react";
import SmallComponent from "./pages/SmallComponent";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Skeleton from "./components/Skeleton";
import Toaster from "./components/Toaster";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Toaster />} />
      <Route path="/DetailsPage/:id" element={<DetailsPage />} />

      <Route path="/login" element={<SmallComponent />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
