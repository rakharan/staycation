import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "@/parts/Footer";
import Header from "@/parts/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
