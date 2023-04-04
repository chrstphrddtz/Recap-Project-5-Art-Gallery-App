import ArtPieces from "../../Components/ArtPieces/ArtPieces";

export default function ArtPiecesIndex({artPieces, onToggleFavourite}) {

  return (
    <ArtPieces artPieces={artPieces} onToggleFavourite={onToggleFavourite} />
  )
}