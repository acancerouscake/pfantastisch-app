import {FormEvent, useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';

import {AuthContext} from '../context/AuthContext';

const formStyles: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
};

const Login = () => {
	const {login} = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login(email, password).catch((e) => console.log(e));
	};

	return (
		<>
			<div
				className='centeredDiv'
				style={{flexDirection: 'column', width: '100vw'}}>
				<div
					className='centeredDiv'
					style={{
						flexDirection: 'column',
						backgroundColor: 'white',
						width: '40vw',
						maxWidth: '550px',
						height: '70vh',
						minHeight: '500px',
						borderRadius: '25px',
						boxShadow: '0 0 20px #dbd6d6',
					}}>
					<h1>Login</h1>
					<form
						onSubmit={handleSubmit}
						className='centeredDiv'
						style={{
							flexDirection: 'column',
							gap: 25,
						}}>
						<div style={formStyles}>
							<label htmlFor='email'>Email</label>
							<input
								value={email}
								name='email'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div style={formStyles}>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								name='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button type='submit'>Login</button>
					</form>

					<p>
						Not a user? <NavLink to='/newUser'>Sign Up</NavLink>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
