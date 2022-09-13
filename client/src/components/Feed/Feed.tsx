import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { API_URL } from "../../Api/Api_URL";
import { PostType } from "../../DummyData";
import { Post } from "../Posts/Post";
import Share from "../Share/Share";
import { StyleFeed, StyleFeedWrapper } from "./Feed.style";

interface Props {
  username?: string;
}

export const Feed = (props: Props) => {
  const { username } = props;


  const [posts, setPosts] = useState<PostType[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`posts/timeline/${user._id}`);
      setPosts(
        res.data.sort((p1: PostType, p2: PostType) => {
          
          return new Date(p2.createdAt).valueOf() - new Date(p1.createdAt).valueOf();
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <StyleFeed>
      <StyleFeedWrapper>
       { (!username || username === user?.username) && <Share />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </StyleFeedWrapper>
    </StyleFeed>
  );
};
