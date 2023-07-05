import React, { Component } from "react";
import InputDate from "@/elements/Form/InputDate/InputDate";

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "100vh" }}
      >
        <div className="relative">
          <InputDate
            max={30}
            onChange={this.handleChange}
            name="value"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}
