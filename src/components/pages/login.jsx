import React, { useContext } from 'react'
import MyInput from '../UI/my-input/my-input'
import MyButton from '../UI/my-button/my-button'
import { AuthContext } from '../../context';

const Login = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const login = (evt) => {
		evt.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	}
	return (
		<div>
				<h1>Страница для входа в приложение</h1>
				<form onSubmit={login}>
					<MyInput type="text" placeholder="Введите логин" />
					<MyInput type="password" placeholder="Введите пароль" />
					<MyButton>Войти</MyButton>
				</form>
		</div>
	)
}

export default Login
