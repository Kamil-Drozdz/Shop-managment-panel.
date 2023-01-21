import { useState } from 'react';
import ProductsList from './Components/ProductList';
import FormAddProduct from './Components/FormAddProduct';
import FormEditProduct from './Components/FormEditProduct';
import image1 from './assets/item1.jpg';
import image2 from './assets/item2.jpg';
import image3 from './assets/item3.jpg';

function App() {
	const [products, setProducts] = useState([
		{ id: 1, name: 'Bag', price: 9.99, image: image1, availability: 'available' },
		{ id: 2, name: 'Ring', price: 19.99, image: image2, availability: 'available' },
		{ id: 3, name: 'T-Shirt', price: 29.99, image: image3, availability: 'unavailable' },
	]);

	const [counter, setCounter] = useState(4);
	const [currentProduct, setCurrentProduct] = useState([]);

	const handleAddProduct = newProduct => {
		setCounter(counter + 1);
		setProducts([...products, { ...newProduct, id: counter }]);
	};
	const handleDeleteProduct = id => {
		setProducts(products.filter(product => product.id !== id));
	};

	const handleSaveProduct = editedProduct => {
		const newProducts = products.map(product => {
			if (product.id === currentProduct.id) {
				return editedProduct;
			}
			return product;
		});
		setProducts(newProducts);
	};
	return (
		<div className='m-auto mx-20'>
			{products.length > 0 ? (
				<>
					<ProductsList
						products={products}
						setProducts={setProducts}
						onDelete={handleDeleteProduct}
						onEdit={product => setCurrentProduct({ ...product })}
					/>
					<FormEditProduct
						currentProduct={currentProduct}
						setCurrentProduct={setCurrentProduct}
						onSave={handleSaveProduct}
					/>
				</>
			) : (
				<h1 className='flex justify-center items-center h-screen text-3xl'>
					Ups, we don't have anything cool here, adds some products.
				</h1>
			)}

			<FormAddProduct counter={counter} setCounter={setCounter} onAdd={handleAddProduct} />
		</div>
	);
}

export default App;
