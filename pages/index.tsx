import type { NextPage } from "next";
import { Messages } from "../components/Messages";

import Dreieck from "../components/Dreieck";

const Home: NextPage = () => {
  return (
    <div className="grid gap-8 justify-center items-center p-12">
      <div>
        <div className="">
          <Messages />
        </div>
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
