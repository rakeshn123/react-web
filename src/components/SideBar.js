import React from 'react'


const SideBar = () => {
  return (
      <div className="left-sidebar">
            <div className="sidebar-top">
            <div className="logo">
                <img src="./images/hexagon.png" alt=" "/>
                <h3>Dashboard</h3>
            </div>
            <ul>
                <li><a href="/"><span><img className="sidebar-icon" src="./images/dashboard.png" alt="icon"/> Dashboard </span><img className="next" alt="" /></a></li>
                <li><a href="/"><span><img className="sidebar-icon" src="./images/loading.png" alt="icon"/> Product </span><img className="next" src="./images/next.png" alt=""/></a></li>
                <li><a href="/"><span><img className="sidebar-icon" src="./images/people.png" alt="icon"/> Customer </span><img className="next" src="./images/next.png" alt=""/></a></li>
                <li><a href="/"><span><img className="sidebar-icon" src="./images/income.png" alt="icon"/> Income </span><img className="next" src="./images/next.png" alt=""/></a></li>
                <li><a href="/"><span><img className="sidebar-icon" src="./images/promotions.png" alt="icon"/> Promote </span><img className="next" src="./images/next.png" alt=""/></a></li>
                <li><a href="/"><span><img className="sidebar-icon" src="./images/customer-support.png" alt="icon"/> Help </span><img className="next" src="./images/next.png" alt=""/></a></li>
            </ul>
            </div>
            <div className="manager">
                <div>
                <span><img src="./images/manager.jpg" alt=""/></span>
                <div className="man-name">
                    <h5>Evano</h5>
                    <p>Project Manager</p>
                </div>
            </div>
            <span><img className="down-arr" src="./images/next.png" alt=""/></span>
            </div>
        </div>
  )
}

export default SideBar
