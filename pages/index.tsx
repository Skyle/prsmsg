import type { NextPage } from "next";
import { Messages } from "../components/Messages";

import Dreieck from "../components/Dreieck";
import TriangleBackground from "../components/TriangleBackground";

const Home: NextPage = () => {
  return (
    <div className="h-screen relative">
      <div className="">
        <TriangleBackground />
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
