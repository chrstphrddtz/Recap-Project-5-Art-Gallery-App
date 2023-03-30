import Spotlight from "../Components/Spotlight/Spotlight";

export default function SpotlightPage({data}) {

  return (
    <div>
      <Spotlight pieces={data} />
    </div>
  );
}
