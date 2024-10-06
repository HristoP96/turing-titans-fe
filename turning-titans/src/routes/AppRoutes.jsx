import React from "react";
import { Routes, Route } from "react-router-dom";

import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";
import Success from "../pages/Success/Success";
import Loss from "../pages/Loss/Loss";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/success" element={<Success />} />
        <Route path="/loss" element={<Loss />} />
      </Routes>
  );
};

export default AppRoutes;