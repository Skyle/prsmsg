import type { NextPage } from "next";
import { Messages } from "../components/Messages";

import Dreieck from "../components/Dreieck";

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
      <div className="grid gap-8 justify-center items-center p-12">
        <div>
          <div className="">
            <Messages />
          </div>
        </div>
        <div>
          <div className="p-8 z-10">
            <Dreieck></Dreieck>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
