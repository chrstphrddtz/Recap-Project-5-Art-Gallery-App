import Spotlight from "../Components/Spotlight/Spotlight";

export default function SpotlightPage({artPieces, onToggleFavourite}) {

  return (
    <div>
      <Spotlight artPieces={artPieces} onToggleFavourite={onToggleFavourite}/>
    </div>
  );
}
