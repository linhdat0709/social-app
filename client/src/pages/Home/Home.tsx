import { Feed } from "../../components/Feed/Feed";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { StyleHomeContainer } from "./Home.styed";
const Home = () => {
  return (
    <>
      <Topbar />
      <StyleHomeContainer>
        <Sidebar />
        <Feed />
        <Rightbar/>
      </StyleHomeContainer>
    </>
  );
};

export default Home;
