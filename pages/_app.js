import useSWR, { SWRConfig } from "swr";
import { useState } from "react";

import GlobalStyle from "../styles";
import Layout from "../Components/Layout/Layout";

const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {

  const [artPiecesInfo, setArtPiecesInfo] = useState([])

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavourite(currentArt) {
    console.log("currentArt from App: ", currentArt);

    setArtPiecesInfo((artPiecesInfo) => {
      const favourite = artPiecesInfo.find((favourite) => favourite.currentArt === currentArt)
      console.log("favourite before if", favourite);
      if(favourite) {
        return artPiecesInfo.map((favourite) => 
        favourite.currentArt === currentArt ? {...favourite, isFavourite: !favourite.isFavourite} : favourite)
      }
      console.log("favourite after if", favourite);
      return [...artPiecesInfo, {currentArt, isFavourite: true}]
    })
    console.log("artPiecesInfo: ", artPiecesInfo)
  }

  return (
    <>
      <SWRConfig>
        <GlobalStyle />
        <Layout />
        <Component {...pageProps} data={data} onToggleFavourite={handleToggleFavourite}  />
      </SWRConfig>
    </>
  );
}
