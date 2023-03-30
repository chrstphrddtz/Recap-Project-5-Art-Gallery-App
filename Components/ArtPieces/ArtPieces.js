import { uid } from "uid";
import styled  from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`
const ListItem = styled.li`
  list-style: none;
  align-items: left;
  width: 50%;
  margin: 10 auto;
`;

export default function ArtPieces({pieces}) {
  return (
    <List>
      {pieces.map((piece) => (
        <ListItem key={uid()}>
        <ArtPiecePreview 
          image={piece.imageSource} 
          width={piece.dimensions.width}
          height={piece.dimensions.height}
          title={piece.name} 
          artist={piece.artist} 
        />
      </ListItem>
      ))}
    </List>
  ) 
}