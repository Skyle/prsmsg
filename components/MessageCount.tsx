import React, { useEffect, useState } from "react";
import { gql, useQuery } from "urql";

type Props = {};

const MessageCountQuery = gql`
  query {
    messageCount
  }
`;

function MessageCount({}: Props) {
  const [result, reexecuteQuery] = useQuery({
    query: MessageCountQuery,
  });

  useEffect(() => {
    setInterval(() => {
      reexecuteQuery();
    }, 2000);
  }, [reexecuteQuery]);

  if (result.data)
    return (
      <div>
        <div>{result.data.messageCount}</div>
        <div className="text-xs">MSGS</div>
      </div>
    );
  return null;
}

export default MessageCount;
