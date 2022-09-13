import {
  StyleBirthdayContainer,
  StyleRightbar,
  StyleRightbarAd,
  StyleRightbarFollowButton,
  StyleRightbarFollowing,
  StyleRightbarFollowings,
  StyleRightbarInfo,
  StyleRightbarListFriend,
  StyleRightbarTitle,
  StyleRightbarWrapper,
} from "./Rightbar.style";

import { Users, UserType } from "../../DummyData";
import Online from "../Online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Add from "@mui/icons-material/Add";
import { AuthContext } from "../../context/AuthContext";
import Remove from "@mui/icons-material/Remove";

interface Props {
  user?: UserType;
}

export const Rightbar = (props: Props) => {
  const { user } = props;

  const { user: currentUser, dispatch } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [friends, setFriends] = useState<any>([]);

  const [followed, setFollowed] = useState<boolean>(false);


  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [user,currentUser ]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        console.log(user?._id)
        const friendList = await axios.get("/users/friends/" + user?._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put("/users/" + user?._id + "/unfollow", {
          userId: currentUser._id,
        });
        // @ts-ignore
        dispatch({ type: "UNFOLLOW", payload: user?._id });
      } else {
        await axios.put("/users/" + user?._id + "/follow", {
          userId: currentUser._id,
        });
        // @ts-ignore
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <StyleBirthdayContainer>
          <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mếch</b> and <b>3 other friends</b> have a birthday today
          </span>
        </StyleBirthdayContainer>
        <StyleRightbarAd src={`${PF}ad.png`}></StyleRightbarAd>
        <StyleRightbarTitle>Online friends</StyleRightbarTitle>
        <StyleRightbarListFriend>
          {Users.map((user:UserType) => (
            <Online key={user._id} user={user} />
          ))}
        </StyleRightbarListFriend>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user?.username !== currentUser.username && (
          <StyleRightbarFollowButton
            className="rightbarFollowButton"
            onClick={handleClick}
          >
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </StyleRightbarFollowButton>
        )}
        <StyleRightbarTitle>User Infomation</StyleRightbarTitle>
        <StyleRightbarInfo>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user?.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user?.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user?.relationship}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Job:</span>
            <span className="rightbarInfoValue">{user?.job}</span>
          </div>
        </StyleRightbarInfo>
        <StyleRightbarTitle>User friends</StyleRightbarTitle>
        <StyleRightbarFollowings>
          {friends.map((friend: any) => {
            return (
              <Link
                key={friend?._id}
                to={"/profile/" + friend?.username}
                style={{ textDecoration: "none" }}
              >
                <StyleRightbarFollowing>
                  <img
                    className="rightbarFollowingImg"
                    src={
                      friend?.profilePicture
                        ? PF + friend.profilePicture
                        : PF + "persons/noAvatar.png"
                    }
                    alt=""
                  />
                  <span className="rightbarFollowingName">
                    {friend?.username}
                  </span>
                </StyleRightbarFollowing>
              </Link>
            );
          })}
        </StyleRightbarFollowings>
      </>
    );
  };

  return (
    <StyleRightbar>
      <StyleRightbarWrapper>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </StyleRightbarWrapper>
    </StyleRightbar>
  );
};
