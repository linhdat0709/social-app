import axios from "axios";
import { useEffect, useState } from "react";
import { UserType } from "../../DummyData";
import { StyleChatOnline } from "./ChatOnline.style";

interface Props {
  onlineUsers: UserType[];
  currentId: string;
  setCurrentChat: any;
}

export const ChatOnline = (props: Props) => {
  const [friends, setFriends] = useState<UserType[]>([]);

  const [onlineFriends, setOnlineFriends] = useState<UserType[]>([]);

  const { onlineUsers, currentId, setCurrentChat } = props;

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try{
        const res = await axios.get("/users/friends/" + currentId);
        // console.log(res)
        setFriends(res.data);
      }catch(err){
        console.log(err)
      }
 
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f: any) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  console.log({friends,onlineUsers})


  const handleClick = async (user: UserType) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyleChatOnline>
      {onlineFriends.map((o) => (
        <div
          className="chatOnlineFriend"
          key={o._id}
          onClick={() => handleClick(o)}
        >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : PF + "persons/noAvatar.png"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </StyleChatOnline>
  );
};
