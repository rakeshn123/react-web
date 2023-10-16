import SideBar from './components/SideBar';
import CardSection from './components/CardSection';
import './App.css';
import OverviewSection from './components/OverviewSection';
import ProductSection from './components/ProductSection';


function App() {
  return (
    <div className="wrapper">
        <SideBar/>
        <div className="sidebar-menu">
            <div className="desk-resp-ham">
                <ul className="toggle-desk">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="sidebar">
                    <ul className="menu desk-ham-menu">
                        <li><a href="/"><span><img className="sidebar-icon" src="./images/dashboard.png" alt="icon"/> Dashboard </span></a></li>
                        <li><a href="/"><span><img className="sidebar-icon" src="./images/loading.png" alt="icon"/> Product </span><img className="next" src="./images/next.png" alt=""/></a></li>
                        <li><a href="/"><span><img className="sidebar-icon" src="./images/people.png" alt="icon"/> Customer </span><img className="next" src="./images/next.png" alt=""/></a></li>
                        <li><a href="/"><span><img className="sidebar-icon" src="./images/income.png" alt="icon"/> Income </span><img className="next" src="./images/next.png" alt=""/></a></li>
                        <li><a href="/"><span><img className="sidebar-icon" src="./images/promotions.png" alt="icon"/> Promotion </span><img className="next" src="./images/next.png" alt=""/></a></li>
                        <li><a href="/"><span><img className="sidebar-icon" src="./images/customer-support.png" alt="icon"/> Help </span><img className="next" src="./images/next.png" alt=""/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="right-page">
        <div className="search-wrapper">
            <div className="container">
                <div className="main-index-section">
                    <div className="right-side-part">
                        <h4>Hello Shahrukh</h4>
                        <img src="images/hand.png" alt="hand"/>
                    </div>
                    <div className="left-side-btn">
                        <form className="search-box">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="search" name="focus" placeholder="Search" id="search-input" value=""/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <CardSection/>
        <OverviewSection/>
        <ProductSection/>
    </div>
    </div>
  );
}

export default App;
