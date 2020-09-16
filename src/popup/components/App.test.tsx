import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("coverage test", function () {
  test("renders learn react link", () => {
    const { getByText } = render(<App />);
    const text = getByText(/CONTENT OF THE POPUP!/i);
    expect(text).toBeInTheDocument();
  });
});
