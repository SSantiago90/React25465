import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './Context/miContexto'
import Nav from './Nav'

const Header = () => {

    const {calcCantidad} = useContext(contexto)

    return (
        <header id="layout-header" className='header'>
            <Link to="/">
                <h1 className='header__title'>Mi E-Commerce</h1>
            </Link>
            <Link to="/carrito">
                <span className="material-icons">
                    shopping_cart
                </span>
                {calcCantidad()}
            </Link>
            <Nav />
        </header>
    )
}

export default Header