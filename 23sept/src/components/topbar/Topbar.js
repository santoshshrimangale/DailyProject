import { Chat, Notifications, Person, Search } from "@mui/icons-material"
import "./Topbar.css"

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topBarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input type="text" placeholder="Search for friend, post or video" className="serchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">HomePage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
              <Person/>
              <span className="topbarIconBatch">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBatch">1</span>
          </div>
          <div className="topbarIconItems">
            <Notifications/>
            <span className="topbarIconBatch">1</span>
          </div>
        </div>
        <img src="/assets/persons/10.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar