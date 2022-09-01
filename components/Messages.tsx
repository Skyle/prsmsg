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
      {data.messages
        ?.map((message) => (
          <div key={message.id} className="w-[30rem] my-4">
            <div className="text-xl border rounded-full bg-blue-200 bg-opacity-25 px-6 py-6 backdrop-blur-md shadow-md">
              {message.text}{" "}
            </div>
            <div className="text-sm text-center">
              {message.createdAt?.slice(0, 10)}{" "}
              {message.createdAt?.slice(11, 19)}
            </div>
          </div>
        ))
        .slice(0, 6)
        .reverse()}
    </div>
  );
};
