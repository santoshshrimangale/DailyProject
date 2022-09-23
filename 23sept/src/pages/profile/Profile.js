import "./Profile.css";
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/backphoto/2.jfif" alt="" className="profileCoverImg" />
                            <img src="assets/post/1.png" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Santosh Shrimangale</h4>
                            <span className="profileInfodesc">Hello my friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottm">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile