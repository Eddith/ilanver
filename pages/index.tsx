import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [hover, setHover] = useState(false);

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
      {step === 0 && (
        <section className="w-full flex flex-col items-center justify-center h-screen">
          <input
            className="border border-gray-600 text-blue-800 w-[300px] rounded p-3"
            type="text"
            name="name"
            value={name}
            id="name"
            placeholder="Adınız Nedir"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (name === "Gülce" || name === "gülce") {
                setStep(1);
              } else {
                window.close();
              }
            }}
            className="bg-blue-500 text-center w-[200px] text-white rounded-lg mt-4 p-3"
          >
            Devam Et
          </button>
        </section>
      )}
      {step === 1 && (
        <section className="w-full flex flex-col items-center justify-center h-screen text-gray-500 text-md font-bold gap-2 text-center">
          <h3>Merhaba Hoşgeldin Gülce ♥️ </h3>
          <h3>Bu uygulama senin için Ali Koçman tarafından yapıldı.</h3>
          <h3>Öncelikle bunu senin için hazırlarken</h3>
          <h3>Tarih 05.03.2023</h3>
          <h3>Muthmelen bu senin eline ulaştığında</h3>
          <h3>Tarih 08.03.2023</h3>
          <h3>
            Senin için Hazılradığı sorular var görmek istersen Devam Et butonuna
            bas
          </h3>
          <button
            onClick={() => {
              setStep(2);
            }}
            className="bg-blue-500 text-center w-[200px] text-white rounded-lg mt-4 p-3"
          >
            Devam Et
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="w-full flex flex-col items-center justify-center h-screen text-red-500 text-xl font-bold gap-2 text-center">
          <h3 className="border border-red-500 p-3 bg-red-500 text-white">
            Öncelikle Bugünün Önemi İçin 8 MART DÜNYA KADINLAR GÜNÜN kutlu olsun
            ♥️
          </h3>
          <h3 className="mt-4">Sorular dediysem aslında sadece bir soru var</h3>
          <h3 className="mt-4">SENDEN HOŞLANIYORUM BENİMLE ÇIKARMISIN?</h3>
          <button
            onClick={() => {
              router.push("https://www.youtube.com/watch?v=EyN5aeZGYPM");
            }}
            className="bg-blue-500 text-center w-full text-white rounded-lg mt-4 p-3"
          >
            Evet ♥️
          </button>
          <button
            disabled
            className={`bg-gray-300 text-center w-[70px] text-white rounded-lg mt-4 p-3 ${
              hover === true ? "left-10" : "right-10"
            }`}
          >
            Hayır
          </button>
        </section>
      )}
    </div>
  );
};

export default Home;
