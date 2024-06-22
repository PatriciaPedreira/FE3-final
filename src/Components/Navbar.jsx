import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from "../utils/routes";
import { useOdontoContext } from '../Context/Context';

const Navbar = () => {
  const { state, toggleDarkMode } = useOdontoContext();
  const { darkMode } = state;

  return (
    <div className="header">
      <h1><strong style={{color: "red"}}>D</strong>H Odonto</h1>
      <nav>
        <ul type="none">
          <li><Link to={routes.home}><h3>Home</h3></Link></li>
          <li><Link to={routes.contact}><h3>Contact</h3></Link></li>
          <li><Link to={routes.favs}><h3>Favs</h3></Link></li>
          <li>
            <button onClick={toggleDarkMode} style={{height: 75}}>
              <img src={darkMode ? '/images/ico-sun.png' : '/images/luna.png'} alt='Change theme'/>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar