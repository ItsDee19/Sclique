import React from 'react'
import '../Styles/Login.css'

const Login = () => {
  return (
    
    <div className="outer-box">
    <div className="inner-box">
        <header className="signup-header">
            <h1>Login</h1>
            <h3>It will take just 30 secs.</h3>
        </header>
        <main className="signup-body">
            <form action="#">
                <p>
                    <label for="fullname">Full Name</label>
                    <input type="text" id="fullname" placeholder="Deepak Sahu" required/>
                </p>
                <p>
                    <label for="fullname">Institute Name</label>
                    <input type="text" id="fullname" placeholder="Doons International" required/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="ronaldo@hotmail.com" required/>
                </p>
                <p>
                    <label for="password">Account Password</label>
                    <input type="password" id="password" placeholder="atleast 8 charecters" required/>
                </p>
                <p>
                    <input type="submit" id="submit" value="Enter"/>
                </p>
            </form>
        </main>

          
    </div>
    <div className="circle c1"></div>
    <div className="circle c2"></div>
 </div>

  )
}

export default Login