import React from "react";
import { Messages } from "./Messages";

type Props = {};

function TriangleBackground({}: Props) {
  return (
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
  );
}

export default TriangleBackground;
