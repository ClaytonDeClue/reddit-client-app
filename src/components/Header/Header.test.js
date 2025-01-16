import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
  test("renders logo and title correctly", () => {
    render(<Header />);

    const logo = screen.getByAltText("Reddit App Logo");
    const title = screen.getByRole("heading", { name: /Reddit Lite/i });

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test("is responsive", () => {
    render(<Header />);

    // Simulate smaller screen size
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    const title = screen.getByRole("heading", { name: /Reddit Lite/i });
    expect(title).toBeVisible(); // Visibility and styles should be visually tested
  });
});
