import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access the URL parameters
import products from "./laptop-list";

export default function LaptopOverview() {
  const { id } = useParams(); // Get the ID parameter from the URL
  const [product, setProduct] = useState(null);

  // Fetch the product details based on the ID from the URL
  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  // If no product is found for the given ID, display a message
  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h1>
        <div className="mt-6">
          <img src={product.imageSrc[0]} alt={product.imageAlt[0]} className="w-full" />
        </div>
        <div className="mt-6">
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-700">Price: {product.price}</p>
          <p className="text-gray-700">Color: {product.color}</p>
          <button
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
            onClick={() => console.log(`Added product with ID ${product.id} to basket`)}
          >
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}
