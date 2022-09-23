import { Bookmark, Chat, Event, HelpOutline, RssFeed, School, WorkOutline } from "@mui/icons-material";
import "./Sidebar.css"
import {Users} from "../../dummyData"
import CloseFriends from "../closeFriends/CloseFriends";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemtext">
              Feed
            </span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemtext">
              Chats
            </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemtext">
              Bookmark
            </span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemtext">
              HelpOutline
            </span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemtext">
              WorkOutline
            </span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemtext">
              Event
            </span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemtext">
              School
            </span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {
            Users.map((u)=>{
              return (<CloseFriends  key={u.id} user={u} />)
            })
          }
         
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;