import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu active">
                    <h3 className="sidebarTitle active">Dashboard</h3>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Users Management</h3>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Product Management</h3>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Order Management</h3>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Offers</h3>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Sales Report</h3>
                </div>
            </div>
        </div>
    )
}
