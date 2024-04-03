import {GrStatusGood} from 'react-icons/gr'
import { useState } from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
const Home = () => {

    return (  
        <>
        <div className="section1">
            <div className="container">
            <div className="slogan">
                <h2>Complete Works<br></br>without working!</h2>
            </div>
            <div className='bg-ball'></div>
            <div className="worker">
                <img src={'/images/worker7.webp'} className='pic'></img>
            </div>
            </div>
            <div className='arrow-down'><FaAngleDoubleDown/></div>
        </div>
        <center><h1>How to use it?</h1></center>
        <div className='Steps'>
            <div className='step1'>
                <h1>Step1</h1><br></br>Click the 'Services' then search and choose what kind of work you have to done
            </div>
            <div className='step1'>
                <h1>Step2</h1><br></br>Once it filters and shows the available services you can click them and fill the details
            </div>
            <div className='step1'>
                <h1>Step3</h1><br></br>Finally give your exact address and click 'Book'<br></br><span>All done! Our workers will reach you soon <br></br><div className='tick'><GrStatusGood/></div></span>
            </div>
            </div>
            
      
        </>
    );
}
 
export default Home;