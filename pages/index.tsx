import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Homes from "../src/components/Home";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js and Vercel."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Homes />
      <Footer />
    </div>
  );
};

export default Home;
