import { Button, Typography, Container, Box, TextField, Alert, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';

function Home() {
	const [usuario, setUsuario] = useState('');
	const [mensajeError, setMensajeError] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		// Verificar si hay un mensaje
		if (location.state && location.state.mensajeError) {
			setMensajeError(location.state.mensajeError);
		}
	}, [location]);

	const handleIniciarSesion = () => {
		if (usuario) {
			localStorage.setItem('usuario', usuario);
			localStorage.setItem('autenticado', 'true');
			navigate('/productos');
		} else {
			setMensajeError('Por favor, ingresa un nombre de usuario');
		}
	};

	const verProductos = () => {
		navigate('/productos');
	};

	return (
		<div className='home-container'>
			<Container maxWidth={false} className='home-content'>
				<Typography variant='h2' component='h1' className='home-title'>
					Tienda de Ropa Online
				</Typography>

				<Typography variant='h6' className='home-subtitle'>
					Bienvenido a nuestra tienda online de ropa. Aquí encontrarás las últimas tendencias en moda. Regístrate para
					poder ver tus pedidos o navega como invitado.
				</Typography>

				{mensajeError && (
					<Alert severity='error' className='error-alert'>
						{mensajeError}
					</Alert>
				)}

				<Paper elevation={3} className='login-form'>
					<Typography variant='h5' component='h2' className='login-title'>
						Iniciar Sesión
					</Typography>

					<TextField
						label='Nombre de Usuario'
						variant='outlined'
						fullWidth
						value={usuario}
						onChange={(e) => setUsuario(e.target.value)}
						className='login-input'
					/>

					<Button variant='contained' color='primary' fullWidth onClick={handleIniciarSesion} className='login-button'>
						Iniciar Sesión
					</Button>

					<Button variant='outlined' color='primary' fullWidth onClick={verProductos} className='guest-button'>
						Ver Productos como Invitado
					</Button>
				</Paper>
			</Container>
		</div>
	);
}

export default Home;
