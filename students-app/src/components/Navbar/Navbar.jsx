import './Navbar.css'
import warnerLogo from './../../assets/warner.png'
import Button from '../Button/Button'

const Navbar = () => {

    return (
        <header className='Navbar'>
            <img src={warnerLogo} alt="Logotipo" />

            <Button buttonLink={'/shop'} buttonText={'Tienda'} />

            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Productos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar