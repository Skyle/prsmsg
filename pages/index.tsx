import type { NextPage } from "next";
import { Messages } from "../components/Messages";
import { Rainbow } from "../components/Rainbow";

import Dreieck from "../components/Dreieck";

const Home: NextPage = () => {
  return (
    <div className="h-screen relative">
      <Rainbow />
      <div className="h-full w-full absolute overflow-hidden">
        <div className="absolute h-full w-full">
          <div className="pb-[10rem] h-full flex flex-column items-end justify-center">
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
