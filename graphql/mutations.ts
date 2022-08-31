import { gql } from "urql";

export const AddMessageMutation = gql`
  mutation AddMessageMutation($text: String!) {
    addMessage(text: $text) {
      id
      text
      createdAt
    }
  }
`;
