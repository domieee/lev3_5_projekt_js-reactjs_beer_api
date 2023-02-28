import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <header className='nav'>
                <Link
                className='navItem'
                to='/'>
                    Home
                </Link>
                <Link
                className='navItem'
                to='products'>
                    Products
                </Link>
            </header>
        </>
    );
}

export default Navigation;