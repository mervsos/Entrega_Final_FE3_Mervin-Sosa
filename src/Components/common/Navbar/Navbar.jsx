import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../../utils/global.context'
import nav from './Navbar.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { handleChangeTheme, theme } = useContext(ContextGlobal)

  console.log(theme.theme);
  const isModeDark = theme.theme === 'dark' ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light')

  return (
    <nav className={`${nav.container} ${isModeDark}`} >
      <Link to={"/"}>Inicio</Link>
      <Link to={"/contact"}>Contacto</Link>
      <Link to={"/fav"}>Favoritos</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {/* <button onClick={handleChangeTheme}>Change theme</button>
       */}
      <div className={nav.containerBtnTheme}>
        <div
          onClick={handleChangeTheme}
        >
          Change theme
        </div>
      </div>
    </nav >
  )
}

export default Navbar