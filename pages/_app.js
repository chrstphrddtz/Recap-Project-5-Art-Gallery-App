import { SWRConfig } from "swr";
import useLocalStorageState from "use-local-storage-state";
import useArtPieces from "../resources/lib/hook/useArtPieces";

import GlobalStyle from "../styles";
import Layout from "../Components/Layout/Layout";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState("Local", { defaultValue: [] });

  const { artPieces, error, isLoading } = useArtPieces();
  console.log("Data from _app", artPieces);

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
          artPieces={artPieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavourite={handleToggleFavourite}
        />
      </SWRConfig>
    </>
  );
}
