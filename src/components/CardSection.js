import React from 'react'


const CardSection = () => {
  return (
    <div className="card-wrapper">
            <div className="container">
                <div className="card-section-part">
                    <div className="card-section">
                        <div className="i-secnt">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <div className="cnt-prt">
                            <h5>Earning</h5>
                            <h2>$198k</h2>
                            <p><i className="fa-solid fa-arrow-up"></i> <b>37.8%</b> <span>this month</span></p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="i-secnt">
                            <i className="fas fa-wallet"></i>
                        </div>
                        <div className="cnt-prt scnd">
                            <h5>Order</h5>
                            <h2>$2.4k</h2>
                            <p><i className="fa-solid fa-arrow-down"></i> <b>2%</b> <span>this month</span></p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="i-secnt">
                            <i className="fas fa-balance-scale"></i>
                        </div>
                        <div className="cnt-prt scnd">
                            <h5>Balance</h5>
                            <h2>$2.4k</h2>
                            <p><i className="fa-solid fa-arrow-down"></i> <b>2%</b><span> this month</span> </p> 
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="i-secnt">
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                        <div className="cnt-prt">
                            <h5>Total Sales</h5>
                            <h2>$89k</h2>
                            <p><i className="fa-solid fa-arrow-up"></i> <b>11%</b> <span>this week</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardSection
