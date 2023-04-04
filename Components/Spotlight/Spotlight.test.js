import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

test("Art piece's image is displayed", () => {
  render(<ArtPiecePreview />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("Each art piece's artist is displayed", () => {
  render(<ArtPiecePreview />);
  const artist = screen.getByRole("heading", { level: 3 });
  expect(artist).toBeInTheDocument();
});
