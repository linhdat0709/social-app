import axios from "axios";
import { useEffect, useState } from "react";
import { UserType } from "../../DummyData";
import { ConversationType } from "../../pages/messenger/messenger";
import { StyleConversation } from "./Conversation.style";

interface Props {
  conversation: ConversationType;
  currentUser: UserType;
}

export const Conversation = (props: Props) => {
  const { conversation, currentUser } = props;

  const [user, setUser] = useState<UserType | null>(null);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <StyleConversation className="conversation">
      <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "/persons/noAvatar.png"
        }
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </StyleConversation>
  );
};
