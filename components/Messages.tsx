import { useQuery, useSubscription } from "urql";
import { MessageCountQuery } from "../graphql/queries";
import { MessageAddedSubscription } from "../graphql/subscriptions";
import { Message } from "../interfaces/message.interface";

export const Messages = () => {
  // this is for updating the message count in the MessageCount Component
  const [_, reexecuteMessageCountQuery] = useQuery({
    query: MessageCountQuery,
  });

  // subscription for new messages with the handler to format it into res.data as Message[]
  const [res] = useSubscription(
    { query: MessageAddedSubscription },
    (messages: Message[] = [], response) => {
      reexecuteMessageCountQuery();
      return [response.messageAdded, ...messages];
    },
  );

  return (
    <div>
      {res.data?.map((message) => (
        <div key={message.id}>{message.text}</div>
      ))}
    </div>
  );
};
