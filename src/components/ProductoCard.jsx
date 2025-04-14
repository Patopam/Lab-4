import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

function ProductoCard({ producto }) {
	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardMedia
				component='img'
				height='180'
				image={producto.imagen}
				alt={producto.nombre}
				sx={{ objectFit: 'cover' }}
			/>
			<CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<Typography gutterBottom variant='h6' component='div' sx={{ fontWeight: 'bold' }}>
					{producto.nombre}
				</Typography>
				<Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
					{producto.descripcion}
				</Typography>
				<Typography
					variant='h6'
					color='primary'
					sx={{
						mt: 'auto',
						fontWeight: 'bold',
						mb: 1,
					}}
				>
					${producto.precio}
				</Typography>
			</CardContent>
			<Box sx={{ p: 2, pt: 0 }}>
				<Button variant='contained' color='primary' fullWidth>
					Agregar al Carrito
				</Button>
			</Box>
		</Card>
	);
}

export default ProductoCard;
