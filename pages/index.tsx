import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Dreieck from "../components/Dreieck";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="grid gap-8 justify-center items-center p-12">
      <div>
        <div className="">Alle Nachrichten</div>
      </div>
      <div>
        <div className="p-8 ">
          <Dreieck></Dreieck>
        </div>
      </div>
    </div>
  );
};

export default Home;
