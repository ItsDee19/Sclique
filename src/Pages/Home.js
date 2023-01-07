import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
         <section class="home-back">
        <div class="home-header">
            <h1 class="home-gr-head">Grow</h1>
            <h1 class="home-oth-head">without</h1>
            <h1 class="home-oth-head">bounderies</h1>
            <p>Join the largest and smartest student <br/> community in the world and grow together.</p>
        </div>
        <div class="button-div">
        <Link to="/login" className="button-log-in">Login</Link>
        <Link to="/signup" className="button-sign-up">Signup</Link>
            {/* <button onclick="location.href='file://'" type="button" class="button-log-in">Log In</button> */}
            {/* <button type="button" class="button-sign-up">Sign Up</button> */}
        </div>
    </section>
  )
}

export default Home