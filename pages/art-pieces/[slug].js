import ArtPieceDetails from "../../Components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function PiecesPage({ data }) {
  //console.log(data);

  const router = useRouter();
  const { slug } = router.query;

  const piece = data.find((p) => p.slug === slug);

  if (!piece) {
    return null;
  }

  const { imageSource, title, artist, genre, year } = piece;
  console.log(imageSource);

  return (
    <ArtPieceDetails
      image={imageSource}
      width={piece.dimensions.width}
      height={piece.dimensions.height}
      alt={piece.name}
      title={piece.name}
      artist={piece.artist}
      genre={piece.genre}
      year={piece.year}
    />
  );
}
