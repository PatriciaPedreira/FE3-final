import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from "../utils/routes";
import { useOdontoContext } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { toggleDarkMode } = useOdontoContext();

  return (
    <div className="header">
      <h1>DH Odonto</h1>
      <nav> {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <ul type="none">
          <li><Link to={routes.home}><h3>Home</h3></Link></li>
          <li><Link to={routes.contact}><h3>Contact</h3></Link></li>
          <li><Link to={routes.favs}><h3>Favs</h3></Link></li>
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <li><button onClick={toggleDarkMode} style={{height: 75}}>Change theme</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar