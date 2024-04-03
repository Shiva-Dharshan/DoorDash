import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [drop,Setdrop]=useState(true)
    const navigate=useNavigate()
    const handleclick=()=>{
        Setdrop(false)
    }
    const handleclose=()=>{
        Setdrop(true)
    }
    const handlelogout=()=>{
        localStorage.removeItem('login')
        navigate("/")
        window.location.reload()
    }
    return ( 
        <>
        <div className="nav">
            <div className="icon">
            <h1><span>DoorDash</span></h1>
            <img src={'/images/icon.jpg'}></img>
            </div>
            <ul>
                <li className='home'><Link to="/home">Home</Link></li>
                <li className='about'><Link to="/about">About</Link></li>
                <li className='services'><Link to="/services">Services</Link></li>
                <li className='logout' onClick={handlelogout}>Log out!</li>
            </ul>
           <div className="bar_cont" onClick={handleclick}><FaBars/></div> 
        </div>
        <div className="drop" style={{display:drop?'none':'block', position:"fixed"}}>
            <ul>
            <li><Link to="/Home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li className='logout'  onClick={handlelogout}> Log out!</li>
                <li><div className='xmark' onClick={handleclose}><AiFillCloseCircle/></div></li>
            </ul>
        </div>
        </>
     );
}
 
export default Navbar;