import ArtPieces from "../../Components/ArtPieces/ArtPieces";

export default function Favourite({ artPieces, artPiecesInfo, onToggleFavourite }) {
  const compareData = (arr1, arr2) => {
    return arr1.map((piece1) => arr2.find((piece2)=>piece2.slug === piece1.currentArt))
  }
  
  return <ArtPieces artPieces={compareData(artPiecesInfo, artPieces)} onToggleFavourite={onToggleFavourite} />;
}
