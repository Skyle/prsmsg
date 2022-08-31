import React, { useState } from "react";
import { gql, useMutation } from "urql";
import Button from "./Button";
import Input from "./Input";

type Props = {};

const AddMessageMutation = gql`
  mutation AddMessageMutation($text: String!) {
    addMessage(text: $text) {
      id
      text
      createdAt
    }
  }
`;

function Dreieck({}: Props) {
  const [messageText, setMessageText] = useState("");
  const [addMessageResult, addMessage] = useMutation(AddMessageMutation);

  return (
    <div className="">
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
    </div>
  );
}

export default Dreieck;
