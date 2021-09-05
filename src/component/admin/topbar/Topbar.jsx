import React from 'react'
import "./topbar.css"
import { NotificationsNone, Settings } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="admin-logo"><img src={"/img/logo_second.png"} alt="Classique" /></span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
