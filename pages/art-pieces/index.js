import ArtPieces from "../../Components/ArtPieces/ArtPieces";

export default function ArtPiecesIndex({data, onToggleFavourite}) {
  return (
    <ArtPieces pieces={data} onToggleFavourite={onToggleFavourite} />
  )
}