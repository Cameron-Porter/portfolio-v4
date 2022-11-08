import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cameron's Portfolio</title>
      </Head>

      <h1>Lets make something awesome.</h1>
    </div>
  );
}
