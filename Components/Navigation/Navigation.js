import styled from "styled-components";
import Link from "next/link";

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  border-bottom: 1px solid black;
  height: 50px;
  background-color: wheat;
  margin: 0;
  padding-top: 10px;
  position: fixed;
  width: 100%;
  top: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`

export default function Navigation() {

  return (
    <Nav>
      <li>
        <StyledLink href="/">Spotlight</StyledLink>
      </li>
      <li>
        <StyledLink href="/../../art-pieces/">Pieces</StyledLink>
      </li>   
      <li>
        <StyledLink href="/../../favourite/">Favourite</StyledLink>
      </li>    
    </Nav>
  )
}