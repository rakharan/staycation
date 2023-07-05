import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "../elements/button/Button";

describe("Button test", () => {
  test("Should not be able to click if isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
  });

  test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>);

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  test("Should render anchor tag", () => {
    const { container } = render(<Button type="link" isExternal></Button>);
    expect(container.querySelector("a")).toBeInTheDocument();
  });

  test("Should render NavLink component", () => {
    const { container } = render(
      <Router>
        <Button href="" type="link"></Button>
      </Router>
    );
    expect(container.querySelector("a")).toBeInTheDocument();
  });
});
