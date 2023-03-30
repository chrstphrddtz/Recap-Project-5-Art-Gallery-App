import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({ pieces }) {
  const randomArtwork = Math.floor(Math.random() * pieces.length);
  const object = pieces[randomArtwork];

  return (
    <ArtPiecePreview
      image={object.imageSource}
      width={object.dimensions.width}
      height={object.dimensions.height}
      artist={object.artist}
      alt={object.name}
    />
  );
}
