import {
  StyleComment,
  StylePosts,
  StylePostsBottom,
  StylePostsBottomLeft,
  StylePostsBottomRight,
  StylePostsCenter,
  StylePostsTop,
  StylePostsTopLeft,
  StylePostsTopRight,
  StylePostsWrapper,
  StyleSubMenuPost,
} from "./Post.style";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { PostType, UserType } from "../../DummyData";
import { useContext, useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


interface Props {
  post: PostType;
}

export const Post = (props: Props) => {
  const { post } = props;
  const [like, setLike] = useState<number>(post.likes.length);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [user, setUser] = useState<UserType>();
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const [showComment , setShowComment] = useState<boolean>(false)

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user: currentUser } = useContext(AuthContext);

  const desc = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const deletePost = () => {
    try {
      axios.delete(`/posts/${post._id}`, { data: { userId: currentUser._id } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StylePosts>
      <StylePostsWrapper>
        <StylePostsTop>
          <StylePostsTopLeft>
            <Link
              style={{ textDecoration: "none" }}
              to={`profile/${user?.username}`}
            >
              <img
                className="postProfileImg"
                src={
                  user?.profilePicture
                    ? PF + user.profilePicture
                    : PF + "persons/noAvatar.png"
                }
                alt=""
              />
            </Link>

            <span className="postUserName">{user?.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </StylePostsTopLeft>
          <StylePostsTopRight>
            <MoreHorizIcon
              className="icon"
              style={{ cursor: "pointer" }}
              onClick={() => setShowSubMenu(!showSubMenu)}
            />
            <StyleSubMenuPost
              style={{ display: showSubMenu ? "block" : "none" }}
            >
              <div className="subMenuItem" onClick={() => deletePost()}>
                Xóa bài viết
              </div>
            </StyleSubMenuPost>
          </StylePostsTopRight>
        </StylePostsTop>
        <StylePostsCenter>
          <span className="postText">{post.desc}</span>
          <div>
            {post.img.map((image, index) => {
              if (post.img.length === 1) {
                return (
                  <img
                    key={index}
                    className="postImg"
                    src={PF + image}
                    alt=""
                  />
                );
              } else {
                return (
                  <img
                    key={index}
                    className="postImgMulti"
                    src={PF + image}
                    alt="787"
                  />
                );
              }
            })}
          </div>
        </StylePostsCenter>
        <StylePostsBottom>
          <StylePostsBottomLeft>
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              alt=""
              onClick={() => likeHandler()}
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              alt=""
              onClick={() => likeHandler()}
            />
            <span className="postLikeCounter">{like} people liked</span>
          </StylePostsBottomLeft>
          <StylePostsBottomRight>
            <span className="postCommentText" onClick={() => setShowComment(true)}>{post.comment} comments</span>
          </StylePostsBottomRight>
        </StylePostsBottom>
        <StyleComment style={{display : showComment ? "block" : "none"}}>
          <div className="commentContainer">
            <div className="commentInputContainer">
              <img
                className="commentAvatar"
                src={PF + currentUser.profilePicture}
                alt=""
              />
              <input className="commentInput" placeholder="Viết bình luận" />
            </div>
            <div className="commentContain">
              <div>
              <img src={PF + "1.jpeg"} alt="" className="commentAvatar" />
              </div>
              <div className="commentTextContain">
                <div className="commentUserName">Nguyen Linh Dat</div>
                <span className="commentContent">
                  fghhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </span> 
              </div>
            </div>
            <div className="commentContain">
              <div>
              <img src={PF + "1.jpeg"} alt="" className="commentAvatar" />
              </div>
              <div className="commentTextContain">
                <span className="commentContent">
                  aaaaaaaaaaaaaaaaaaaaaaa
                </span>
              </div>
            </div>
          </div>
        </StyleComment>
      </StylePostsWrapper>
    </StylePosts>
  );
};
