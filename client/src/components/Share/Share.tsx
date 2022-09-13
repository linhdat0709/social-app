import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Cancel from "@mui/icons-material/Cancel";

import {
  StyledShareButton,
  StyleShare,
  StyleShareBottom,
  StyleShareHr,
  StyleShareTop,
  StyleShareWrapper,
} from "./Share.style";
import { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const desc = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<any>(null);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost: any = {
      userId: user._id,
      desc: desc.current?.value,
    };

    if (file) {
      const data = new FormData();
      let newArr = [];
      for (let i = 0; i < file.length; i++) {
        data.append("file", file[i]);
        newArr.push(file[i].name);
        newPost.img = newArr;
      }

      axios
        .post("/upload/", data)
        .then((res) => {
          console.log("resss", res);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyleShare>
      <StyleShareWrapper>
        <StyleShareTop>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "persons/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder={`What's is in your mind ${user.username}?`}
            className="shareInput"
            ref={desc}
          />
        </StyleShareTop>
        <StyleShareHr></StyleShareHr>
        {file && (
          <div className="shareImgContainer">
            {Array.from(Array(file.length).keys()).map((_, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file[index])}
                alt=""
                className="shareImg"
              />
            ))}
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <StyleShareBottom
          onSubmit={submitHandler}
          action="upload"
          method="post"
          encType="multipart/formdata"
        >
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photos or Videos</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                multiple
                name="multifile"
                onChange={(e: ChangeEvent<any>) => setFile(e.target.files)}
              />
            </label>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tags</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <StyledShareButton type="submit">Share</StyledShareButton>
        </StyleShareBottom>
      </StyleShareWrapper>
    </StyleShare>
  );
};

export default Share;
