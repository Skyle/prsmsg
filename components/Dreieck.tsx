import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

type Props = {};

function Dreieck({}: Props) {
  const [messageText, setMessageText] = useState("");
  return (
    <div className="">
      <div className="dreieck">
        <div className="p-4 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
        <div className="p-4 bg-gradient-to-b from-blue-500 to-orange-500"></div>
        <div className="p-4 bg-gradient-to-b from-orange-500 to-emerald-500"></div>
      </div>
      <form
        className="flex p-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          value={messageText}
          onChange={(e) => {
            setMessageText(e.target.value);
          }}
        ></Input>
        <Button></Button>
      </form>
    </div>
  );
}

export default Dreieck;
