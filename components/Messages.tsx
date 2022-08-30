import { gql, useSubscription } from 'urql';

interface Message {
  id?: string;
  text?: string;
  createdAt: string;
}

const newMessages = gql`
  subscription MessageSub {
    newMessages {
      id
      text
    }
  }
`;

const handleSubscription = (messages: Message[] = [], response: any) => {
  return [response.newMessages, ...messages];
};

export const Messages = () => {
  const [res] = useSubscription({ query: newMessages }, handleSubscription);

  if (!res.data) {
    return <p>No new messages</p>;
  }

  return (
    <div>
      {res.data?.map((message) => (
        <p key={message.id}>{message.text}</p>
      ))}
    </div>
  );
};
