import { MoreVert } from "@mui/icons-material"
import "./Post.css";
import { Users } from "../../dummyData"
import { useState } from "react";

function Post({ post }) {
    const [forLike, setForLike] = useState(post.likes);
    const [isLike, setIsLike] = useState(false);

    const likeHandler = () => {
        setForLike(isLike ? forLike - 1 : forLike + 1)
        setIsLike(!isLike)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userid)[0]?.profilePicture} alt="" />
                        <span className="postUserName">{Users.filter((u) => u.id === post?.userid)[0]?.username}</span>
                        <span className="postDate">{post?.data}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post?.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottonLeft">
                        <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{forLike}People liked it</span>
                    </div>
                    <div className="postBottonRight">
                        <span className="postCommentText">{post?.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;