import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

import FavouriteButton from "../FavouriteButton/FavouriteButton";

const StyledContainer = styled.div`
  margin: 80px 20px;
  text-align: left;
`

const StyledArtDisplay = styled.div`
  display: flex;
  gap: 20px;
  /* margin: 20px; */
  text-align: center;
  margin: 10px auto;
`;

const StyledImage = styled(Image)`
  width: 40%;
  height: 40%;
  border: 1px solid black;
  border-radius: 10px;
`;

const StyledBackButton = styled.button`
  width: 50px;
  font-size: 2rem;
  border: none;
  background-color: inherit;
  border-radius: 5px;
  &:hover {
    text-decoration: underline;
    /* box-shadow: 2px 2px 10px 1px; */
  }
`

const StyledArtistDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 0;
`

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 5px 0;
`

const StyledH3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 5px 0;
`

const StyledParagraph = styled.p`
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
  margin: 5px 0;
`


export default function ArtPieceDetails({ image, alt, artist, year, genre, width, height, onToggleFavourite, isFavourite }) {
  return (
    <StyledContainer>
      <Link href={"/art-pieces"}>
        <StyledBackButton type="button"> ← </StyledBackButton>
      </Link>
      
      <StyledArtDisplay>
        <StyledImage 
          src={image} 
          width={width} 
          height={height} 
          alt={alt}
        />
      
      <StyledArtistDisplay>
        <StyledH2> {alt} </StyledH2>
        <StyledH3> {artist} </StyledH3>
        <StyledParagraph>{genre} - {year}</StyledParagraph>
      </StyledArtistDisplay>
    
      </StyledArtDisplay>
      <FavouriteButton isFavourite={isFavourite.slug} onToggleFavourite={onToggleFavourite}/>
    
    </StyledContainer>
  );
}
