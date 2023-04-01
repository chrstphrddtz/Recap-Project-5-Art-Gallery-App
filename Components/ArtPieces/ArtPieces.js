import { uid } from "uid";
import Link from "next/link";
import styled  from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavouriteButton from "../FavouriteButton/FavouriteButton";



const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 100px;
`
const StyledDisplay = styled.div` 
  border: 1px solid black;
  background-color: lavender;
  border-radius: 10px;
  width: auto;
  height: auto;
  margin: 20px;
`

const ListItem = styled.li`
  list-style: none;
  margin: 10 20px;
`

const ButtonContainer = styled.div`
  margin: 50px auto;
  width: 80px;
`

export default function ArtPieces({pieces, onToggleFavourite}) {
  return (
    <List>
      {pieces.map((piece) => (
        <ListItem key={uid()}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview 
              image={piece.imageSource} 
              width={piece.dimensions.width}
              height={piece.dimensions.height}
              alt={piece.name}
              title={piece.name} 
              artist={piece.artist} 
            />
          </Link>
          <ButtonContainer>
            <FavouriteButton isFavourite={piece.slug} onToggleFavourite={onToggleFavourite}/>
          </ButtonContainer>
      </ListItem>
      ))}
    </List>
  ) 
}