import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavouriteButton from "../FavouriteButton/FavouriteButton"
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin: 50px auto;
  width: 80px;
`

export default function Spotlight({ pieces, onToggleFavourite }) {
  const randomArtwork = Math.floor(Math.random() * pieces.length);
  const object = pieces[randomArtwork];

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