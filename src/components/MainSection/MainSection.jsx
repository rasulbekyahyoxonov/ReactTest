import logo from '../../pictures/logo.png';
import magnify from '../../pictures/MagnifyingGlass (1).png';
import Image from '../../pictures/Iamge.png';


const MainSection = () => {
    return (
        <>
        <section className="main-section bg-slate-100 flex rounded-3xl">
            <header className="header">
                <div className="container">
                    <div className="left">
                        <a href="#"><img src={logo} alt="none" /></a>
                        <ul className="header-ul">
                            <li><a href="#" className="active-a">Home</a></li>
                            <li><a href="#">Comunity</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Events</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="search-input">
                            <img src={magnify} alt="none" />
                                <input type="search" id="search" placeholder="Search Here..." />
                                </div>
                                <div className="button-div">
                                    <button className="login-btn">Log in</button>
                                </div>
                        </div>
                    </div>
            </header>
            <div className="main-title">
                <div className="container">
                    <div className="left-title">
                        <button className="comunity-btn">Netbook community</button>
                        <h1>Your Solutions For Community!</h1>
                        <p>More than 2 billion people in over countries use socibook to stay in touch with friends  family.</p>
                        <div className="more-btn">
                            <button className="login-btn about-btn">About More</button>
                            <button className="login-btn invite-btn">Invite Friend</button>
                        </div>
                    </div>
                    <div className="right-img">
                        <img src={Image} alt="none" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default MainSection