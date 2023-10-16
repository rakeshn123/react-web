import React from 'react'
import OverviewCard from './OverviewCard';

const OverviewSection = () => {
  return (
    <div className="overview-wrapper">
            <div className="container sec">
                <OverviewCard/>

                <div className="customer-card">
                    <div className="c-title">
                        <h4>Customers</h4>
                        <p>Customer that buy products</p>
                    </div>
                    <div className="progress-ca">
                        <div className="ui">
                        <div className="ui-widgets"> 
                            <div className="ui-values">65%</div> 
                            <p><b>Total new customers</b></p>
                        </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OverviewSection
