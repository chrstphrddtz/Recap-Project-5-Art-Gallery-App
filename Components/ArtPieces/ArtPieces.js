import { uid } from "uid";
import Image from "next/image";

import styled  from "styled-components";


const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100px;
`;

// const StyledImage = styled(Image)`
// box-shadow: var(--box-shadow-book);
// ` 

export default function ArtPieces({pieces}) {
  return (
    <ul>
        <li key={uid}>
          <Image
            src={pieces[0].imageSource}
            width={pieces[0].dimensions.width/10}
            height={pieces[0].dimensions.height/10}
            alt={`Artwork`}
          />
        </li>

    
    </ul>
  )
  

}
