import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

type Props = {};

function Dreieck({}: Props) {
  const [messageText, setMessageText] = useState("");
  return (
    <div className="">
      <form
        className="flex p-2 gap-4 text"
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
