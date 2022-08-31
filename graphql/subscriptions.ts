import { gql } from "urql";

export const MessageAddedSubscription = gql`
  subscription MessageAdded {
    messageAdded {
      id
      text
      createdAt
    }
  }
`;
