import styled from "styled-components";

export const StylePosts = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`;

export const StylePostsWrapper = styled.div`
  padding: 10px;
`;
export const StylePostsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StylePostsTopLeft = styled.div`
  display: flex;
  align-items: center;
  & .postProfileImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  & .postUserName {
    font-size: 15px;
    font-weight: 500;
    margin: 0 10px;
  }

  & .postDate {
    font-size: 12px;
  }
`;

export const StylePostsTopRight = styled.div`
  position: relative;
`;

export const StylePostsCenter = styled.div`
  margin: 20px 0;

  & .postText {
  }
  & .postImg {
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }
  & .postImgMulti {
    margin-top: 20px;
    width: 50%;
    height: 200px;
    min-height: 200px;
    max-height: 500px;
    object-fit: contain;
  }
`;

export const StylePostsBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StylePostsBottomLeft = styled.div`
  display: flex;
  align-items: center;
  & .likeIcon {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: pointer;
  }

  & .postLikeCounter {
    font-size: 15px;
  }
`;

export const StylePostsBottomRight = styled.div`
  & .postCommentText {
    cursor: pointer;
    border-bottom: 1px dashed gray;
    font-size: 15px;
  }
`;
export const StyleSubMenuPost = styled.div`
  position: absolute;
  z-index: 9999;
  right: 10px;
  top: 22px;

  & .icon:hover {
    border-radius: 50%;
    background-color: #e3e3e3;
  }

  & .subMenuItem {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e3e3e3;
    border-radius: 4px;
    max-height: 400px;
    min-width: 100px;
    outline: none;
    padding: 8px 4px;
  }

  & .subMenuItem:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const StyleComment = styled.div`
  & .commentContainer {
    margin: 30px 0 0 0;
  }
  & .commentInputContainer {
    display: flex;
    align-items: center;
    margin-left: 15px;
    width: 100%;
  }
  & .commentAvatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
  }

  & .commentInput {
    width: 100%;
    max-width: 500px;
    border: none;
    background-color: #d1d1d1;
    border-radius: 30px;
    padding: 8px 16px;
    margin-right: 15px;
  }

  & .commentInput:focus {
    outline: none;
  }

  & .commentContain {
    margin-top: 12px !important;
    width: 100%;
    display: flex;
    margin: 0 15px;
  }

  & .commentTextContain {

    max-width: 500px;
    border: none;
    background-color: #d1d1d1;
    border-radius: 15px;
    padding: 8px 16px;
    margin-right: 15px;
    overflow-wrap: break-word;
  }

  & .commentUserName{
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 8px;
  }
`;
