import { Typography, Container, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import PedidoCard from '../../components/PedidoCard';
import { pedidosFicticios } from '../../Data/pedidos';
import './MisPedidos.css';

function MisPedidos() {
	const [nombreUsuario, setNombreUsuario] = useState('');

	useEffect(() => {
		// Obtener nombre de usuario del localStorage
		const usuario = localStorage.getItem('usuario');
		if (usuario) {
			setNombreUsuario(usuario);
		}
	}, []);

	return (
		<div className='pedidos-page'>
			<Navbar />
			<Container maxWidth={false} className='pedidos-container'>
				<div className='pedidos-header'>
					<Typography variant='h3' component='h1' className='pedidos-title'>
						Mis Pedidos
					</Typography>

					<Typography variant='h6' className='pedidos-subtitle'>
						Historial de compras de {nombreUsuario}
					</Typography>
				</div>

				<div className='pedidos-list' style={{ maxWidth: '1200px', width: '100%' }}>
					{pedidosFicticios.map((pedido) => (
						<PedidoCard key={pedido.id} pedido={pedido} />
					))}
				</div>
			</Container>
		</div>
	);
}

export default MisPedidos;
