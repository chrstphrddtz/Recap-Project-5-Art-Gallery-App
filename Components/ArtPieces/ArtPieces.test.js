import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

test("All art pieces are displayed as a list", () => {
  render(<ul />)
  const list = screen.getByRole("list")
  expect(list).toBeInTheDocument();
})