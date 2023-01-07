import React from 'react'
import '../Styles/Header.css'
import { MdSwitchAccount } from 'react-icons/md'
import { Link } from 'react-router-dom'
import pic from '../assets/sclique_logo.png'

const Header = () => {

  return (
    <div className='header'>
      <div className='header__left'>
        <div className='icon'> <img src={pic} /> </div>
        <h2>Sclique - A Student Community!</h2>
      </div>
      <div className='header__right'>
        {/* <Link to="/login" className="btn btn-primary">Login</Link> */}
        <div className='btn btn-primary'>
          <a href='#'><MdSwitchAccount />Account</a></div>
      </div>
    </div>
  )
}

export default Header