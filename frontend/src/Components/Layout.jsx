import React from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="vh-100">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
