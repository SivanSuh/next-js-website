import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Js projects</title>
      </Head>
      <HomePage />
    </div>
  );
}
