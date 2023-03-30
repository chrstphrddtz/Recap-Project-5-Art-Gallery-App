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
    const newArray = data.map((artPiece) => {
      if(artPiece.slug == currentArt.slug) {
        console.log("I found you: ", artPiece);
        if(artPiece.isFavourite) {
          artPiece.isFavourite = !artPiece.isFavourite
        } else {
          artPiece.isFavourite = true
        }
        return artPiece
      }
    })

    console.log("New Array: ", artPiecesInfo);

    setArtPiecesInfo(newArray)
  

  }

  return (
    <>
      <SWRConfig>
        <GlobalStyle />
        <Layout />
        <Component {...pageProps} data={data} onToggleFavourite={handleToggleFavourite} />
      </SWRConfig>
    </>
  );
}
