import type { NextPage } from "next";
import Head from "next/head";
import { DarkModeButton } from "../components/DarkModeButton";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Personal Website</title>
      </Head>
      <DarkModeButton />
      <div>Hello World!</div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
