import Head from "next/head";
import HomePage from "./HomePage";
export default function Home() {
  return (
    <div className="w-full  h-full">
      <Head>
        <title>Next Js projects</title>
      </Head>
      <HomePage />
    </div>
  );
}
