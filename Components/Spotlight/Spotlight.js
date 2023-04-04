import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavouriteButton from "../FavouriteButton/FavouriteButton"
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin: 50px auto;
  width: 80px;
`

export default function Spotlight({ artPieces, onToggleFavourite }) {
  console.log("data from Spotlight", artPieces);
  const randomArtwork = Math.floor(Math.random() * artPieces.length);
  const object = artPieces[randomArtwork];

  return (
    <>
      <ArtPiecePreview
        image={object.imageSource}
        width={object.dimensions.width}
        height={object.dimensions.height}
        alt={object.name}
        artist={object.artist}
      />
      <ButtonContainer>
        <FavouriteButton isFavourite={object.slug} onToggleFavourite={onToggleFavourite} />
      </ButtonContainer>
    </>
  );
}