import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
export const StyledTopBarContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: #1877f2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const StyledTopBarLeft = styled.div`
  flex: 3;

  & .logo {
    font-size: 24px;
    margin-left: 20px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`;
export const StyledTopBarCenter = styled.div`
  flex: 5;

  & .searchBar {
    width: 100%;
    height: 30px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
  }
  & .searchInput {
    border: none;
    width: 70%;
  }

  & .searchInput:focus {
    outline: none;
  }
`;
export const StyledTopBarRight = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  & .topBarLinks {
    & .topBarLink {
      margin-left: 10px;
      font-size: 14px;
      cursor: pointer;
    }
  }
  & .topBarIcons {
    display: flex;
    & .topBarIconItems { 
      margin-right: 15px;
      position: relative;
      cursor: pointer;
      & .topBarIconBadge {
        background-color: red;
        position: absolute;
        top: -5px;
        right: -5px;
        border-radius:50%;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
    }
  }
  & .topBarImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
`;
export const StyledSearchIcon = styled(SearchIcon)`
  font-size: 20px !important;
  margin-left: 10px;
`;
