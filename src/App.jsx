import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './screens/Home/Home';
import Productos from './screens/Productos/Productos';
import MisPedidos from './screens/MisPedidos/MisPedidos';
import './App.css';

function App() {
	return (
		<>
			<CssBaseline />
			<BrowserRouter>
				<div className='app-container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/productos' element={<Productos />} />
						<Route
							path='/mis-pedidos'
							element={
								localStorage.getItem('autenticado') === 'true' ? (
									<MisPedidos />
								) : (
									<Navigate
										to='/'
										state={{ mensajeError: 'Acceso denegado. Debes iniciar sesión para ver tus pedidos.' }}
									/>
								)
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
