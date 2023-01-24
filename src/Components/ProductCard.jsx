import React from 'react';

function ProductCard(props) {
	const { name, price, image, availability, onEdit, onDelete, id } = props;
	return (
		<div className='min-h-[30vh] flex flex-col justify-center items-center border-2 rounded-lg hover:border-gray-900'>
			<img className='w-[10vw]' src={image} alt={name} />
			<h3>{name}</h3>
			<p>Price: {price}</p>
			<p>Availability: {availability}</p>
			<div className='flex m-2'>
				<button className='md:p-2 mr-2 bg-orange-500 text-black rounded-lg' onClick={onEdit}>
					Edit Product
				</button>
				<button className='md:p-2 bg-orange-500 text-black rounded-lg' onClick={() => onDelete(id)}>
					Delete Product
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
