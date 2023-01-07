import React from 'react'
import '../Styles/Nav.css'
import {BsChatDotsFill} from 'react-icons/bs'
import {GiNotebook} from 'react-icons/gi'
import {GiTwoCoins} from 'react-icons/gi'
import {CgGames} from 'react-icons/cg'
import {AiFillContacts} from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {ImHome} from 'react-icons/im'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <Link to="/" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active':''}><ImHome/></Link>
      <Link to="/main" onClick={()=> setActiveNav('#main')} className={activeNav==='#main' ? 'active':''}><BsChatDotsFill/></Link>
      <Link to="/resources" onClick={()=> setActiveNav('#resources')} className={activeNav==='#resources' ? 'active':''}><GiNotebook/></Link>
      <Link to="/credit_store"  onClick={()=> setActiveNav('#credit_store')} className={activeNav==='#credit_store' ? 'active':''}><GiTwoCoins/></Link>
      <Link to="/challenges"  onClick={()=> setActiveNav('#challenges')} className={activeNav==='#challenges' ? 'active':''}><CgGames/></Link>
      <Link to="/contact"  onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><AiFillContacts/></Link>
    </nav>
  )
}

export default Nav