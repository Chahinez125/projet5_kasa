import React from 'react'
import { NavLink } from 'react-router-dom'
import logoHeader from '../../image/kasa_red.png'
import './Header.scss'
 function Header() {
  return (
    <div className = 'Header'>
        <NavLink to ="/">
            <img src = {logoHeader} alt=''></img>
        </NavLink>
        <nav className='navbar'>
                <NavLink to="/" className= {({isActive})=> (isActive ? "navbar__link navbar__link--active" : "navbar__link")} >Accueil</NavLink>
                <NavLink to="/About" className={({isActive})=> (isActive ? "navbar__link navbar__link--active" : "navbar__link")} >A Propos</NavLink>
            </nav>
    </div>
  )
}
export default Header;