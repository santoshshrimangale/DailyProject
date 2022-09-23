import"./Online.css"

function Online({users}) {
  return (
      <li className="rigtbarFriend">
          <div className="rightbarProfileContainer">
              <img src={users.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">{users.username}</span>
      </li>
  )
}

export default Online;