import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/App.css'
import { AuthContext } from '../../context';

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const logout = (evt) => {
		evt.preventDefault();
		setIsAuth(false);
		localStorage.removeItem('auth');
	}
	
	return (
		<div className='navbar'>
			<div>
				<Link to="/about" className='navbar__links'>О приложении</Link>
				<Link to="/posts" className='navbar__links'>Посты</Link>
				{isAuth
					?	<Link to="/login" className='navbar__links' onClick={logout}>	Выйти</Link>
					: <Link to="/posts" className='navbar__links'>Вход</Link>
				}
			</div>
		</div>
	)
}

export default Navbar;
