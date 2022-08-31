import React, { useState } from "react";
import { useMutation } from "urql";
import { AddMessageMutation } from "../graphql/mutations";
import Button from "./Button";
import Input from "./Input";

function Dreieck() {
  const [messageText, setMessageText] = useState("");
  const [_, addMessage] = useMutation(AddMessageMutation);

  return (
    <form
      className="flex p-2 gap-4 text"
      onSubmit={(e) => {
        e.preventDefault();
        addMessage({ text: messageText });
        setMessageText("");
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
  );
}

export default Dreieck;
