import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "@/parts/Footer";
import Header from "@/parts/Header";
import InputNumber from "@/elements/Form/InputNumber/InputNumber";
import Example from "@/pages/Example";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Example /> */}
      <Footer />
    </div>
  );
};

export default App;
