import pictures from '../../pictures/Vector.png';
import pictures2 from '../../pictures/people.png';
import pictures3 from '../../pictures/ArrowRight.png';
import pictures4 from '../../pictures/Trophy.png';
import pictures5 from '../../pictures/Ellipse 14.png';
import pictures6 from '../../pictures/ArrowRight.png';



const Section3 = () => {
    
    return (
        <>
        <section className="section3">
            <div className="container">
                <div className="rating-card">
                    <div className="mini-rating">
                        <img src={pictures} alt="none" />
                        <span>4.8 Rating</span>
                    </div>
                    <div className="mini-rating">
                        <img src={pictures2} className="people-img" alt="none" />
                        <span className="span-raiting"><span style={{color: '#217BF4',}}>+836k</span> Members</span>
                    </div>
                    <p className="all-p2">
                        More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                    </p>
                    <p className="join-p">Join Our Community <img src={pictures3} alt="none" /></p>
                </div>
                <div className="rating-card">       
                    <div className="mini-rating">
                        <img src={pictures4} alt="none" />
                        <span>Awwwards</span>
                    </div>
                    <div className="mini-rating">
                        <img src={pictures5} className="people-img" alt="none" />
                        <span className="span-raiting">Best of<span style={{color: '#217BF4',}}> 2021</span> on Github</span>
                    </div>
                    <p className="all-p2">
                        More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                    </p>
                    <p className="join-p">Join Our Community <img src={pictures6} alt="none" /></p>
                </div>
                <div className="rating-card rating-card2">
                    <p className="all-p">Whats Netboks?</p>
                    <h1 className="all-h1 all-h1-two">Why Join to Netbook Social Network?</h1>
                    <h4 className="all-h4 all-h4-two">Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</h4>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section3