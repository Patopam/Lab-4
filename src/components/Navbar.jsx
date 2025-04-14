import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();

	return (
		<AppBar
			position='static'
			className='navbar'
			sx={{
				width: '100vw',
				mb: 4,
				left: 0,
				right: 0,
			}}
		>
			<Toolbar
				sx={{
					width: '100%',
					padding: '0 24px',
					display: 'flex',
					justifyContent: 'space-between',
					maxWidth: '1200px',
					margin: '0 auto',
				}}
			>
				<Typography
					variant='h6'
					component='div'
					sx={{
						fontWeight: 'bold',
						fontSize: { xs: '1.1rem', sm: '1.3rem' },
					}}
				>
					Tienda de Ropa
				</Typography>
				<Box sx={{ display: 'flex' }}>
					<Button color='inherit' onClick={() => navigate('/')} sx={{ mx: 0.5 }}>
						Inicio
					</Button>
					<Button color='inherit' onClick={() => navigate('/productos')} sx={{ mx: 0.5 }}>
						Productos
					</Button>
					<Button color='inherit' onClick={() => navigate('/mis-pedidos')} sx={{ mx: 0.5 }}>
						Mis Pedidos
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
