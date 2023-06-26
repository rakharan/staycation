import { Outlet } from "react-router-dom";
import Header from "./parts/Header";
import React from "react";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
