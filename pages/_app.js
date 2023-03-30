import useSWR, {SWRConfig} from "swr";
import GlobalStyle from "../styles";

import Layout from "../Components/Layout/Layout";

const url = "https://example-apis.vercel.app/api/art";


export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <SWRConfig>
        <GlobalStyle />
        <Layout/>
        <Component {...pageProps} data={data} />
      </SWRConfig>
    </>
  );
}
