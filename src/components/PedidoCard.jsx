import {
	Paper,
	Typography,
	Box,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';

function PedidoCard({ pedido }) {
	const coloresEstado = {
		Entregado: '#4caf50',
		'En camino': '#2196f3',
		Procesando: '#ff9800',
	};

	const colorEstado = coloresEstado[pedido.estado] || '#757575';

	return (
		<Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2, border: '1px solid #e0e0e0' }}>
			<Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Pedido #{pedido.id} - {pedido.fecha}
				</Typography>
				<Typography
					sx={{ color: colorEstado, fontWeight: 'medium', p: 1, px: 2, bgcolor: `${colorEstado}15`, borderRadius: 1 }}
				>
					{pedido.estado}
				</Typography>
			</Box>

			<Divider sx={{ mb: 2 }} />

			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: 'bold' }}>Producto</TableCell>
							<TableCell align='right' sx={{ fontWeight: 'bold' }}>
								Cantidad
							</TableCell>
							<TableCell align='right' sx={{ fontWeight: 'bold' }}>
								Precio unitario
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{pedido.productos.map((prod, i) => (
							<TableRow key={i}>
								<TableCell>{prod.nombre}</TableCell>
								<TableCell align='right'>{prod.cantidad}</TableCell>
								<TableCell align='right'>${prod.precio}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Box sx={{ mt: 2, textAlign: 'right', fontWeight: 'bold' }}>Total: ${pedido.total}</Box>
		</Paper>
	);
}

export default PedidoCard;
