import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data/products"; // Import from the shared file
import { Product } from "../../data/products"; // Import the Product interface

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: Product | undefined = allProducts.find(
    (product) => product.id === id
  ); // Find the product based on the id

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-custom-background bg-cover bg-center min-h-screen p-8 text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-75 rounded-lg shadow-lg p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl mb-4">{product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
