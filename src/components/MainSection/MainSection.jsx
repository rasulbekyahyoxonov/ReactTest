// import logo from '../../pictures/logo.png';
// import magnify from '../../pictures/MagnifyingGlass (1).png';
// import Image from '../../pictures/Iamge.png';


const MainSection = ({img1, img2, img3, text1, text2, text3, info1, info2, info3,}) => {
    console.log('salom'); 
    return (
        <div className="main-div">
        <div className="card">
            <div className="card-img">
                <img src={img1} alt="none" />
            </div>
            <div className="card-title">
                <h1>{text1}</h1>
                <p>{info1}</p>
                <button>Read More <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                <img src={img2} alt="none" />
            </div>
            <div className="card-title">
                <h1>{text2}</h1>
                <p>{info2}</p>
                <button>Read More <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                <img src={img3} alt="none" />
            </div>
            <div className="card-title">
                <h1>{text3}</h1>
                <p>{info3}</p>
                <button>Read More <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            </div>
        </div>
        {/* <section className="main-section">
            <header className="header">
                <div className="container">
                    <div className="left">
                        <a href="#"><img src={logo} alt="none" /></a>
                        <ul className="header-ul">
                            <li><a href="#" className="active-a">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Contact</a></li>
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
        </section> */}
        </div>
    )
}

export default MainSection