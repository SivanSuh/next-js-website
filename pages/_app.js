import "../styles/globals.css";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    // <div className="sm:h-full h-screen ">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </div>
  );
}

export default MyApp;
