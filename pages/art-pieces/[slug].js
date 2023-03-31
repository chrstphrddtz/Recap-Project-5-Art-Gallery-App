import ArtPieceDetails from "../../Components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function PiecesPage({ data, onToggleFavourite }) {

  const router = useRouter();
  const { slug } = router.query;
  const piece = data.find((p) => p.slug === slug);

  if (!piece) {
    return null;
  }

  const { imageSource, dimensions, name, title, artist, genre, year } = piece;
  
  return (
    <ArtPieceDetails
      image={imageSource}
      width={dimensions.width}
      height={dimensions.height}
      alt={name}
      title={title}
      artist={artist}
      genre={genre}
      year={year}
      onToggleFavourite={onToggleFavourite}
      isFavourite={piece}
    />
  );
}
