import "./Rightbar.css"
import {Users} from "../../dummyData";
import Online from "../online/Online";

function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Khatke Rohit</b> and <b>3 other have</b> a birthday today
          </span>
        </div>
        <img src="/assets/ad.webp" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {
            Users.map((user) => {
              return (< Online key={user.id} users={user} />)

            })
          }

        </ul>
      </>
    )
  }
  const ProfileRightbar=()=>{
    return(<>
    <h4 className="rghtbarTitle">User Imformation title </h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">India</span>
      </div>
       <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Latur</span>
      </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
    </div>
      <h4 className="rghtbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/persons/1.jpg" alt="" className="rigtbarFollowingImg" />
          <span className="rightbarFollowingName">Santosh </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/2.jpg" alt="" className="rigtbarFollowingImg" />
          <span className="rightbarFollowingName">Santosh </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/3.jfif" alt="" className="rigtbarFollowingImg" />
          <span className="rightbarFollowingName">Santosh </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/4.jfif" alt="" className="rigtbarFollowingImg" />
          <span className="rightbarFollowingName">Santosh </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/5.webp" alt="" className="rigtbarFollowingImg" />
          <span className="rightbarFollowingName">Santosh </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/persons/6.jpg" alt="" className="rigtbarFollowingImg" />
          <span className="rightbarFollowingName">Santosh </span>
        </div>
      </div>
    </>)
  }
  return (
    <div className="rightBar">
      <div className="rightbarwrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>

    </div>
  )
}

export default Rightbar;