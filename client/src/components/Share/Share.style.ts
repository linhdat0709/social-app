import styled from "styled-components";

export const StyleShare = styled.div`
  width: 100%;
  /* height: 170px; */
  border-radius: 10px;
  -webkit-box-shadow: 0px 1px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 1px 16px -8px rgba(0, 0, 0, 0.68);
`;

export const StyleShareWrapper = styled.div`
  padding: 10px;

  & .shareImgContainer {
    padding: 0 20px 10px 20px;
    position: relative;
  }

  & .shareImg {
    width: 50%;
    object-fit: cover;
  }

  & .shareCancelImg {
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const StyleShareTop = styled.div`
  display: flex;
  align-items: center;
  & .shareProfileImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  & .shareInput {
    border: none;
    width: 80%;
  }

  & .shareInput:focus {
    outline: none;
  }
`;

export const StyleShareHr = styled.hr`
  margin: 20px;
`;

export const StyleShareBottom = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .shareOptions {
    display: flex;
    margin-left: 20px;
  }
  & .shareOption {
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
  }
  & .shareOptionText {
    font-size: 14px;
    font-weight: 500;
  }

  & .shareIcon {
    font-size: 24px;
    margin-right: 3px !important;
  }
`;

export const StyledShareButton = styled.button`
  border: none;
  padding: 7px;
  border-radius: 5px;
  background-color: green;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  color: white;
`;
