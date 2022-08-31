import { useQuery } from "urql";
import { MessageCountQuery } from "../../graphql/queries";

function MessageCount() {
  const [result] = useQuery({
    query: MessageCountQuery,
  });

  if (result.data)
    return (
      <div>
        <div>{result.data.messageCount}</div>
        <div className="text-xs">MSGS</div>
      </div>
    );
  return null;
}

export default MessageCount;
