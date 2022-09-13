import styled from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
`;

export const StyledProfileRight = styled.div`
  flex: 9;
`;
export const StyledProfileRightTop = styled.div`
  & .profileCover {
    height: 320px;
    position: relative;
  }
  & .profileCoverImg {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  & .profileUserImg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 150px;
    border: 3px solid white;
  }
  & .profileInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .profileInfoName {
    font-size: 24px;
  }
  & .profileInfoDesc {
    font-weight: 300;
  }
`;

export const StyledProfileRightBottom = styled.div`
  display: flex;
`;
