// src/components/layouts/PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../sharedcomponents/Navbar";

const PublicLayout = () => {
  return (
    <div className="h-auto min-h-[10px] bg-green-950">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;