import { gql, useQuery, useSubscription } from "urql";

interface Message {
  id?: string;
  text?: string;
  createdAt?: string;
}

interface MessagesQueryData {
  messages: Message[];
}

const allMessages = gql`
  query {
    messages {
      id
      text
      createdAt
    }
  }
`;

// const handleSubscription = (messages: Message[] = [], response: any) => {
//   return [response.newMessages, ...messages];
// };

export const Messages = () => {
  // const [res] = useSubscription({ query: newMessages }, handleSubscription);

  const [{ data }] = useQuery<MessagesQueryData>({
    query: allMessages,
    requestPolicy: "cache-and-network",
  });

  if (!data) {
    return <p>No new messages</p>;
  }

  return (
    <div>
      {data.messages?.map((message) => (
        <p key={message.id}>
          {message.text} {message.createdAt}
        </p>
      ))}
    </div>
  );
};
