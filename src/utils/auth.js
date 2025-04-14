export const iniciarSesion = (usuario) => {
	localStorage.setItem('usuario', usuario);
	localStorage.setItem('autenticado', 'true');
};

export const cerrarSesion = () => {
	localStorage.removeItem('usuario');
	localStorage.setItem('autenticado', 'false');
};

export const obtenerUsuario = () => {
	return localStorage.getItem('usuario');
};

export const estaAutenticado = () => {
	return localStorage.getItem('autenticado') === 'true';
};
