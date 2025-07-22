import useGetConversation from '../../hooks/useGetConversation';
import Conversation from './Conversation';

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  console.log("CONVERSATIONS:", conversations);

  return (
    <div className="flex flex-col gap-2 pr-2">
      {loading ? (
        <p className="text-gray-400 text-sm">Loading...</p>
      ) : (
        conversations.map((conv, i) => (
          <Conversation key={conv._id || i} conversation={conv} />
        ))
      )}
    </div>
  );
};

export default Conversations;
