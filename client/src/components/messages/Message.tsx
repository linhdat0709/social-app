

import { MessageType } from "../../pages/messenger/messenger";
import { StyleMessage } from "./Message.style";
import {format} from "timeago.js"


interface Props {
  own?:any
  message : MessageType
}

export const Message = (props:Props) => {

  const {  message,own} = props

  return <StyleMessage>
    <div className={own ? "message"  : "message own" }>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  </StyleMessage>;
};
