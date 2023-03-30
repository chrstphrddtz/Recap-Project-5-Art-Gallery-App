import styled from "styled-components"

const StyledContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;

`

const StyledButton = styled.button`
  width: 80px;
  font-size: 1.5rem;
`

export default function FavouriteButton({isFavourite, onToggleFavourite}) {
  return (
    <StyledContainer>
      <StyledButton type="button" onClick={()=> onToggleFavourite(isFavourite)}>Like?!</StyledButton>
    </StyledContainer>
  )

}