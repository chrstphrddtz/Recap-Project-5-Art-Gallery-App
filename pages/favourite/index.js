import ArtPieces from "../../Components/ArtPieces/ArtPieces";

export default function Favourite({ data, artPiecesInfo, onToggleFavourite }) {
  const compareData = (arr1, arr2) => {
    return arr1.map((piece1) => arr2.find((piece2)=>piece2.slug === piece1.currentArt))
  }
  
  return <ArtPieces pieces={compareData(artPiecesInfo, data)} onToggleFavourite={onToggleFavourite} />;
}
