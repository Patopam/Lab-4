import { Typography, Container, Box, Grid, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ProductoCard from '../../components/ProductoCard';
import { productosRopa } from '../../data/productos';
import './Productos.css';

function Productos() {
	const [nombreUsuario, setNombreUsuario] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		// Obtener nombre de usuario del localStorage
		const usuario = localStorage.getItem('usuario');
		if (usuario) {
			setNombreUsuario(usuario);
		}
	}, []);

	const irMisPedidos = () => {
		navigate('/mis-pedidos');
	};

	return (
		<div className='productos-page'>
			<Navbar />
			<Container maxWidth={false} className='productos-container'>
				<div className='productos-header'>
					<Typography variant='h3' component='h1' className='productos-title'>
						Catálogo de Productos
					</Typography>

					{nombreUsuario && (
						<Typography variant='h6' className='productos-greeting'>
							¡Hola {nombreUsuario}! Explora nuestros productos
						</Typography>
					)}
				</div>

				<div className='ver-pedidos-container'>
					<Button variant='contained' color='primary' onClick={irMisPedidos} className='ver-pedidos-button'>
						Ver Mis Pedidos
					</Button>
				</div>

				<Grid container spacing={3} className='productos-grid' sx={{ maxWidth: '1200px', margin: '0 auto' }}>
					{productosRopa.map((producto) => (
						<Grid item xs={12} sm={6} md={3} key={producto.id} sx={{ display: 'flex' }}>
							<ProductoCard producto={producto} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default Productos;
