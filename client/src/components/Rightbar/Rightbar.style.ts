import styled from "styled-components";

export const StyleRightbarFollowButton = styled.button`
  margin-top: 30px;
  margin-bottom: 10px;
  border: none;
  background-color: #1872f2;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &.rightbarFollowButton:focus{
    outline: none;
  }
`;

export const StyleRightbar = styled.div`
  flex: 3.5;
`;
export const StyleRightbarWrapper = styled.div`
  padding: 20px 20px 0 0;
`;
export const StyleBirthdayContainer = styled.div`
  display: flex;
  align-items: center;
  & .birthdayImg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  & .birthdayText {
    font-weight: 300;
    font-size: 15px;
  }
`;
export const StyleRightbarAd = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
`;

export const StyleRightbarListFriend = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StyleRightbarTitle = styled.h4`
  margin-bottom: 20px;
`;

export const StyleRightbarInfo = styled.div`
  margin-bottom: 30px;
  & .rightbarInfoItem {
    margin-bottom: 10px;
  }
  & .rightbarInfoKey {
    font-weight: 500;
    margin-right: 15px;
    color: #555;
  }
  & .rightbarInfoValue {
    font-weight: 300;
  }
`;

export const StyleRightbarFollowings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const StyleRightbarFollowing = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  & .rightbarFollowingImg {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
  & .rightbarFollowingName {
  }
`;
