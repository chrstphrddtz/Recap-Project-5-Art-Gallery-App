import ArtPieces from "../../Components/ArtPieces/ArtPieces";


export default function Favourite({data, onToggleFavourite}) {

  console.log("Data from Favourite: ", data);
  
  return(
      <ArtPieces pieces={data} onToggleFavourite={onToggleFavourite}/>
  )
}