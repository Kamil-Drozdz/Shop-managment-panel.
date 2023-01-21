function FormEditProduct({ onSave, currentProduct, setCurrentProduct }) {
	const handleSubmit = e => {
		e.preventDefault();
		onSave(currentProduct);
	};

	return (
		<form
			className='fixed bottom-0 left-60 p-4 bg-gray-900 rounded-t-lg flex flex-col justify-center items-center w-60 text-white'
			onSubmit={handleSubmit}>
			<label className='mt-4'>
				Name:
				<input
					className='text-black'
					type='text'
					value={currentProduct.name}
					onChange={e => setCurrentProduct(prev => ({ ...prev, name: e.target.value }))}
				/>
			</label>
			<label className='mt-4'>
				Price:
				<input
					className='text-black'
					type='number'
					value={currentProduct.price}
					onChange={e => setCurrentProduct({ ...currentProduct, price: e.target.value })}
				/>
			</label>
			<label>
				Image:
				<input
					className='text-black'
					type='text'
					value={currentProduct.image}
					onChange={e => setCurrentProduct({ ...currentProduct, image: e.target.value })}
				/>
			</label>
			<label className='my-2 bg-gr'>
				Availability:
				<select
					className='bg-gray-900 mt-4'
					value={currentProduct.availability}
					onChange={e => setCurrentProduct({ ...currentProduct, availability: e.target.value })}>
					<option value='available'>Available</option>
					<option value='unavailable'>Unavailable</option>
				</select>
			</label>
			<button className='p-2 bg-orange-500 text-black rounded-lg' type='submit'>
				Save Product
			</button>
		</form>
	);
}

export default FormEditProduct;
