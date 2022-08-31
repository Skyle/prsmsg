import Link from "next/link";
import React from "react";

type Props = {};

function GQLLink({}: Props) {
  return (
    <div>
      <a href="https://chat.nrdz.de/graphiql">
        <img src="/GraphQL_Logo.svg" alt="GraphQL Logo" className="h-8 w-8" />
      </a>
    </div>
  );
}

export default GQLLink;
