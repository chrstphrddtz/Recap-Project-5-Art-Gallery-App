import Image from "next/image";
import styled  from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
  text-align: center;
  margin-top: 80px;
  width: 80%;
  height: 80%;
`

const StyledImage = styled(Image)`
  width: 40%;
  height: 40%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 10px;
` 

const ArtistDisplay = styled.div`
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

export default function ArtPiecePreview({image, title, artist, width, height, alt}) {

  return (
    <StyledContainer>
      <StyledImage
          src={image}
          width={width}
          height={height}
          alt={alt}
        />
        <ArtistDisplay>
          <StyledH2>{title}</StyledH2>
          <StyledH3>{artist}</StyledH3>
        </ArtistDisplay>
    </StyledContainer>
  )
}