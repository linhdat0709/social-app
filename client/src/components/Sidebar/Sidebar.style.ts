import styled from "styled-components";

export const StyleSidebar = styled.div`
  flex: 3;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(179,179,179);
  }

`;
export const StyleSidebarWrapper = styled.div`
  padding: 20px;
  & .sidebarList {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & .sidebarListItem {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  & .sidebarListItemText {
  }

  & .sidebarIcon {
    margin-right: 15px;
  }
`;

export const StyleSidebarButton = styled.button`
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
`;

export const StyleSidebarHr = styled.hr`
  margin: 20px 0;
`;

export const StyleSidebarFriendList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
