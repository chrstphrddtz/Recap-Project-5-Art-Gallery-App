import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

import FavouriteButton from "../FavouriteButton/FavouriteButton";

const Container = styled.div`
  margin: 20px;
  text-align: center;
  margin-top: 100px;
`;
const StyledImage = styled(Image)`
  width: 40%;
  height: 40%;
  border: 1px solid black;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  margin: 50px auto;
  width: 120px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 20px ;
`

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
`


export default function ArtPieceDetails({ image, title, alt, artist, year, genre, width, height, onToggleFavourite, isFavourite }) {
  return (
    <Container>
      <StyledImage 
        src={image} 
        width={width} 
        height={height} 
        alt={alt}
      />
      <h2>{title}</h2>
      <h3> {artist}</h3>
      <p>{genre} - {year}</p>
      <FavouriteButton isFavourite={isFavourite.slug} onToggleFavourite={onToggleFavourite}/>
      <ButtonContainer>
        <StyledLink href={"/art-pieces"}>Go Back</StyledLink>
      </ButtonContainer>
    </Container>
  );
}
