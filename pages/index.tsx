import type { NextPage } from "next";
import { Messages } from "../components/Messages";

import Dreieck from "../components/Dreieck";

const Home: NextPage = () => {
  return (
    <div className="h-screen relative">
      <div className="h-full w-full absolute">
        <div className="blueBox bg-blue-500 absolute h-full w-1/2 right-0 bg-opacity-50"></div>
        <div className="orangeBox bg-orange-500 absolute h-full w-1/2 left-0 bg-opacity-50"></div>
        <div className="redTriangle bg-red-500 absolute h-full w-1/2 bg-opacity-50"></div>
        <div className="yellowTriangle bg-yellow-500 absolute h-full w-1/2 bg-opacity-50"></div>
        <div className="greenTriangle bg-green-500 absolute h-full w-1/2 right-0 bg-opacity-50"></div>
        <div className="purpleTriangle bg-purple-500 absolute h-full w-1/2 right-0 bg-opacity-50"></div>
        <div className="absolute h-full w-full">
          <div className="flex justify-center h-full items-center">
            <Messages />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full  bg-gradient-to-b from-transparent to-gray-800">
        <div className="flex justify-center">
          <div>
            <div className="py-2 z-10">
              <Dreieck></Dreieck>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
