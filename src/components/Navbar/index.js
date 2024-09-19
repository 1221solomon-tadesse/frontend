
import {  NavLink } from 'react-router-dom'
//import logoE from '../../assets/logoE.png'

const Navbar = () => {
    return(
        <div className='h-20 flex justify-between py-7 px-10 bg-white sticky top-0 w-screen max-w-screen-2xl'>
            {/* <Link className='flex justify-center items-center' to='/'>
                <img className='w-10 h-12' src={logoE} alt='logo'/>
                <h3 className='text-2xl font-normal'>tisha Garg</h3>
            </Link> */}
            <nav className='flex justify-center items-center'>
                <NavLink className='nav-link' to='/'>Home</NavLink>
                <NavLink className='nav-link' to='/work'>Work</NavLink>
                <NavLink className='nav-link' to='/about'>About</NavLink>
                <NavLink className='nav-link' to='/contact'>Contact</NavLink>
            </nav>
        </div>
    )
}

export default Navbar