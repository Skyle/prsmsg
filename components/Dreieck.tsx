import React from "react";
import Button from "./Button";
import Input from "./Input";

type Props = {};

function Dreieck({}: Props) {
  return (
    <div>
      <div className="p-4 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
      <div className="p-4 bg-gradient-to-b from-blue-500 to-orange-500"></div>
      <div className="flex p-2 gap-4">
        <Input></Input>
        <Button></Button>
      </div>
    </div>
  );
}

export default Dreieck;
