import { gql } from "urql";

export const MessageCountQuery = gql`
  query {
    messageCount
  }
`;
