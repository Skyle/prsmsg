import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Dreieck from "../components/Dreieck";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="grid gap-8 h-full w-full justify-center items-end p-12 border relative">
      <div className="flex items-end rainbowParent h-full w-full absolute">
        <div className="blueBox bg-blue-500 absolute h-full w-1/2 right-0 bg-opacity-50"></div>
        <div className="orangeBox bg-orange-500 absolute h-full w-1/2 left-0 bg-opacity-50"></div>
        <div className="redTriangle bg-red-500 absolute h-full w-1/2 bg-opacity-50"></div>
        <div className="yellowTriangle bg-yellow-500 absolute h-full w-1/2 bg-opacity-50"></div>
        <div className="greenTriangle bg-green-500 absolute h-full w-1/2 right-0 bg-opacity-50"></div>
        <div className="purpleTriangle bg-purple-500 absolute h-full w-1/2 right-0 bg-opacity-50"></div>
      </div>
      <div className="z-10">
        <div className="border h-96">Alle Nachrichten</div>
      </div>
      <div>
        <div className="p-8 z-10">
          <Dreieck></Dreieck>
        </div>
      </div>
    </div>
  );
};

export default Home;
