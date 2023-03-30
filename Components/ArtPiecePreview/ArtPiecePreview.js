import Image from "next/image";
import styled  from "styled-components";

const Container = styled.div`
  margin: 20px;
  text-align: center;
`
const StyledImage = styled(Image)`
  width: 40%;
  height: 40%;
` 

const ArtworkTitle = styled.h2`

`

const ArtistTitle = styled.h2`

`

export default function ArtPiecePreview({image, title, artist, width, height, alt}) {
  return (
    <Container>
      <StyledImage
          src={image}
          width={width}
          height={height}
          alt={alt}
        />
        <h2>{title}</h2>
        <h3>{artist}</h3>
    </Container>
  )
}