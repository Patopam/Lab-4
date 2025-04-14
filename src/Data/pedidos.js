export const pedidosFicticios = [
	{
		id: 1,
		fecha: '10/04/2025',
		productos: [
			{ nombre: 'Camiseta roja', cantidad: 2, precio: '19.99' },
			{ nombre: 'Jeans bordados', cantidad: 1, precio: '39.99' },
		],
		total: '79.97',
		estado: 'Entregado',
	},
	{
		id: 2,
		fecha: '03/04/2025',
		productos: [{ nombre: 'Chaqueta con diseño vintage', cantidad: 1, precio: '29.99' }],
		total: '29.99',
		estado: 'En camino',
	},
	{
		id: 3,
		fecha: '25/03/2025',
		productos: [{ nombre: 'Saco en lana', cantidad: 1, precio: '45.99' }],
		total: '45.99',
		estado: 'Procesando',
	},
];
