import useSWR from "swr";
import Spotlight from "../Components/Spotlight/Spotlight";

import ArtPieces from "../Components/ArtPieces/ArtPieces";

const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <Spotlight pieces={data} />
      <ArtPieces pieces={data} />
    </div>
  );
}
