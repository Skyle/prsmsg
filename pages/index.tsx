import type { NextPage } from "next";
import { Messages } from "../components/Messages";

import Dreieck from "../components/Dreieck";

const Home: NextPage = () => {
  return (
    <div className="h-screen relative">
      <div className="">
        <div className="h-full w-full absolute overflow-hidden">
          <div className="blueBox bg-gradient-to-tr from-transparent to-blue-500 absolute h-full w-1/2 right-0"></div>
          <div className="orangeBox bg-gradient-to-tl from-transparent to-orange-500 absolute h-full w-1/2 left-0"></div>
          <div className="redTriangle bg-gradient-to-l from-transparent to-red-500 absolute h-full w-1/2 bg-opacity-50"></div>
          <div className="yellowTriangle bg-gradient-to-t from-transparent to-yellow-500 absolute h-full w-1/2"></div>
          <div className="greenTriangle bg-gradient-to-t from-transparent to-green-500 absolute h-full w-1/2 right-0"></div>
          <div className="purpleTriangle bg-gradient-to-r from-transparent to-purple-500 absolute h-full w-1/2 right-0"></div>
          <div className="absolute h-full w-full">
            <div className="flex justify-center h-full items-baseline">
              <Messages />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full  bg-gradient-to-b from-transparent to-gray-800">
        <div className="flex justify-center">
          <div>
            <div className="py-2 z-10">
              <Dreieck />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
