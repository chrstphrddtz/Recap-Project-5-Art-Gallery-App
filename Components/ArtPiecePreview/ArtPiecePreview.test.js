import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

test("Each art piece's image is displayed", () => {
  render(<ArtPiecePreview />)
  const image = screen.getByRole("img")
  expect(image).toBeInTheDocument();
})

test("Each art piece's title is displayed", () => {
  render(<ArtPiecePreview />)
  const title = screen.getByRole("heading", {level: 2})
  expect(title).toBeInTheDocument();
})

test("Each art piece's artist is displayed", () => {
  render(<ArtPiecePreview />)
  const artist = screen.getByRole("heading", {level: 3})
  expect(artist).toBeInTheDocument();
})