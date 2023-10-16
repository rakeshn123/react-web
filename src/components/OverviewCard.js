import React from 'react'

const OverviewCard = () => {
  return (
    <div className="over-view">
                    <div className="overview-section">
                        <div className="overview-right">
                            <h4>Overview</h4>
                            <p>Monthly Earning</p>
                        </div>
                        <div className="overview-left">
                            <div className="select-btn">
                                <form className="desktop-form" name="validation" method="post" action="" onsubmit="return validation()"></form>
                                <select id="header-form-select" name="txtSelectConfig">
                                    <option selected="" disabled="" hidden="" value="">Quarterly</option>
                                    <option value="6 monyhs">6 months</option>
                                    <option value="6 monyhs">6 months</option>
                                    <option value="6 monyhs">6 months</option> 
                                    <option value="6 monyhs">6 months</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="graph-section">
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                        <div className="graph-card">
                            <div className="graph-line"></div>
                        </div>
                    </div>
                    <div className="overview-name">
                        <h6>Jan</h6>
                        <h6>Feb</h6>
                        <h6>Mar</h6>
                        <h6>Apr</h6>
                        <h6>May</h6>
                        <h6>Jun</h6>
                        <h6>Jul</h6>
                        <h6>Aug</h6>
                        <h6>Sep</h6>
                        <h6>Oct</h6>
                        <h6>Nov</h6>
                        <h6>Dec</h6>
                    </div>
                </div>
  )
}

export default OverviewCard
