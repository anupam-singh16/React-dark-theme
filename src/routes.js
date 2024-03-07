//App.js

import React from "react";
import SmallComponent from "./pages/SmallComponent";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Toaster from "./components/Toaster";
import DetailsPage from "./pages/DetailsPage";
import NotFound from "./pages/NotFoundPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<SmallComponent />} />
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<SmallComponent />} />
      <Route path="/DetailsPage/:id" element={<DetailsPage />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;
