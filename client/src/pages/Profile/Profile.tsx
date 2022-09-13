import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Feed } from "../../components/Feed/Feed";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { UserType } from "../../DummyData";
import {
  StyledProfile,
  StyledProfileRight,
  StyledProfileRightBottom,
  StyledProfileRightTop,
} from "./Profile.style";

interface ParamsType {
  username?: string;
}

export const Profile = () => {
  const [user, setUser] = useState<UserType>();

  const username = useParams<ParamsType>().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username} `);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <StyledProfile>
        <Sidebar />
        <StyledProfileRight>
          <StyledProfileRightTop>
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user?.coverPicture
                    ? PF + user.coverPicture
                    : PF + "persons/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user?.profilePicture
                    ? PF + user.profilePicture
                    : PF + "persons/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileInfoDesc">{user?.desc}</span>
            </div>
          </StyledProfileRightTop>
          <StyledProfileRightBottom>
            <Feed username={username} />

            <Rightbar user={user} />
          </StyledProfileRightBottom>
        </StyledProfileRight>
      </StyledProfile>
    </>
  );
};
