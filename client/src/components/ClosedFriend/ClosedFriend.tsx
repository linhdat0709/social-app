
import { UserType } from "../../DummyData";
import { StyledSidebarFriend } from "./CloseFriend.style";

interface Props {
  user:UserType
}

const ClosedFriend = (props:Props) => {

  const {user} = props

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <StyledSidebarFriend>
      <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
      <span>{user.username}</span>
    </StyledSidebarFriend>
  );
};

export default ClosedFriend;
