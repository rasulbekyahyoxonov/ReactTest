import pictures from '../../pictures/Ellipse 11.png';
import pictures2 from '../../pictures/Image (3).png';
import pictures3 from '../../pictures/pexels-andres-ayrton-6578391.png';
import pictures4 from '../../pictures/pexels-brett-sayles-2881232.png';


const Section2 = () => {
    return (
        <>
        <section className="section2">
            <div className="container">
                <div className="left-social">
                    <p className="all-p">Whats Netboks?</p>
                    <h1 className="all-h1">Why Join to Netbook Social Network?</h1>
                    <h4 className="all-h4">Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</h4>
                    <div className="group-div">
                        <div>
                            <img src={pictures} alt="none" />
                                <span>Groups</span>
                        </div>
                        <div>
                            <img src={pictures} alt="none" />
                                <span>Message</span>
                        </div>
                        <div>
                            <img src={pictures} alt="none" />
                                <span>Share</span>
                        </div>
                    </div>
                </div>
                <div className="right-social">
                    <div className="social-card">
                        <div className="social-one">
                            <img src={pictures2} alt="none" />
                        </div>
                        <div className="social-two">
                            <div>
                                <img src={pictures3} alt="none" />
                            </div>
                            <div>
                                <img src={pictures4} alt="none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section2


