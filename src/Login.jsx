import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom"
import { auth, provider } from './FirebaseConfig'


export default function Login() {
  const [display,Setdisplay] =useState(true)
  const [close,Setclose]=useState(false)
  const popup=document.getElementsByClassName("popup-cont")
  const email=document.getElementById('email')
  const password=document.getElementById('password')
  const name=document.getElementById('name')
  const navigate=useNavigate()
  let x=false
  const handlelogin=(e)=>{
    if(email.value==""|| password.value==""||name.value=="")
    {
      
      e.preventDefault()
    }
  }
  const handleclick=()=>{
    Setdisplay(false)
  }
  const handleclose=()=>{
    Setdisplay(true)
  }
  //SigninwithGoogle
  const singInWithGoogle=()=>{
    signInWithPopup(auth,provider)
    .then(async (res)=>{
         console.log(res.user.displayName)
         await localStorage.setItem('login','true')
         await navigate('/home')
         window.location.reload()
         
    })
    .catch((err)=>console.log(err.message))
}
  return (
    <>
    <div className='section0'>
    <div className="part1">
      
    </div>
    <div className="part2">
    <div className="banner">
        <h1>DoorDash</h1>
        <img className='banner-icon' src={'images/icon.jpg'}></img>
    </div>
      <div className="banner2">
      <p>The best website to complete your works easily</p>
      <button className="start" onClick={singInWithGoogle}>Get started!</button>
      {/* <div className='login-'> <p>Already have an account?</p>
      <Link to="/home"><button className='login'>login</button></Link>
      </div> */}
      </div>
      <div className="popup-cont" style={{display:display? 'none':'block'}}>
        <AiFillCloseCircle className='close' onClick={handleclose}/>
        <form>
          <p>Register here!</p>
        <input id='email' type='email' placeholder='Email id' required></input>
        <input id='password' type='password' placeholder='Password' required></input>
        <input id='name' type='text' placeholder='Firstname' required></input>
        <Link to="/home"><button className='login' type='submit' onClick={handlelogin}>Sign up</button></Link>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}
