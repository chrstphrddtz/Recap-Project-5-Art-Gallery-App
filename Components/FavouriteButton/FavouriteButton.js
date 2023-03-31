import styled from "styled-components"


const StyledButton = styled.button`
  width: 80px;
  font-size: 1.5rem;
  border: 1px solid black;
  background-color: aliceblue;
  border-radius: 5px;
  &:hover {
    box-shadow: 2px 2px 10px 1px;
    border: 1.5px solid black;
    background-color: pink;
  }

`

export default function FavouriteButton({isFavourite, onToggleFavourite}) {
  // console.log("isFavourite from FavouriteButton: ", isFavourite);
  return (
    <StyledButton type="button" onClick={()=> onToggleFavourite(isFavourite)}>Like?!</StyledButton>
  )
}