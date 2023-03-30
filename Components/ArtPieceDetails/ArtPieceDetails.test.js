import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

test("Art piece image is displayed", () => {
  render(<ArtPieceDetails />);

  const artPieceImage = screen.getByRole("img");
  expect(artPieceImage).toBeInTheDocument();
});

test("Art piece title is displayed", () => {
  render(<ArtPieceDetails />);
  const artPieceTitle = screen.getByRole("heading", { level: 2 });
  expect(artPieceTitle).toBeInTheDocument();
});

test("Art piece artist is displayed", () => {
  render(<ArtPieceDetails />);
  const artPieceTitle = screen.getByRole("heading", { level: 3 });
  expect(artPieceTitle).toBeInTheDocument();
});
test("Art piece genre is displayed", () => {
  render(<ArtPieceDetails />);
  const artPieceGenre = screen.getByText("-");
  expect(artPieceGenre).toBeInTheDocument();
});

test("Art piece year is displayed", () => {
  render(<ArtPieceDetails />);
  const artPieceYear = screen.getByText("-");
  expect(artPieceYear).toBeInTheDocument();
});

test("Back link is displayed", () => {
  render(<ArtPieceDetails />);
  const backLink = screen.getByText("Go Back");
  expect(backLink).toBeInTheDocument();
});
