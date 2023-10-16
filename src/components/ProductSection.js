import React from 'react'

const ProductSection = () => {
  return (
    <div className="product-sell-wrapper">
            <div className="container">
                <div className="product-list">
                    <div className="product-section">
                        <div className="right-section">
                            <h3>Product Sell</h3>
                        </div>
                        <div className="left-product-section">
                            <div className="left-side-btn">
                                <form className="search-box">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="search" name="focus" placeholder="Search" id="search-input" value=""/>
                                </form>
                            </div>
                            <div className="select-btn">
                                <form className="desktop-form" name="validation" method="post" action="" onsubmit="return validation()"></form>
                                <select id="header-form-select" name="txtSelectConfig">
                                    <option selected="" disabled="" hidden="" value="">Last 30 Days</option>
                                    <option value="Oct 1">Oct 1</option>
                                    <option value="Oct 2">Oct 2</option>
                                    <option value="Oct 3">Oct 3</option> 
                                    <option value="Oct 4">Oct 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="produc-list-p">
                        <div className="product-name-part">
                            <div className="product-name">
                                <h5>Product Name</h5>
                            </div>
                            <div className="stock-name">
                                <h5>Stock</h5>
                                <h5>Price</h5>
                                <h5>Total Sales</h5>
                            </div>
                        </div>
                        <div className="product-sell-wrp">
                            <div className="right-p">
                                <div className="abstract-d">
                                    <div className="abstract-img">
                                        <img src="images/3d-image.jpg" alt="3d"/>
                                    </div>
                                    <div className="abstarct-cnt">
                                        <h4>Abstract 3D</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="left-list-sel">
                                    <ul>
                                        <li>32 in stock</li>
                                        <li>$ 45.99</li>
                                        <li>20</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="left-product-p">
                                <div className="abstract-d">
                                    <div className="abstract-img">
                                        <img src="images/3d-image.jpg" alt="3d"/>
                                    </div>
                                    <div className="abstarct-cnt">
                                        <h4>Sarphens Illustration</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="left-list-sel">
                                    <ul>
                                        <li>32 in stock</li>
                                        <li>$ 45.99</li>
                                        <li>20</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductSection
