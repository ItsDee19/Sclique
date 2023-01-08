import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
         <section className="home-back">
        <div className="home-header">
            <h1 className="home-gr-head">Grow</h1>
            <h1 className="home-oth-head">without</h1>
            <h1 className="home-oth-head">bounderies</h1>
            <p>Join the largest and smartest student <br/> community in the world and grow together.</p>
        </div>
        <div className="button-div">
        <Link to="/login" className="button-log-in">Login</Link>
        <Link to="/signup" className="button-sign-up">Signup</Link>
            {/* <button onclick="location.href='file://'" type="button" className="button-log-in">Log In</button> */}
            {/* <button type="button" className="button-sign-up">Sign Up</button> */}
        </div>
    </section>
  )
}

export default Home
