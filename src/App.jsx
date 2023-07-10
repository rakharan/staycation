import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "@/parts/Footer";

const App = () => {
  return (
    <div className=" font-Poppins">
      <Outlet />
      {/* <Example /> */}
      <Footer />
    </div>
  );
};

export default App;
