import React, { Component } from "react";
import InputDate from "@/elements/Form/InputDate/InputDate";
import Breadcrumb from "@/elements/Breadcrumb/Breadcrumb";

export default class Example extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      {
        pageTitle: "House Details",
        pageHref: "",
      },
    ];
    console.log(this.state);
    return (
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "100vh" }}
      >
        <div className="relative">
          <Breadcrumb data={breadcrumb} />
        </div>
      </div>
    );
  }
}
