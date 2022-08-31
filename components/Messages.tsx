import { gql, useSubscription } from "urql";

interface Message {
  id?: string;
  text?: string;
  createdAt?: string;
}

const MessageAddedSubscription = gql`
  subscription MessageAdded {
    messageAdded {
      id
      text
      createdAt
    }
  }
`;

const handleSubscription = (messages: Message[] = [], response: any) => {
  return [response.messageAdded, ...messages];
};

export const Messages = () => {
  const [res] = useSubscription(
    { query: MessageAddedSubscription },
    handleSubscription,
  );

  return <div>{JSON.stringify(res.data)}</div>;
};
