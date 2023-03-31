import useSWR, { SWRConfig } from "swr";
import { useState } from "react";
// import useLocalStorageState from "use-local-storage-state";
// import { useImmerLocalStorageState } from "../../useImmerLocalStorageState";

import GlobalStyle from "../styles";
import Layout from "../Components/Layout/Layout";

const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavourite(currentArt) {
    setArtPiecesInfo((artPiecesInfo) => {
      const favourite = artPiecesInfo.find(
        (favourite) => favourite.currentArt === currentArt
      );
      if (favourite) {
        return artPiecesInfo.filter((favourite) => {
          if (favourite.currentArt !== currentArt) {
            return favourite;
          }
        });
      }
      return [...artPiecesInfo, { currentArt, isFavourite: true }];
    });
  }

  return (
    <>
      <SWRConfig>
        <GlobalStyle />
        <Layout />
        <Component
          {...pageProps}
          data={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavourite={handleToggleFavourite}
        />
      </SWRConfig>
    </>
  );
}
