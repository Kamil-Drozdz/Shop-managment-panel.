import React, { useState } from 'react';

function FormAddProduct({ onAdd, counter, setCounter }) {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');
	const [availability, setAvailability] = useState('available');
	const [errors, setErrors] = useState({});

	const handleSubmit = e => {
		e.preventDefault();
		setErrors({});
		let isError = false;
		if (!name) {
			setErrors(errors => ({ ...errors, name: 'Name is required' }));
			isError = true;
		}
		if (!price) {
			setErrors(errors => ({ ...errors, price: 'Price is required' }));
			isError = true;
		}
		if (!image) {
			setErrors(errors => ({ ...errors, image: 'Image is required' }));
			isError = true;
		}
		if (!isError) {
			setCounter(counter + 1);
			onAdd({ id: counter, name, price, image, availability });
		}
	};

	return (
		<form
			className='fixed bottom-0 left-0 p-4 bg-gray-900 rounded-t-lg flex flex-col justify-center items-center w-60 text-white'
			onSubmit={handleSubmit}>
			<label className='mt-4'>
				Name:
				<input type='text' className='text-black' value={name} onChange={e => setName(e.target.value)} />
				{errors.name && <span className='text-red-600'>{errors.name}</span>}
			</label>
			<label className='mt-4'>
				Price:
				<input type='number' className='text-black' value={price} onChange={e => setPrice(e.target.value)} />
				{errors.price && <span className='text-red-600'>{errors.price}</span>}
			</label>
			<label>
				Image:
				<input type='text' className='text-black' value={image} onChange={e => setImage(e.target.value)} />
				{errors.image && <span className='text-red-600'>{errors.image}</span>}
			</label>
			<label>
				Availability:
				<select className='bg-gray-900 my-4' value={availability} onChange={e => setAvailability(e.target.value)}>
					<option value='available'>Available</option>
					<option value='unavailable'>Unavailable</option>
				</select>
			</label>
			<button className='p-2  mr-2 bg-orange-500 text-black rounded-lg' type='submit'>
				Add Product
			</button>
		</form>
	);
}

export default FormAddProduct;
