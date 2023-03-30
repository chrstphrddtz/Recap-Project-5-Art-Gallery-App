import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavouriteButton from "../FavouriteButton/FavouriteButton"

export default function Spotlight({ pieces, onToggleFavourite }) {
  console.log("onToggle: ", onToggleFavourite);
  const randomArtwork = Math.floor(Math.random() * pieces.length);
  const object = pieces[randomArtwork];

  return (
    <>
      <ArtPiecePreview
        image={object.imageSource}
        width={object.dimensions.width}
        height={object.dimensions.height}
        artist={object.artist}
        alt={object.name}
      />
      <FavouriteButton isFavourite={object} onToggleFavourite={onToggleFavourite} />
    </>
  );
}
