import useSWR from "swr";

import { useArtStore } from "../../../Components/ArtStore";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useArtPieces() {

  const { data, error, isLoading } = useSWR(url, fetcher);

  return{
    artPieces: data,
    loading: !error && !data,
    error
  }
}