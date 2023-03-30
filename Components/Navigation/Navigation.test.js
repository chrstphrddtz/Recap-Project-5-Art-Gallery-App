import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("displays a navigation link labeled 'Spotlight'", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByText("Spotlight");
  expect(spotlightLink).toBeInTheDocument();
});

test("displays a navigation link labeled 'Pieces'", () => {
  render(<Navigation />);
  const piecesLink = screen.getByText("Pieces");
  expect(piecesLink).toBeInTheDocument();
});
