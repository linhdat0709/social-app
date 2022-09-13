import axios from "axios";
import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChatOnline } from "../../components/chatOnline/ChatOnline";
import { Conversation } from "../../components/conversations/Conversation";
import { Message } from "../../components/messages/Message";
import Topbar from "../../components/Topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import { StyleMessenger } from "./messenger.style";
import { io } from "socket.io-client";


export interface ConversationType {
  _id: string;
  members: string[];
}

export interface MessageType {
  _id: string;
  conversationId: string;
  sender: string;
  text: string;
  createdAt: any;
}

export const Messenger = () => {
  const { user } = useContext(AuthContext);

  const [conversations, setConversations] = useState<ConversationType[]>([]);

  const [currentChat, setCurrentChat] = useState<ConversationType | null>(null);

  const [message, setMessage] = useState<MessageType[]>([]);

  const [newMessage, setNewMessage] = useState<string>("");

  const [arrivalMessage, setArrivalMessage] = useState<any>(null);

  const [onlineUsers, setOnlineUsers] = useState<any>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const socket = useRef<any>(io("ws://localhost:8900"));

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data: any) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessage((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users: any) => {
      setOnlineUsers(
        user.followings.filter((f: any) =>
          users.some((u: any) => u.userId === f)
        )
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessage(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const receiverId = currentChat?.members.find((m) => m !== user._id);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newMessageObj = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat?._id,
    };

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/messages", newMessageObj);
      setMessage([...message, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      <Topbar />
      <StyleMessenger>
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c, index) => (
              <div key={index} onClick={() => setCurrentChat(c)}>
                <Conversation key={c._id} conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {message.map((m, index) => (
                    <div ref={scrollRef} key={index}>
                      <Message
                        key={m._id}
                        message={m}
                        own={m.sender === user._id}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setNewMessage(e.target.value)
                    }
                    value={newMessage}
                  ></textarea>
                  <button onClick={handleSubmit} className="chatSubmitButton">
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </StyleMessenger>
    </>
  );
};
