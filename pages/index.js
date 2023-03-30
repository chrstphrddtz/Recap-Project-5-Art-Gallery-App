import Spotlight from "../Components/Spotlight/Spotlight";

export default function SpotlightPage({data, onToggleFavourite}) {

  return (
    <div>
      <Spotlight pieces={data} onToggleFavourite={onToggleFavourite}/>
    </div>
  );
}
