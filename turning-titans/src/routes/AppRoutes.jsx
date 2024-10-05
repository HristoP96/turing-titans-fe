import React from "react";
import { Routes, Route } from "react-router-dom";

import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
  );
};

export default AppRoutes;