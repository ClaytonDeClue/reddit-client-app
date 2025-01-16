import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  test("renders the Header component", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Reddit Lite/i })).toBeInTheDocument();
  });

  test("renders the PostList component with posts", () => {
    render(<App />);
    expect(
      screen.getByText("Getting paid on the Wall of Death in Rajkot, India")
    ).toBeInTheDocument();
    expect(
      screen.getByText("A stunning sunset over the Grand Canyon")
    ).toBeInTheDocument();
  });
});
