import ProductCard from './ProductCard';
function ProductsList({ onEdit, products, onDelete }) {
	return (
		<div className='flex flex-row flex-wrap justify-center'>
			{products.map(product => (
				<ProductCard
					id={product.id}
					name={product.name}
					price={product.price}
					image={product.image}
					availability={product.availability}
					onEdit={() => onEdit(product)}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
}

export default ProductsList;
