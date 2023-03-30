import styled from "styled-components"

const StyledContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
`

const StyledButton = styled.button`
  width: 80px;
  font-size: 1.5rem;
  border: 1px solid black;
  background-color: aliceblue;
  border-radius: 5px;
`

export default function FavouriteButton({isFavourite, onToggleFavourite}) {
  return (
    <StyledButton type="button" onClick={()=> onToggleFavourite(isFavourite)}>Like?!</StyledButton>
  )

}