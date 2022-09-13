import {
  StyledSearchIcon,
  StyledTopBarCenter,
  StyledTopBarContainer,
  StyledTopBarLeft,
  StyledTopBarRight,
} from "./Topbar.style";
// import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
const Topbar = () => {
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("user");
    // history.push("/login");
    window.location.reload();
  };

  return (
    <StyledTopBarContainer>
      <StyledTopBarLeft>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">DatSocial</span>
        </Link>
      </StyledTopBarLeft>

      <StyledTopBarCenter>
        <div className="searchBar">
          <StyledSearchIcon />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </StyledTopBarCenter>
      <StyledTopBarRight>
        <div className="topBarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItems">
            <PersonIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <Link to ="/messenger"  style={{textDecoration:"none" , color: "inherit"}}>
            <div className="topBarIconItems">
              <ChatIcon />
              <span className="topBarIconBadge">1</span>
            </div>
          </Link>
          <div className="topBarIconItems">
            <NotificationsIcon />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "persons/noAvatar.png"
            }
            alt=""
            className="topBarImg"
          />
        </Link>
        <div className="topBarIconItems" onClick={handleLogout}>
          <LogoutIcon />
        </div>
      </StyledTopBarRight>
    </StyledTopBarContainer>
  );
};

export default Topbar;
