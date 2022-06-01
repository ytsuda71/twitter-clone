import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar_twitterIcon'/>
        <SidebarOption text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={TagIcon}/>
        <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/>
        <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
        <SidebarOption text="Lists" Icon={ListAltIcon}/>
        <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
        <SidebarOption text="More" Icon={MoreHorizIcon}/>
        {/* Sidebar option */}
        {/* Sidebar option */}
        {/* Sidebar option */}
        {/* Sidebar option */}
        {/* Sidebar option */}
        {/* Twitter button */}
    </div>
  )
}

export default Sidebar