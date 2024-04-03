import { FaStar } from "react-icons/fa";
import{FaStarHalfAlt} from 'react-icons/fa'
const About = () => {
    return ( 
        <>
        <div className="section3">
            <div className="about_cont">
                <h1>About us!</h1>
                <p>we are a Indian company helping you to complete your Big works like
                    Construction works, Gardening, Plumbing , Electrical and many more..
                </p><br></br>
                <p>All you have to do is just choose a service you need and give your phone number, location and pay for them
                    thats it! You dont need to worry about other things.
                </p>
                <h3>Complete works super fast <img className="rocket" src={'images/rocket.png'}></img></h3>
            </div>
            <div className="review_cont">
                <div className="client">
                    <img className="profile" src={'/images/background.jpg'}></img>
                    <h4>Andrew</h4>
                    <p>This website helps me to complete my works easily with their support</p>
                    <div className="star_cont">
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                    </div>
                </div>
                <div className="client">
                    <img className="profile" src={'/images/background.jpg'}></img>
                    <h4>Sandy</h4>
                    <p>I am using this website for more than 5 moths and it is really helpful to complete many works</p>
                    <div className="star_cont">
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/>
                    </div>
                </div>
                <div className="client">
                    <img className="profile" src={'/images/background.jpg'}></img>
                    <h4>Sandy</h4>
                    <p>The user interface is really good to use and their service is so good</p>
                    <div className="star_cont">
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/>
                    </div>
                </div>
                <div className="client">
                    <img className="profile" src={'/images/background.jpg'}></img>
                    <h4>Karl Max</h4>
                    <p>Website's performance is too good and smooth, They even have 24/7 support</p>
                    <div className="star_cont">
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;