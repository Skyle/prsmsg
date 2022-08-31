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

  return (
    <div>
      <div>
        {res.data?.map((message) => {
          return (
            <div
              key={message.id}
              className="w-[300px] h-[100px] rounded-3xl  ml-100px mt-100px relative bg-white pt-6 m-10 text-black text-center translate-y-68 duration-500 transition-all"
            >
              {message.text}
              <div className=" px-2 py-3 m-1 -top-8 -left-4 bg-white text-black w-[120px] absolute rounded-full">
                {/* {new Date(message.createdAt!).getDate()}.
                {new Date(message.createdAt!).getMonth() + 1}.
                {new Date(message.createdAt!).getFullYear()} */}
                {new Date(message.createdAt!).getHours()}:
                {new Date(message.createdAt!).getMinutes()}:
                {new Date(message.createdAt!).getSeconds()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
